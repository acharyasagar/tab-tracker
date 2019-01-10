import jwt from 'jsonwebtoken';
import express from 'express';
import { getRepository, Repository } from 'typeorm';
import entities from '../entities';

import { IConfig } from '../types/config'

import config from '../config';

const { User } = entities;

let { jwtSecret, jwtOptions } = (config as IConfig).authentication;

const user = new User();

const signJwtToken = (payload): Promise<any> => {
  return jwt.sign(payload, jwtSecret, jwtOptions);
}

export default class AuthenticationController {
  
  static async register(req: express.Request, res: express.Response) {
    const userRepo: Repository<any> = await getRepository(User);
    try {
      // Extract user credentials from request body and save it to database
      const user = Object.assign({}, req.body);
      const createdUser = await userRepo.save(user);

      // Extract user details for creating payload for jwt token
      const payload = Object.assign(
        {},
        { id: createdUser.id }, 
        { email: createdUser.email});
      
      // Create jwt token 
      const token = await signJwtToken(payload);
      
      // Send back user and token as the response
      return res.status(200).json({
        user: createdUser,
        token
      });

    } catch (err) {
      console.log(err);
      res.status(400).json({ err: ['The name of the user account you are creating or updating already exists.'] });
    }
  }

  static async login (req: express.Request, res: express.Response) {

    // Extract user credentials from request body
    const user = Object.assign({}, req.body);
    const userRepo: Repository<any> = await getRepository(User);
    
    
    try {
      
      // Find user is registered or not 
      const foundUser = await userRepo.findOne({ email: user.email});
      if(!foundUser) return res.status(403).json({ err: ['User is not registered'] });
      
      // match password and send token in the response
      const isPasswordValid = user.password === foundUser.password;
      if(!isPasswordValid) return res.status(403).json({ err: ['Incorrect login information'] });

      // create and send the token as the response
      const token = await signJwtToken(Object.assign({}, { id: user.id }, { email: user.email }));
      return res.status(200).json({user, token});

    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: ['Internal server error!!'] });
    }
  }
}


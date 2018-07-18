const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

async function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: ONE_WEEK })
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body)
      res.send({
        user: user.toJSON(),
        token: await jwtSignUser(user.toJSON())
      })
    } catch (err) {
      res.status(400).send({
        error: ['Email already in use']
      })
    }
  },
  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      })
      if (!user) {
        res.status(403).send({
          error: ['Seems like you have not registered to the platform yet !!!']
        })
        return
      }
      const isPasswordValid = await user.comparePassword(req.body.password)
      console.log(isPasswordValid, user.email)

      if (!isPasswordValid) {
        res.status(401).send({
          error: ['Invalid Password']
        })
        return
      }
      res.send({
        user: user.toJSON(),
        token: await jwtSignUser(user.toJSON())
      })
    } catch (err) {
      console.log(global.chalk.yellow)
      res.status(500).send({
        error: ['Internal Server error']
      })
    }
  }
}

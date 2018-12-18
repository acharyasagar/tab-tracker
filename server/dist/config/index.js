"use strict";
require('dotenv').config();
const env = process.env.ENV;
const envConfig = require(`./${env}`);
module.exports = envConfig;

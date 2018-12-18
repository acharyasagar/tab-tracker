require('dotenv').config();

const env = process.env.ENV;
const envConfig = require(`./${env}`);

export = envConfig;
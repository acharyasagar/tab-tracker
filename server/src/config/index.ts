require('dotenv').config();

const env: string | undefined = process.env.ENV;
const envConfig: object = require(`./${env}`);

export default envConfig;
// tslint:disable-next-line
require('dotenv').config()

const env: string | undefined = process.env.ENV
// tslint:disable-next-line
const envConfig: object = require(`./${env}`)

export = envConfig

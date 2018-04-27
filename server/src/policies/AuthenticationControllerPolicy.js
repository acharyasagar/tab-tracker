const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{6,32}$'))
    }
    /* eslint-disable */
    const { error, value } = Joi.validate(req.body, schema)
    /* eslint-enable */
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          return res.status(400).send({
            error: ['You must provide a valid address']
          })
        case 'password':
          return res.status(400).send({
            error: ['The password must be at least eight characters long and not longer than thirty two characters.', 'The password must contain ONLY the following characters: lower case, uppercase and numbers.']
          })
        default:
          return res.status(400).send({
            error: ['Invalid registration information']
          })
      }
    }
    return next()
  }
}

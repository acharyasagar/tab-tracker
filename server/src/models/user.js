const argon2 = require('argon2')

const hashOptions = {
  timeCost: 4,
  memoryCost: 2 ** 13,
  parallelism: 2,
  type: argon2.argon2d
}
/* eslint-disable */
async function hashPassword(user, options) {
  if (!user.changed('password')) {
    return;
  }

  try {
    const hash = await argon2.hash(user.password, hashOptions)
    user.setDataValue('password', hash)
  } catch (err) {
    console.log(err)
  }
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
  User.prototype.comparePassword = async function (password){
    console.log(typeof password)
    try {
      // return await argon2.verify(this.password, password)
      return this.password === password
    } catch (err) {
      console.log(global.chalk.yellow(err))
    }
  }
  return User
}

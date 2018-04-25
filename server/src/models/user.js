module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    user: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
}

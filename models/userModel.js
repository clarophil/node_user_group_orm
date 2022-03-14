const Sequelize = require('sequelize')
const db = require('../db.js')

const User = db.define('user', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    lastname: { type: Sequelize.STRING, allowNull: false },
    firstname: { type: Sequelize.STRING, allowNull: false }
})

module.exports = User
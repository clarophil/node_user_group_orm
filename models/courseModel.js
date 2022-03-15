
const Sequelize = require('sequelize')
const sequelize = require('../db.js')
const Course = sequelize.define('course', {
    course_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: { type: Sequelize.STRING, allowNull: false }
})
module.exports = Course
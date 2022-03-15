const Sequelize = require('sequelize')
const sequelize = require('../db.js');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Group = require('../models/groupModel');
db.User = require('../models/userModel');
db.Course =  require('../models/courseModel');

db.Group.hasMany( db.User, { foreignKey: "group_id" });
db.User.belongsTo( db.Group, { foreignKey: "group_id" });
db.User.belongsToMany(db.Course, {
    through: "note",
    as: "users",
    foreignKey: "user_id",
});
db.Course.belongsToMany(db.User, {
    through: "note",
    as: "courses",
    foreignKey: "course_id",
});

module.exports = db
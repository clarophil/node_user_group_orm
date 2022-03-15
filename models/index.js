const Sequelize = require('sequelize')
const sequelize = require('../db.js');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Group = require('../models/groupModel');
db.User = require('../models/userModel');

db.Group.hasMany( db.User, { foreignKey: "group_id" });
db.User.belongsTo( db.Group, { foreignKey: "group_id" });

module.exports = db
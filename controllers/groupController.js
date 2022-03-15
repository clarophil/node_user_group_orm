const Group = require('../models/groupModel');
const User = require('../models/userModel');

Group.hasMany(User, { foreignKey: "group_id" });

exports.groupCreate = async (req, res) => {
    let group = Group.build({ name: req.body.name })
    await group.save()
        .then(data => {
            console.log(group.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    // or user.create in one time
}

exports.groupList = async function (req, res) {
    await Group.findAll({include: [User]})
        .then(data => {
            console.log("All groups:", JSON.stringify(data, null, 2));
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.groupUpdate = async function (req, res) {
    if (req.params.group_id > 0) {
        await Group.update(
            { name: req.body.name },
            { where: { group_id: req.params.group_id } }
        )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Group not found' })
}

exports.groupDelete = async function (req, res) {
    if (req.params.group_id) {
        await Group.destroy({ where: { group_id: req.params.group_id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Group not found' })
}

exports.groupFindOne = async function (req, res) {
    if (req.params.group_id) {
        await Group.findOne({ where: { group_id: req.params.group_id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Group not found' })
}

const { Op } = require("sequelize");
exports.groupFindOp = async function (req, res) {
    await Group.findAll({
        where: {
            group_id:
                { [Op.gt]: 2, [Op.lt]: 9 }
        }
    })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.groupUpdate = async function (req, res) {
    if (req.params.group_id > 0) {
        await Group.update(
            { name: req.body.name }, 
            { where: { group_id: req.params.group_id } }
            )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Group not found' })
}

exports.groupDelete = async function (req, res) {
    if (req.params.group_id) {
            await Group.destroy({ where: { group_id: req.params.group_id } })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    }
    else res.status(400).json({ message: 'Group not found'})
}

exports.groupFindOne = async function (req, res) {
    if (req.params.group_id) {
        await Group.findOne({ where: { group_id: req.params.group_id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Group not found' })
}

exports.groupFindOp = async function (req, res) {
    await Group.findAll({ 
        where: { group_id : 
            { [Op.gt]:2, [Op.lt]:9 }
        } } )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}


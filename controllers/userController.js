const db = require('../models/index');
const User = db.User;

exports.userList = async function (req, res) {
    await User.findAll({ attributes: ['lastname', 'firstname'] })
        .then(data => {
            console.log("All users:", JSON.stringify(data, null, 2));
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.userCreate = async function (req, res) {
    let user = User.build({ lastname: req.body.lastname, firstname: req.body.firstname, group_id: req.body.group_id })
    await user.save()
        .then(data => {
            console.log(user.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    // or user.create in one time
}

exports.userUpdate = async function (req, res) {
    if (req.params.user_id > 0) {
        await User.update(
            { lastname: req.body.lastname, firstname: req.body.firstname },
            { where: { user_id: req.params.user_id } }
        )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'User not found' })
}

exports.userDelete = async function (req, res) {
    if (req.params.user_id) {
        await User.destroy({ where: { user_id: req.params.user_id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'User not found' })
}

exports.userFindOne = async function (req, res) {
    if (req.params.user_id) {
        await User.findOne({ where: { user_id: req.params.user_id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'User not found' })
}

const { Op } = require("sequelize");
exports.userFindOp = async function (req, res) {
    await User.findAll({
        where: {
            user_id:
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

exports.userOrder = async function (req, res) {
    await User.findAll({ order: ['lastname'] })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}


const User = require('../models/userModel');
const Group = require('../models/groupModel');

User.belongsTo(Group, { foreignKey: "group_id" });

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

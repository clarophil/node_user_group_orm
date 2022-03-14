const Group = require('../models/groupModel');

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
// Import express 
let express = require('express');

// Initialize the app 
let app = express();

app.use(express.json());

// Importing the database model
const Sequelize = require('sequelize')
const db = require('./db.js');

const User = require('./models/userModel');
const Group = require('./models/groupModel');


User.belongsTo(Group, { foreignKey: "group_id"});
Group.hasMany(User);

// Creating all the tables defined in user
db.sync({force: true})

app.post('/group', async (req, res) => {
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
})

app.get('/user', async (req, res) => {
    await User.findAll()
        .then(data => {
            console.log("All users:", JSON.stringify(data, null, 2));
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

app.post('/user',  async (req, res) => {
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
})

 // Launch app to listen to specified port
app.listen(8000, function () {
    console.log('Runnings on port 8000');
})
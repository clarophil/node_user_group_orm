// Import express 
let express = require('express');

// Initialize the app 
let app = express();

// CORS enable
const cors = require('cors');
app.use(cors());

app.use(express.json());

require('dotenv').config();

// Importing the database model
// const Sequelize = require('sequelize')
// const db = require('./db.js')

// Creating all the tables defined in user
// db.sync();
// db.sync({force: true})

let router = require('./routes');
app.use("/api", router)

// Manage bad route
app.use(function (req, res, next) {
    res.status(404).json({
        "error": "path not found" +
            `${req.protocol}://${req.get('host')}${req.originalUrl}`
    });
});

// Launch app to listen to specified port
const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Runnings on ' + process.env.SERVER + port);
});
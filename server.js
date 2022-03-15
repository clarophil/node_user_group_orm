// Import express 
let express = require('express');

// Initialize the app 
let app = express();

app.use(express.json());

const Sequelize = require('sequelize')
const db = require('./db.js')

// Creating all the tables defined in user
db.sync()
// db.sync({force: true})

let router = require('./routes');
app.use("/", router)

 // Launch app to listen to specified port
app.listen(8000, function () {
    console.log('Runnings on port 8000');
})
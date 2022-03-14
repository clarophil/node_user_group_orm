let express = require('express');
let router = express.Router();

// Import user controller
const userController = require('./controllers/userController');
const groupController = require('./controllers/groupController');

router.get('/user', userController.userList);
router.post('/user', userController.userCreate);
router.post('/group', groupController.groupCreate);

module.exports = router;
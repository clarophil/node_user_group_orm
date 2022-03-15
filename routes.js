let express = require('express');
let router = express.Router();

// Import user controller
const userController = require('./controllers/userController');
const groupController = require('./controllers/groupController');

router.get('/', (req, res) => res.redirect('/user'));
router.get('/user', userController.userList);
router.post('/user', userController.userCreate)
router.put('/user/:user_id', userController.userUpdate);
router.delete('/user/:user_id', userController.userDelete);
router.get('/user/find/:user_id', userController.userFindOne)
router.get('/user/filter', userController.userFindOp);
router.get('/user/order', userController.userOrder);


router.get('/group', groupController.groupList);
router.post('/group', groupController.groupCreate)
router.put('/group/:group_id', groupController.groupUpdate);
router.delete('/group/:group_id', groupController.groupDelete);
router.get('/group/find/:group_id', groupController.groupFindOne)

module.exports = router;
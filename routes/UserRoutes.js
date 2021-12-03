const router = require('express').Router()
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.get('/', auth, UserController.getUsers)
router.get('/:id', auth, UserController.detailUser)
router.patch('/:id', auth, UserController.updateUser)

module.exports = router
const router = require('express').Router()
const TimeController = require('../controllers/TimeController');
const auth = require('../middleware/auth');

router.get('/', auth, TimeController.getTimes)
router.post('/', auth, TimeController.createTime)
router.patch('/:id/join-Time', auth, TimeController.joinTime)

module.exports = router
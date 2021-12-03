const router = require('express').Router()
const ProductController = require('../controllers/ProductController');
const auth = require('../middleware/auth');

router.get('/', auth, ProductController.getProducts)
router.post('/', auth, ProductController.createProduct)
router.patch('/:id/join-Product', auth, ProductController.joinProduct)

module.exports = router
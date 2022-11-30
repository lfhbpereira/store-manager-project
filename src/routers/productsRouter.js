const express = require('express');
const productsController = require('../controllers/productsController');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/search', productsController.getProductsByName);
router.get('/:id', productsController.getProductById);

router.post('/', validateName, productsController.insertProduct);

router.put('/:id', validateName, productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;

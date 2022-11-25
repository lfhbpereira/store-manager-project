const express = require('express');
const productsController = require('../controllers/productsController');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);

router.post('/', validateName, productsController.insertProduct);

module.exports = router;

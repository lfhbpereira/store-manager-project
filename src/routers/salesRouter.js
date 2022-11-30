const express = require('express');
const salesController = require('../controllers/salesController');
const validateProductId = require('../middlewares/validateProductId');
const validateQuantity = require('../middlewares/validateQuantity');

const router = express.Router();

router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getSaleById);

router.post('/', validateProductId, validateQuantity, salesController.insertSale);

router.put('/:id', validateProductId, validateQuantity, salesController.updateSale);

router.delete('/:id', salesController.deleteSale);

module.exports = router;

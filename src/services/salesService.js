const salesModel = require('../models/salesModel');
const productsModel = require('../models/productsModel');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();

  return { message: sales };
};

const getSaleById = async (id) => {
  const saleById = await salesModel.getSaleById(id);

  if (!saleById.length) {
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }

  return { type: null, message: saleById };
};

const existingId = async (sales) => {
  const message = [];

  await Promise.all(sales.map(async (sale) => {
    const result = await productsModel.getProductById(sale.productId);

    if (!result) {
      message.push({ message: 'Product not found' });
    }
  }));

  return message;
};

const insertSale = async (sales) => {
  const message = await existingId(sales);

  if (message.length > 0) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  const insertId = await salesModel.insertSale();

  await Promise.all(sales.map(async (sale) => {
    const { productId, quantity } = sale;

    await salesModel.insertProductSale({ saleId: insertId, productId, quantity });
  }));

  return { type: null, message: insertId };
};

module.exports = { getAllSales, getSaleById, insertSale };

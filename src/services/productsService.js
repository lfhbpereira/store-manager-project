const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();

  return { message: products };
};

const getProductById = async (id) => {
  const productById = await productsModel.getProductById(id);

  if (!productById) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  return { type: null, message: productById };
};

const insertProduct = async (name) => {
  const newId = await productsModel.insertProduct(name);
  const newProduct = await productsModel.getProductById(newId);

  return { message: newProduct };
};

module.exports = { getAllProducts, getProductById, insertProduct };

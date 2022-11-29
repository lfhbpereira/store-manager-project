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

const updateProduct = async (product) => {
  const existingId = await productsModel.getProductById(product.id);

  if (!existingId) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  const updatedProduct = await productsModel.updateProduct(product);

  return { type: null, message: updatedProduct };
};

module.exports = { getAllProducts, getProductById, insertProduct, updateProduct };

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

const getProductsByName = async (name) => {
  const productByName = await productsModel.getProductsByName(name);
  const allProducts = await productsModel.getAllProducts();

  if (!productByName) {
    return { message: allProducts };
  }

  return { message: productByName };
};

const insertProduct = async (name) => {
  const newId = await productsModel.insertProduct(name);
  const newProduct = await productsModel.getProductById(newId);

  return { message: newProduct };
};

const updateProduct = async (product) => {
  const productById = await productsModel.getProductById(product.id);

  if (!productById) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  const updatedProduct = await productsModel.updateProduct(product);

  return { type: null, message: updatedProduct };
};

const deleteProduct = async (id) => {
  const productById = await productsModel.getProductById(id);

  if (!productById) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  const deletedProduct = await productsModel.deleteProduct(id);

  return { type: null, message: deletedProduct };
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByName,
  insertProduct,
  updateProduct,
  deleteProduct,
};

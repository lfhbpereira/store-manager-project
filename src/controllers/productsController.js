const productsService = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const { message } = await productsService.getAllProducts();

  res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(id);

  if (type) {
    return res.status(404).json({ message });
  }

  return res.status(200).json(message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.insertProduct(name);

  res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.updateProduct({ id, name });

  if (type) {
    return res.status(404).json({ message });
  }

  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);

  if (type) {
    return res.status(404).json({ message });
  }

  return res.status(204).json();
};

module.exports = { getAllProducts, getProductById, insertProduct, updateProduct, deleteProduct };

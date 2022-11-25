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

  return res.status(201).json(message);
};

module.exports = { getAllProducts, getProductById, insertProduct };

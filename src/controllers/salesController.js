const salesService = require('../services/salesService');

const getAllSales = async (_req, res) => {
  const { message } = await salesService.getAllSales();

  res.status(200).json(message);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleById(id);

  if (type) {
    return res.status(404).json({ message });
  }

  return res.status(200).json(message);
};

const insertSale = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesService.insertSale(sales);

  if (type) {
    return res.status(404).json({ message });
  }

  return res.status(201).json({ id: message, itemsSold: sales });
};

module.exports = { getAllSales, getSaleById, insertSale };

const validateProductId = (req, res, next) => {
  const sales = req.body;
  const productId = sales.some((sale) => sale.productId);

  if (!productId) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

module.exports = validateProductId;

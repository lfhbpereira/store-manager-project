const validateQuantity = (req, res, next) => {
  const sales = req.body;
  const quantity = sales.some((sale) => sale.quantity || sale.quantity === 0);
  const minimumQuantity = sales.some((sale) => sale.quantity >= 1);

  if (!quantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (!minimumQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = validateQuantity;

const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT a.id AS saleId, a.date AS date, b.product_id AS productId, b.quantity AS quantity
    FROM StoreManager.sales AS a
    INNER JOIN StoreManager.sales_products AS b
    ON a.id = b.sale_id
    ORDER BY a.id ASC, b.product_id ASC`,
  );

  return result;
};

const getSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT a.date AS date, b.product_id AS productId, b.quantity AS quantity
    FROM StoreManager.sales AS a
    INNER JOIN StoreManager.sales_products AS b
    ON a.id = b.sale_id
    WHERE a.id = ?`,
    [id],
  );

  return result;
};

module.exports = { getAllSales, getSaleById };

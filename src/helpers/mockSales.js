const getAllSales = [
  {
    saleId: 1,
    date: '2022-11-30T09:37:13.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2022-11-30T09:37:13.000Z',
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: '2022-11-30T09:37:13.000Z',
    productId: 3,
    quantity: 15,
  },
];

const insertSale = [
  {
    productId: 1,
    quantity: 1,
  },
];

const newSale = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 1,
    },
  ],
};

const newSaleReqBody = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 1,
  },
];

module.exports = { getAllSales, insertSale, newSale, newSaleReqBody };

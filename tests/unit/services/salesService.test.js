const chai = require('chai');
const sinon = require('sinon');
const mockSales = require('../../../src/helpers/mockSales');
const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');
const productsModel = require('../../../src/models/productsModel');

const { expect } = chai;

describe('Testing the Sales Service', function () {
  afterEach(sinon.restore);

  describe('When "getAllSales" function is called', function () {
    it('returns the list of all sales', async function () {
      sinon.stub(salesModel, 'getAllSales').resolves(mockSales.getAllSales);

      const result = await salesService.getAllSales();

      expect(result.message).to.be.deep.equal(mockSales.getAllSales);
    });
  });

  describe('When "getSaleById" function is called', function () {
    it('returns a specific sale', async function () {
      sinon.stub(salesModel, 'getSaleById').resolves([mockSales.getAllSales[0]]);

      const result = await salesService.getSaleById(1);

      expect(result.type).to.be.equal(null);
      expect(result.message).to.be.deep.equal([mockSales.getAllSales[0]]);
    });
  });

  describe('When "insertSale" function is called', function () {
    it('returns the inserted sale', async function () {
      sinon.stub(productsModel, 'getProductById').resolves([{}]);
      sinon.stub(salesModel, 'insertSale').resolves(3);
      sinon.stub(salesModel, 'insertProductSale').resolves();

      const result = await salesService.insertSale(mockSales.insertSale);

      expect(result.type).to.be.equal(null);
      expect(result.message).to.be.equal(3);
    });
  });
});

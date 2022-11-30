const chai = require('chai');
const sinon = require('sinon');
const mockSales = require('../../../src/helpers/mockSales');
const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');

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
});

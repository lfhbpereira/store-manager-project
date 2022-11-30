const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mockSales = require('../../../src/helpers/mockSales');
const salesService = require('../../../src/services/salesService');
const salesController = require('../../../src/controllers/salesController');

const { expect } = chai;

chai.use(sinonChai);

describe('Testing the Sales Controller', function () {
  afterEach(sinon.restore);

  describe('When "getAllSales" function is called', function () {
    it('returns the list of all sales', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'getAllSales').resolves({ message: mockSales.getAllSales });

      await salesController.getAllSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockSales.getAllSales)
    });
  });

  describe('When "getSaleById" function is called', function () {
    it('returns a specific sale', async function () {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'getSaleById').resolves({ message: mockSales.getAllSales[0] });

      await salesController.getSaleById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockSales.getAllSales[0])
    });
  });

  describe('When "insertSale" function is called', function () {
    it('returns the inserted sale', async function () {
      const req = { body: mockSales.newSaleReqBody };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'insertSale').resolves({ message: 3 });

      await salesController.insertSale(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(mockSales.newSale);
    });
  });
});

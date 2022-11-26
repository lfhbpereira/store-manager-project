const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mockProducts = require('../../../src/helpers/mockProducts');
const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');

const { expect } = chai;

chai.use(sinonChai);

describe('Testing the Products Controller', function () {
  afterEach(sinon.restore);

  describe('When "getAllProducts" function is called', function () {
    it('returns the list of all products', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getAllProducts').resolves({ message: mockProducts.getAllProducts });

      await productsController.getAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockProducts.getAllProducts)
    });
  });
});

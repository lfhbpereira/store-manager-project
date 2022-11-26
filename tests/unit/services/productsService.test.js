const chai = require('chai');
const sinon = require('sinon');
const mockProducts = require('../../../src/helpers/mockProducts');
const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');

const { expect } = chai;

describe('Testing the Products Service', function () {
  afterEach(sinon.restore);

  describe('When "getAllProducts" function is called', function () {
    it('returns the list of all products', async function () {
      sinon.stub(productsModel, 'getAllProducts').resolves(mockProducts.getAllProducts);

      const result = await productsService.getAllProducts();

      expect(result.message).to.be.deep.equal(mockProducts.getAllProducts);
    });
  });
});

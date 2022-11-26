const chai = require('chai');
const sinon = require('sinon');
const mockProducts = require('../../../src/helpers/mockProducts');
const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');

const { expect } = chai;

describe('Testing the Products Model', function () {
  afterEach(sinon.restore);

  describe('When "getAllProducts" function is called', function () {
    it('returns the list of all products', async function () {
      sinon.stub(connection, 'execute').resolves([mockProducts.getAllProducts]);

      const result = await productsModel.getAllProducts();

      expect(result).to.be.deep.equal(mockProducts.getAllProducts);
    });
  });
});

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

  describe('When "getProductById" function is called', function () {
    it('returns a specific product', async function () {
      sinon.stub(connection, 'execute').resolves([[mockProducts.getAllProducts[0]]]);

      const result = await productsModel.getProductById(1);

      expect(result).to.be.deep.equal(mockProducts.getAllProducts[0]);
    });
  });

  describe('When "insertProduct" function is called', function () {
    it('returns the inserted product id', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

      const result = await productsModel.insertProduct('ProdutoX');

      expect(result).to.be.equal(4);
    });
  });

  describe('When "deleteProduct" function is called', function () {
    it('deletes a product', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const result = await productsModel.deleteProduct(1);

      expect(result).to.be.equal(1);
    });
  });
});

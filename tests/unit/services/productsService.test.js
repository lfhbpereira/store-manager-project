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

  describe('When "getProductById" function is called', function () {
    it('returns a specific product', async function () {
      sinon.stub(productsModel, 'getProductById').resolves(mockProducts.getAllProducts[0]);

      const result = await productsService.getProductById(1);

      expect(result.type).to.be.equal(null);
      expect(result.message).to.be.deep.equal(mockProducts.getAllProducts[0]);
    });
  });

  describe('When "insertProduct" function is called', function () {
    it('returns the inserted product id', async function () {
      sinon.stub(productsModel, 'insertProduct').resolves(4);
      sinon.stub(productsModel, 'getProductById').resolves(mockProducts.insertProduct);

      const result = await productsService.insertProduct('ProdutoX');

      expect(result.message).to.be.deep.equal(mockProducts.insertProduct);
    });
  });

  describe('When "deleteProduct" function is called', function () {
    it('deletes a product', async function () {
      sinon.stub(productsModel, 'getProductById').resolves(mockProducts.getAllProducts[0]);
      sinon.stub(productsModel, 'deleteProduct').resolves({ affectedRows: 1 });

      const result = await productsService.deleteProduct(1);

      expect(result.type).to.be.equal(null);
      expect(result.message).to.be.deep.equal({ affectedRows: 1 });
    });
  });
});

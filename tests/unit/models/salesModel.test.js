const chai = require('chai');
const sinon = require('sinon');
const mockSales = require('../../../src/helpers/mockSales');
const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/salesModel');

const { expect } = chai;

describe('Testing the Sales Model', function () {
  afterEach(sinon.restore);

  describe('When "getAllSales" function is called', function () {
    it('returns the list of all sales', async function () {
      sinon.stub(connection, 'execute').resolves([mockSales.getAllSales]);

      const result = await salesModel.getAllSales();

      expect(result).to.be.deep.equal(mockSales.getAllSales);
    });
  });

  describe('When "getSaleById" function is called', function () {
    it('returns a specific sale', async function () {
      sinon.stub(connection, 'execute').resolves([[mockSales.getAllSales[0]]]);

      const result = await salesModel.getSaleById(1);

      expect(result).to.be.deep.equal([mockSales.getAllSales[0]]);
    });
  });

  describe('When "insertSale" function is called', function () {
    it('returns the inserted sale id', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

      const result = await salesModel.insertSale();

      expect(result).to.be.deep.equal(1);
    });
  });

  describe('When "deleteSale" function is called', function () {
    it('deletes a sale', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const result = await salesModel.deleteSale(1);

      expect(result.affectedRows).to.be.equal(1);
    });
  });
});

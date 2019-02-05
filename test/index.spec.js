require('dotenv').config();
const chai = require('chai');
const http = require('chai-http');

const build = require('./../public/index');

chai.use(http);

const baseUrl = `${process.env.HOST}:${process.env.PORT}`;

describe('Start Test', () => {
  before(async () => {
    // eslint-disable-next-line global-require
    await require('./../src/index');
  });

  it('should success render view', async () => {
    const data = await chai.request(baseUrl)
      .get('/order');

    const type = 'content-type';
    chai.expect(data.header[type]).to.be.equal('text/html; charset=utf-8');
    chai.expect(data.status).to.be.equal(200);
  });

  it('should success build data', () => {
    const dummy = [
      // eslint-disable-next-line object-curly-newline
      { id: 1, first_name: 'fuad', last_name: 'hasan', email: 'hasan@gmail.com', item: 'Barang1', quantity: 2, price: 10000 },
      // eslint-disable-next-line object-curly-newline
      { id: 2, first_name: 'ahmad', last_name: 'hadi', email: 'ahmad@gmail.com', item: 'Barang2', quantity: 1, price: 4000 },
    ];

    const data = build(dummy);
    // console.log(data);

    chai.expect(data).to.be.an('object');
    chai.expect(data).to.have.property('dataItem');
    chai.expect(data.dataItem).to.have.includes('Barang2', 'Barang1');
  });
});

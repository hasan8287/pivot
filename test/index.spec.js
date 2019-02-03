require('dotenv').config();
const chai = require('chai');
const http = require('chai-http');

chai.use(http);

const baseUrl = `${process.env.HOST}:${process.env.PORT}`;

describe('Start Test', () => {
  before(async () => {
    await require('./../src/index');
  });

  it('should success render view', () => {
    chai.request(baseUrl)
      .get('/order')
      .then((res) => {
        chai.expect(res.header.content-type).to.be.equal('text/html');
        chai.expect(res.status).to.be.equal(200);
      })
  });

});

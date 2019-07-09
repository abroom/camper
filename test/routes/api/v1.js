import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server, { app } from '../../../lib/server';

chai.use(chaiHttp);

after((done) => {
  server.close();
  done();
});

describe('API', () => {
  describe('v1 GET /sites', () => {
    it('returns list of all sites', (done) => {
      chai.request(app)
        .get('/api/v1/sites')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('Retrieved sites successfully.');
          expect(res.body.sites).to.be.an('array').with.length(3);
          done();
        });
    });
  });
});

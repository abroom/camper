import chai from 'chai';
import chaiHttp from 'chai-http';
import server, { app } from '../../lib/server';

chai.use(chaiHttp);
chai.should();

after((done) => {
  server.close();
  done();
});

describe('UI', () => {
  describe('GET /', () => {
    it('shows "Hello World"', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.equal('Hello World\n');
          done();
        });
    });
  });
});

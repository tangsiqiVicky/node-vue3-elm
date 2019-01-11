import http from 'http';
// import assert from 'mocha';
import chai from 'chai';
var expect = chai.expect

import '../lib/index.js';

describe('Example Node Server', () => {
    it('should retur 200', done => {
        http.get('http://127.0.0.1:4321', res => {
            // assert.equal(200, res.statusCode);
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });
});
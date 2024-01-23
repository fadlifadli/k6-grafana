import http from 'k6/http';
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

export const options = {
  thresholds: {
    checks: ['rate == 1.00'],
  },
};

export default function () {
  describe('Hello world!', () => {
    const response = http.get('https://test-api.k6.io/public/crocodiles/');

    expect(response.status, 'response status').to.equal(200);
    expect(response).to.have.validJsonBody();
    expect(response.json(), 'croc list').to.be.an('array');
  });
}

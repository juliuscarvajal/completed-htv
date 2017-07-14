const requestPayload = require('../test/request.json');
const requestInvalidPayload = require('../test/request-invalid.json');

import { assert } from 'chai';
import { validate } from './validate';

describe('Validate payload', () => {
  it('should validate payload and return true if valid', (done) => {
    assert(validate(requestPayload));
    done();
  });

  it('should validate payload and return false if invalid', (done) => {
    assert(!validate(requestInvalidPayload));
    done();
  });
})

const requestPayload = require('../test/request.json');

const expectedResponse = {
  "response": [
    {
      "concataddress": "Level 6 146 Arthur Street North Sydney NSW 2060",
      "type": "htv",
      "workflow": "completed"
    },
    {
      "concataddress": "360 Elizabeth St Melbourne VIC 3000",
      "type": "htv",
      "workflow": "completed"
    }
  ]
};

import { assert } from 'chai';
import { parse } from './parse';

describe('Filter payload', () => {
  it('should filter by workflow: completed and type: htv', (done) => {
    assert.deepEqual(parse(requestPayload), expectedResponse);
    done();
  });
})

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

describe('A thing', () => {
  it('should work', () => {
    assert.strictEqual(1, 1);
  });

  it('should be ok', () => {
    assert.strictEqual(2, 2);
  });

  describe('a nested thing', () => {
    it('should work', () => {
      assert.strictEqual(3, 3);
    });
  });
});
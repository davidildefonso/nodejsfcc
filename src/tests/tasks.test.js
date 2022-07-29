/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
const test = require('node:test');
const assert = require('node:assert/strict');

test('synchronous passing test', (_t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1);
});

test('callback passing test', (_t, done) => {
  // done() is the callback function. When the setImmediate() runs, it invokes
  // done() with no arguments.
  // eslint-disable-next-line @typescript-eslint/no-implied-eval, @typescript-eslint/no-unsafe-argument
  setImmediate(done);
});

test('top level test', async (t) => {
  await t.test('subtest 1', (_t) => {
    assert.strictEqual(1, 1);
  });

  await t.test('subtest 2', (_t) => {
    assert.strictEqual(2, 2);
  });
});

// The skip option is used, but no message is provided.
test('skip option', { skip: true }, (_t) => {
  // This code is never executed.
});

// The skip option is used, and a message is provided.
test('skip option with message', { skip: 'this is skipped' }, (_t) => {
  // This code is never executed.
});

test('skip() method', (t) => {
  // Make sure to return here as well if the test contains additional logic.
  t.skip();
});

test('skip() method with message', (t) => {
  // Make sure to return here as well if the test contains additional logic.
  t.skip('this is skipped');
});

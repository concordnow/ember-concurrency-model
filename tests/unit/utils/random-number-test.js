import randomNumber from 'ember-concurrency-model/utils/random-number';
import { module, test } from 'qunit';

module('Unit | Utility | random-number', function () {
  // TODO: Replace this with your real tests.
  test('it works', function (assert) {
    let result = randomNumber();
    assert.ok(result);
  });
});

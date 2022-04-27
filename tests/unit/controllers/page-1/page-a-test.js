import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | page-1/page-a', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:page-1/page-a');
    assert.ok(controller);
  });
});

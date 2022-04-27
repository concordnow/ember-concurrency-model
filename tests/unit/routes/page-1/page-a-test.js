import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | page-1/page-a', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:page-1/page-a');
    assert.ok(route);
  });
});

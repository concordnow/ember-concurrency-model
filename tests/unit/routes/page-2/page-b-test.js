import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | page-2/page-b', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:page-2/page-b');
    assert.ok(route);
  });
});

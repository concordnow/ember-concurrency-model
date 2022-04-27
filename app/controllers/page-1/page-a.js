import Controller from '@ember/controller';
import { service } from '@ember/service';
import { computed } from '@ember/object';

export default class Page1PageAController extends Controller {
  @service routerUtils;

  get isDummy2Getter() {
    return this.routerUtils.currentEdgeRoute.dummy2?.startsWith('dummTask2');
  }

  @computed('routerUtils.currentEdgeRoute.{dummy1,dummy2}')
  get dummy1PlusDummy2() {
    let { dummy1, dummy2 } = this.routerUtils.currentEdgeRoute;
    return dummy1 + dummy2;
  }
}

import Service from '@ember/service';
import { service } from '@ember/service';
import { getOwner } from '@ember/application';

export default class RouterUtilsService extends Service {
  @service router;

  get currentEdgeRoute() {
    const owner = getOwner(this);
    return owner.lookup(`route:${this.router.currentRouteName}`);
  }
}

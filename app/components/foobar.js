import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class FoobarComponent extends Component {
  @service routerUtils;
}

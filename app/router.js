import EmberRouter from '@ember/routing/router';
import config from 'ember-concurrency-model/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('page-1', function () {
    this.route('page-a');
    this.route('page-b');
  });
  this.route('page-2', function () {
    this.route('page-b');
    this.route('page-a');
  });
});

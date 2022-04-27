import Route from '@ember/routing/route';
import { task, timeout } from 'ember-concurrency';
import { hash } from 'rsvp';
import randomNumber from 'ember-concurrency-model/utils/random-number';
import { dependentKeyCompat } from '@ember/object/compat';

export default class Page1PageARoute extends Route {
  model() {
    return hash({
      dummyTask1: this.dummyTask1.perform(),
      // dummyTask2: this.dummyTask2.perform(),
    });
  }

  get dummy1() {
    return this.dummyTask1?.lastSuccessful?.value;
  }

  @dependentKeyCompat
  get dummy2() {
    return this.dummyTask2?.lastSuccessful?.value;
  }

  @task({
    cancelOn: 'deactivate',
  })
  *dummyTask1() {
    yield timeout(1000);
    console.log('dummyTask2 should be cancelled on deactivate');
    return `dummyTask1-${randomNumber(50)}`;
  }

  @task({
    cancelOn: 'deactivate',
  })
  *dummyTask2() {
    yield timeout(4000);
    console.log('dummyTask2 should be cancelled on deactivate');
    return `dummyTask2-${randomNumber(50)}`;
  }
}

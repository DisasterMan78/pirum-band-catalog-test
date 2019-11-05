/* globals describe, it */
import { expect } from 'chai';

import store from './index';

const storeMethods = ['dispatch', 'getState', 'replaceReducer', 'subscribe'];

describe('Test store configuration', () => {
  it('should provide a store', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(store)
      .to.exist;
  });


  storeMethods.forEach((method) => {
    it(`should have a ${method} method on the store`, () => {
      // eslint-disable-next-line no-unused-expressions
      expect(store[method])
        .to.exist;
    });
  });
});

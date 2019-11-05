/* globals describe, afterEach, test, expect */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('async actions', () => {
  afterEach(() => {
    store.clearActions();
  });

  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: 'REQUEST_DATA',
      },
    ];

    store.dispatch(actions.fetchData());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

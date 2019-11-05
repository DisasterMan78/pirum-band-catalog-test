/* globals describe, it, expect */
/* eslint no-useless-escape: 0 */

import reducer, { initialState } from '.';
import types from '../actions/action-types';

describe('INITIAL_STATE', () => {
  it('should have the correct initial state', () => {
    const action = { type: 'dummy_action' },
          undefinedReducer = reducer(undefined, action);

    expect(undefinedReducer).toEqual(initialState);
  });
});

describe('DATA ACTIONS', () => {
  it('should return the correct state when data requested', () => {
    const action = {
            type: types.REQUEST_DATA,
          },
          expectedState = {
            ...initialState,
            loading: true,
          };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the correct state when data received', () => {
    const action = {
            type: types.RECEIVE_DATA,
            results: [
              { band: 'Cat Power', album: 'Sun', song: 'Human Being' },
              { band: 'Beatles', album: 'Abbey Road', song: "Maxwell's Silver Hammer" },
              { band: 'Cat Power', album: 'Sun', song: 'Always On My Own' },
              { band: 'Thomas J. Bergersen', album: 'Sun', song: 'Our Destiny' },
              { band: 'Nightwish', album: 'Wishmaster', song: 'Bare Grace Misery' },
              { band: 'Beatles', album: 'Abbey Road', song: 'Here Comes the Sun' },
              { band: 'Cat Power', album: 'Sun', song: '3, 6, 9' }],
          },
          expectedState = {
            ...initialState,
            loading: false,
            albums: action.results,
          },
          reducedData = reducer(initialState, action);

    expect(reducedData).toEqual(expectedState);
  });
});

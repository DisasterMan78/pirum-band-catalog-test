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
              { band: 'Cat Power', album: 'Sun', song: '3, 6, 9' },
              { band: 'Cat Power', album: 'Made Up Album', song: 'Fake Song' },
            ],
          },
          expectedState = {
            ...initialState,
            loading: false,
            bands: {
              'Cat Power': {
                band: 'Cat Power',
                albums: {
                  'Made Up Album': {
                    band: 'Cat Power',
                    album: 'Made Up Album',
                    songs: ['Fake Song'],
                  },
                  Sun: {
                    band: 'Cat Power',
                    album: 'Sun',
                    songs: ['Human Being', 'Always On My Own', '3, 6, 9'],
                  },
                },
              },
              Beatles: {
                band: 'Beatles',
                albums: {
                  'Abbey Road': {
                    band: 'Beatles',
                    album: 'Abbey Road',
                    songs: ['Maxwell\'s Silver Hammer', 'Here Comes the Sun'],
                  },
                },
              },
              'Thomas J. Bergersen': {
                band: 'Thomas J. Bergersen',
                albums: {
                  Sun: {
                    band: 'Thomas J. Bergersen',
                    album: 'Sun',
                    songs: ['Our Destiny'],
                  },
                },
              },
              Nightwish: {
                band: 'Nightwish',
                albums: {
                  Wishmaster: {
                    band: 'Nightwish',
                    album: 'Wishmaster',
                    songs: ['Bare Grace Misery'],
                  },
                },
              },
            },
          },
          reducedData = reducer(initialState, action);

    expect(reducedData).toEqual(expectedState);
  });
});

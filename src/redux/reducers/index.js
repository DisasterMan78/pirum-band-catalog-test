import {
  REQUEST_DATA,
  RECEIVE_DATA,
} from '../actions';

export const initialState = {
  loading: false,
  albums: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, loading: true };

    case RECEIVE_DATA: {
      const albums = action.results;

      return {
        ...state,
        albums,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;

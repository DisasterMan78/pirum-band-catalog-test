import {
  REQUEST_DATA,
  RECEIVE_DATA,
} from '../actions';

export const initialState = {
  loading: false,
  bands: {},
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, loading: true };

    case RECEIVE_DATA: {
      const tracks = action.results,
            bands = {};
      if (tracks) {
        tracks.forEach((track) => {
          if (!bands[track.band]) {
            bands[track.band] = {};
            bands[track.band].band = track.band;
            bands[track.band].albums = {};
          }

          if (!bands[track.band].albums[track.album]) {
            bands[track.band].albums[track.album] = {};
            bands[track.band].albums[track.album].band = track.band;
            bands[track.band].albums[track.album].album = track.album;
            bands[track.band].albums[track.album].songs = [];
          }

          bands[track.band].albums[track.album].songs.push(track.song);
        });
      }

      return {
        ...state,
        bands,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;

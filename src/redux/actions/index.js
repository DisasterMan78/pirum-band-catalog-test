const API_URL = 'http://localhost:3004';

function handleResponse(response) {
  return response.json()
    .then((json) => {
      if (!response.ok) {
        const error = {
          ...json,
          status: response.status,
          statusText: response.statusText,
        };

        return Promise.reject(error);
      }
      return json;
    });
}

function fetchApi(dispatch, endpoint, request, received) {
  dispatch(request());
  return fetch(`${API_URL}${endpoint}`)
    .then(handleResponse)
    .then((json) => {
      dispatch(received(json));
    })
    .catch((error) => {
      return dispatch(received({ error: error.message }))
    });
}


const dataEndpoint = '/songs';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const receivedData = (json) => ({
  type: RECEIVE_DATA,
  results: json,
});

export function fetchData() {
  return (dispatch) => {
    fetchApi(dispatch, dataEndpoint, requestData, receivedData);
  };
}

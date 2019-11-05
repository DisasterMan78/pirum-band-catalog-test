const API_URL = '/public';


function fetchApi(dispatch, endpoint, request, received) {
  dispatch(request());

  return fetch(`${API_URL}${endpoint}`)
    .then(
      (response) => response.json(),
      // eslint-disable-next-line no-console
      (error) => console.log('An error occurred.', error),
    )
    .then((json) => {
      dispatch(received(json));
    });
}


const dataEndpoint = '/data.json';

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

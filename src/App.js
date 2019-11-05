import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import BandList from './components/band-list';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BandList />
    </Provider>
  );
}

export default App;

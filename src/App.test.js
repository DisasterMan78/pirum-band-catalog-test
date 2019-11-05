/* globals describe, it */
import React from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { initialState } from './redux/reducers';

import App from './App';


configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const middleware = [thunk],
      mockStore = configureMockStore(middleware),
      store = mockStore(initialState),
      Component = () => (
        <Provider store={store}>
          <App />
        </Provider>
      ),
      wrapper = mount(<Component />);

describe('App rendered', () => {
  it('should render', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a list to hold the albums', () => {
    expect(wrapper.find('BandList').length)
      .to.equal(1);
  });
});

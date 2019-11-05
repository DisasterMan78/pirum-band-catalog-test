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

import { initialState } from '../redux/reducers';

import BandList from './band-list';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const middleware = [thunk],
      mockStore = configureMockStore(middleware),
      store = mockStore(initialState),
      Component = () => (
        <Provider store={store}>
          <BandList />
        </Provider>
      ),
      wrapper = mount(<Component />);

describe('Album list component', () => {
  it('should render', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a list to hold the albums', () => {
    expect(wrapper.find('ul').length)
      .to.equal(1);
  });
});

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
import testData from './testData.json';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const middleware = [thunk],
      mockStore = configureMockStore(middleware),
      storeData = { ...initialState, ...testData },
      store = mockStore(storeData),
      Component = () => (
        <Provider store={store}>
          <BandList />
        </Provider>
      ),
      wrapper = mount(<Component />);

describe('Album list component', () => {
  it('should render without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a button to load the data', () => {
    expect(wrapper.find('button#load-songs').length)
      .to.equal(1);
  });

  it('should render a list to hold the bands', () => {
    expect(wrapper.find('ul').length)
      .to.equal(1);
  });

  it('should render a list item for each band', () => {
    expect(wrapper.find('li').length)
      .to.equal(Object.keys(testData.bands).length);
  });
});

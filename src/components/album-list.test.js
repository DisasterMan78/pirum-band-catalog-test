/* globals describe, it */
import React from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

import AlbumList from './album-list';
import testData from './testData.json';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const bandData = testData.bands.Beatles,
      Component = () => (<AlbumList band={bandData} />
      ),
      wrapper = mount(<Component />);

describe('Album list component', () => {
  it('should render without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a list item to hold the band and albums', () => {
    expect(wrapper.find('li.band-item').length)
      .to.equal(1);
  });

  it('should render a heading with the band name', () => {
    const h2 = wrapper.find('h2');
    expect(h2.length)
      .to.equal(1);

    expect(h2.text())
      .to.equal(bandData.band);
  });

  it('should render a list for each album', () => {
    expect(wrapper.find('SongList').length)
      .to.equal(Object.keys(bandData.albums).length);
  });
});

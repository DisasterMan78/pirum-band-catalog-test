/* globals describe, it */
import React from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

import SongList from './song-list';
import testData from './testData.json';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const albumData = testData.bands.Beatles.albums['Abbey Road'],
      Component = () => (<SongList album={albumData} />
      ),
      wrapper = mount(<Component />);

describe('Song list component', () => {
  it('should render without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a list item to hold the songs', () => {
    expect(wrapper.find('li.album-item').length)
      .to.equal(1);
  });

  it('should render a heading with the album name', () => {
    const h3 = wrapper.find('h3');
    expect(h3.length)
      .to.equal(1);

    expect(h3.text())
      .to.equal(albumData.album);
  });

  it('should render a list to hold the songs', () => {
    expect(wrapper.find('ul.song-list').length)
      .to.equal(1);
  });

  it('should render a list item for each song containing the song name', () => {
    const songs = wrapper.find('li.song-item');

    expect(songs.length)
      .to.equal(Object.keys(albumData.songs).length);

    songs.forEach((song, index) => {
      expect(song.text())
        .to.equal(albumData.songs[index]);
    })
  });
});

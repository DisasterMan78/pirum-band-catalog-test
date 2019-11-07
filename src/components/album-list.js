import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import ToggleButton from './toggle-button';
import SongList from './song-list';

const AlbumList = (props) => {
  const { band } = props,
        [open, setOpen] = useState(false),
        toggleChildren = () => {
          // eslint-disable-next-line no-unused-expressions
          (open) ? setOpen(false) : setOpen(true);
        };

  return (
    <li className={`band-item${open ? ' open' : ''}`}>
      <h2>
        {band.band}
      </h2>
      <ToggleButton onClick={toggleChildren} state={open} type="albums" title={band.band} />
      <ul className="album-list">
        {/* eslint-disable-next-line arrow-body-style */}
        {band.albums && Object.keys(band.albums).map((albumKey) => {
          return (<SongList album={band.albums[albumKey]} key={albumKey} />);
        })}
      </ul>
    </li>
  );
};

AlbumList.propTypes = {
  band: PropTypes.shape({
    albums: PropTypes.shape(),
    band: PropTypes.string.isRequired,
  }),
};

AlbumList.defaultProps = {
  band: {},
};

export default AlbumList;

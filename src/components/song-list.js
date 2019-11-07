import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import ToggleButton from './toggle-button';

const SongList = (props) => {
  const { album } = props,
        [open, setOpen] = useState(false),
        toggleChildren = () => {
          // eslint-disable-next-line no-unused-expressions
          (open) ? setOpen(false) : setOpen(true);
        };

  return (
    <li className={`album-item${open ? ' open' : ''}`}>
      <h3>
        {album.album}
      </h3>
      <ToggleButton onClick={toggleChildren} state={open} type="tracks" title={`${album.band} ${album.album}`} />
      <ul className="song-list">
        {album.songs && Object.keys(album.songs).map((songKey) => (<li className="song-item" key={songKey}>{album.songs[songKey]}</li>))}
      </ul>
    </li>
  );
};

SongList.propTypes = {
  album: PropTypes.shape({
    album: PropTypes.string.isRequired,
    band: PropTypes.string.isRequired,
    songs: PropTypes.array.isRequired,
  }).isRequired,
};

export default SongList;

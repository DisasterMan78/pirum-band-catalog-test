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
        <ToggleButton onClick={toggleChildren} />
      </h3>
      <ul className="song-list">
        {album.songs && Object.keys(album.songs).map((songKey) => {
          return (<li className="song-item" key={songKey}>{album.songs[songKey]}</li>);
        })}
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

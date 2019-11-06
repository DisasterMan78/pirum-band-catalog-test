import React from 'react';
import { PropTypes } from 'prop-types';

const SongList = (props) => {
  const { album } = props;

  return (
    <li className="album-item">
      <h3>{album.album}</h3>
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

import React from 'react';
import { PropTypes } from 'prop-types';

import SongList from './song-list';

const AlbumList = (props) => {
  const { band } = props;

  return (
    <li className="band-item">
      <h2>{band.band}</h2>
      <ul className="album-list">
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

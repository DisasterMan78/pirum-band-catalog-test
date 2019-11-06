import React from 'react';
import { PropTypes } from 'prop-types';

const AlbumList = (props) => {
  const { band } = props;

  return (
    <li>
      <h2>{band.band}</h2>
      {band.albums && Object.keys(band.albums).map((albumKey) => {
        return (<ul className="album-listing" band={band.albums[albumKey] } key={albumKey}>{albumKey}</ul>);
      })}
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

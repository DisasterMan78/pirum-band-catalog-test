import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchData } from '../redux/actions/index';
import AlbumList from './album-list';

const BandList = () => {
  const dispatch = useDispatch(),
        buttonOnClick = () => {
          dispatch(fetchData());
        },
        bands = useSelector((state) => state.bands);

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" id="load-songs" onClick={buttonOnClick}>Show Songs</button>
      <ul className="bands-listing">
        {bands && Object.keys(bands).map((bandKey) => {
          return (<AlbumList band={bands[bandKey]} key={bandKey} />);
        })}
      </ul>
    </div>
  );
};

export default BandList;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchData } from '../redux/actions/index';
import AlbumList from './album-list';

const BandList = () => {
  const dispatch = useDispatch(),
        bands = useSelector((state) => state.bands);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="bands-list">
      <ul className="band-item">
        {bands && Object.keys(bands).map((bandKey) => {
          return (<AlbumList band={bands[bandKey]} key={bandKey} />);
        })}
      </ul>
    </div>
  );
};

export default BandList;

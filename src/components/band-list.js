import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchData } from '../redux/actions/index';
import AlbumList from './album-list';

import './band-list.css';

const BandList = () => {
  const dispatch = useDispatch(),
        bands = useSelector((state) => state.bands);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="bands-list">
      <h1>Band Catalog Test</h1>
      <p>Drill down into the catalog with the buttons to explore albums and songs by these bands</p>
      <ul className="band-item">
        {/* eslint-disable-next-line arrow-body-style */}
        {bands && Object.keys(bands).map((bandKey) => {
          return (<AlbumList band={bands[bandKey]} key={bandKey} />);
        })}
      </ul>
    </div>
  );
};

export default BandList;

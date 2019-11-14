import React, { FunctionComponent, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchData } from '../redux/actions/index';
import ErrorDisplay from './error-display';
import AlbumList from './album-list';

import './band-list.css';

type AlbumType = {
  band: string;
  album: string;
  tracks: [ string ];
}

type BandType = {
  band: string;
  albums: [ AlbumType ];
}

type BandsType = {
  [key:string]: BandType;
}

const BandList: FunctionComponent = () => {
  let errorDisplay;

  const dispatch = useDispatch(),
        error = useSelector((state: { error: object; }) => state.error),
        bands = useSelector((state: { bands: BandsType; }) => state.bands);

  if (error) {
    errorDisplay = (<ErrorDisplay error={error} />);
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="bands-list">
      <h1>Band Catalog Test</h1>
      <p>Drill down into the catalog with the buttons to explore albums and songs by these bands</p>
      <ul className="band-item">
        {errorDisplay}
        {/* eslint-disable-next-line arrow-body-style */}
        {bands && Object.keys(bands).map((bandKey) => {
          return (<AlbumList band={bands[bandKey]} key={bandKey} />);
        })}
      </ul>
    </div>
  );
};

export default BandList;

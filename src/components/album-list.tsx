import React, { useState } from 'react';

import ToggleButton from './toggle-button';
import SongList from './song-list';

import { BandType } from '../prium-react-test';

type AlbumProps = {
  band: BandType;
}

type AlbumKey = any;

const AlbumList = ({ band }: AlbumProps) => {
  const [open, setOpen] = useState(false),
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
        {band.albums && Object.keys(band.albums).map((albumKey: AlbumKey) => {
          return (<SongList album={band.albums[albumKey]} key={albumKey} />);
        })}
      </ul>
    </li>
  );
};

AlbumList.defaultProps = {
  band: {},
};

export default AlbumList;

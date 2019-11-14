import React, { useState } from 'react';

import ToggleButton from './toggle-button';
import { AlbumType } from '../prium-react-test.d';

type AlbumProps = {
  album: AlbumType;
}

type SongKey = any;

const SongList = ({ album }: AlbumProps) => {
  const [open, setOpen] = useState(false),
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
        {album.songs && Object.keys(album.songs).map((songKey: SongKey) => (<li className="song-item" key={songKey}>{album.songs[songKey]}</li>))}
      </ul>
    </li>
  );
};

export default SongList;

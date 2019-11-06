import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchData } from '../redux/actions/index';

const BandList = () => {

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" id="load-songs">Show Songs</button>
      <ul bands={bands}>no content yet</ul>
    </div>
  );
};

export default BandList;

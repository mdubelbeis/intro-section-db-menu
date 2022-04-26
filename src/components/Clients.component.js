import React from 'react';

import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';

const Clients = () => {
  return (
    <div>
      <div>
        <img src={databiz} alt="databiz logo" />
      </div>
      <div>
        <img src={audiophile} alt="audiophile logo" />
      </div>
      <div>
        <img src={meet} alt="meet logo" />
      </div>
      <div>
        <img src={maker} alt="maker logo" />
      </div>
    </div>
  );
};

export default Clients;

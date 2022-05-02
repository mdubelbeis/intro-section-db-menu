import React from 'react';

import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';

const Clients = () => {
  return (
    <div className="flex justify-between items-center mt-10 max-w-xl mx-auto lg:mt-0 lg:absolute lg:bottom-0 lg:ml-8">
      <div>
        <img className="logo" src={databiz} alt="databiz logo" />
      </div>
      <div className="lg:ml-12">
        <img
          className="w-12 xl:w-24"
          src={audiophile}
          alt="audiophile logo"
        />
      </div>
      <div className="lg:ml-12">
        <img className="logo" src={meet} alt="meet logo" />
      </div>
      <div className="lg:ml-12">
        <img className="logo" src={maker} alt="maker logo" />
      </div>
    </div>
  );
};

export default Clients;

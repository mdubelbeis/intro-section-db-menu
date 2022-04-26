import { useState } from 'react';

import Logo from '../images/logo.svg';
import Menu from '../images/icon-menu.svg';

import Image from './Image.component';
import Info from './Info.component';
import Clients from './Clients.component';
import Nav from './Nav.component';

const App = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const showMobileNav = (value) => {
    setMobileNav(value);
  };

  return (
    <div className="py-6 px-4">
      <header className="relative flex p-2 items-center justify-between">
        <img className="pt-1" src={Logo} alt="logo" />
        <div onClick={() => setMobileNav(true)}>
          <img className="w-10" src={Menu} alt="menu button" />
        </div>
        {mobileNav && (
          <>
            <div
              className={`${
                mobileNav ? 'bg-almost-black' : 'bg-almost-white'
              } h-screen w-screen -z-100 fixed top-0 left-0 opacity-80`}
            ></div>
            <div className="fixed top-0 right-0 bg-almost-white w-8/12 h-screen z-100">
              <Nav showMobileNav={showMobileNav} />
            </div>
          </>
        )}
      </header>

      <main className="mt-10">
        <Image />
        <Info />
        <Clients />
      </main>
    </div>
  );
};

export default App;

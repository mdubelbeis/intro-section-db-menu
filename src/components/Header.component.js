import { useState } from 'react';
import Logo from '../images/logo.svg';
import Menu from '../images/icon-menu.svg';

import Nav from './Nav.component';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const showMobileNav = (value) => {
    setMobileNav(value);
  };

  return (
    <>
      <img className="pt-1" src={Logo} alt="logo" />
      <div onClick={() => setMobileNav(true)}>
        <img className="w-10" src={Menu} alt="menu button" />
      </div>
      {mobileNav && (
        <>
          <div
            className={`${
              mobileNav ? 'bg-almost-black' : 'bg-almost-white'
            } h-screen w-screen fixed top-0 left-0 opacity-80`}
          ></div>
          <div className="fixed top-0 right-0 bg-almost-white w-8/12 h-screen max-w-lg">
            <Nav showMobileNav={showMobileNav} />
          </div>
        </>
      )}
    </>
  );
};

export default Header;

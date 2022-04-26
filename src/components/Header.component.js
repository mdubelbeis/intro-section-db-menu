import { useState } from 'react';
import Logo from '../images/logo.svg';
import Menu from '../images/icon-menu.svg';

import MobileNav from './MobileNav.component';
import DesktopNav from './DesktopNav.component';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const showMobileNav = (value) => {
    setShowNav(value);
  };

  return (
    <>
      <div className="lg:flex lg:items-center lg:gap-10 lg:relative">
        <img className="pt-1" src={Logo} alt="logo" />
        <div className="hidden lg:block">
          <MobileNav />
        </div>
      </div>
      <div onClick={() => setShowNav(true)}>
        <img
          className="w-10 lg:hidden"
          src={Menu}
          alt="menu button"
        />
      </div>
      {showNav && (
        <div className="lg:hidden">
          <div
            className={`${
              showNav ? 'bg-almost-black' : 'bg-almost-white'
            } h-screen w-screen fixed top-0 left-0 opacity-80`}
          ></div>
          <div className="fixed top-0 right-0 bg-almost-white w-8/12 h-screen max-w-lg">
            <MobileNav showMobileNav={showMobileNav} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

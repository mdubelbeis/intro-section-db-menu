import { useState } from 'react';

import downArrow from '../images/icon-arrow-down.svg';
import upArrow from '../images/icon-arrow-up.svg';
import menuClose from '../images/icon-close-menu.svg';

import NavItems from './NavItems.component';

const arrow = {
  open: `${upArrow}`,
  closed: `${downArrow}`,
};

const Nav = ({ showMobileNav }) => {
  const [featureArrow, setFeatureArrow] = useState(arrow.closed);
  const [companyArrow, setCompanyArrow] = useState(arrow.closed);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const onFeatureClick = () => {
    featureArrow === arrow.closed
      ? setFeatureArrow(arrow.open)
      : setFeatureArrow(arrow.closed);

    setOpenFeatures(!openFeatures);
    setOpenCompany(false);
  };

  const onCompanyClick = () => {
    companyArrow === arrow.closed
      ? setCompanyArrow(arrow.open)
      : setCompanyArrow(arrow.closed);

    setOpenCompany(!openCompany);
    setOpenFeatures(false);
  };

  return (
    <div className="text-medium-gray p-8 text-sm lg:flex lg:gap-8 lg:p-0 lg:items-start">
      <div
        className="fixed top-4 right-4 hover:cursor-pointer"
        onClick={() => showMobileNav(false)}
      >
        <img
          className="bg-medium-grey lg:hidden"
          src={menuClose}
          alt="Close menu btn"
        />
      </div>

      {/*///// FEATURES */}
      <div className="flex flex-col gap-4 mt-16 lg:mt-0">
        <div
          className="flex items-center gap-4 hover:text-almost-black hover:cursor-pointer lg:gap-2"
          onClick={onFeatureClick}
        >
          <h3 className="text-base">Features</h3>
          <img
            className="w-2 h-2"
            src={featureArrow}
            alt="arrow menu"
          />
        </div>
        {openFeatures && (
          <div className="space-y-4 lg:shadow-xl lg:py-6 lg:px-8 lg:fixed lg:top-14 lg:left-24 lg:rounded-xl lg:bg-white">
            <NavItems />
          </div>
        )}
      </div>

      {/* //// COMPANY */}
      <div className="flex flex-col gap-4 mt-4 lg:mt-0">
        <div
          className="flex items-center gap-[11px] hover:text-almost-black hover:cursor-pointer lg:gap-2"
          onClick={onCompanyClick}
        >
          <h3 className="text-base">Company</h3>
          <img
            className="w-2 h-2"
            src={companyArrow}
            alt="arrow menu"
          />
        </div>
        {openCompany && (
          <div className="space-y-4 px-6 lg:shadow-xl lg:py-6 lg:px-8 lg:fixed lg:top-14 lg:left-72 lg:rounded-xl lg:bg-white active:text-almost-black">
            <p className="hover:text-almost-black hover:cursor-pointer">
              History
            </p>
            <p className="hover:text-almost-black hover:cursor-pointer">
              Our Team
            </p>
            <p className="hover:text-almost-black hover:cursor-pointer">
              Blog
            </p>
          </div>
        )}
      </div>

      {/* //// OTHER */}
      <div className="mt-4 hover:text-almost-black hover:cursor-pointer lg:mt-0">
        <h3 className="text-base">Careers</h3>
      </div>
      <div className="mt-4 hover:text-almost-black hover:cursor-pointer lg:mt-0">
        <h3 className="text-base">About</h3>
      </div>

      {/*//// USER */}
      <div className="mt-10 flex flex-col items-center gap-4 lg:mt-0 lg:flex-row lg:gap-6 lg:fixed lg:top-4 lg:right-10 lg:text-base">
        <div className="hover:text-almost-black hover:cursor:pointer">
          <a href="#">Login</a>
        </div>
        <div className="w-full" onClick={(e) => e.preventDefault()}>
          <a
            className="py-2 border-2 border-gray-400 inline-block w-full rounded-xl text-center hover:cursor:pointer hover:bg-almost-black hover:border-almost-black hover:text-almost-white lg:px-6"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;

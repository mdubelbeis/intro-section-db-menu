import { useState } from 'react';

import downArrow from '../images/icon-arrow-down.svg';
import upArrow from '../images/icon-arrow-up.svg';
import notepad from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import bell from '../images/icon-reminders.svg';
import clock from '../images/icon-planning.svg';
import menuClose from '../images/icon-close-menu.svg';

const navItems = [
  {
    icon: notepad,
    text: 'Todo List',
  },
  {
    icon: calendar,
    text: 'Calendar',
  },
  {
    icon: bell,
    text: 'Reminders',
  },
  {
    icon: clock,
    text: 'Planning',
  },
];

const arrow = {
  open: `${upArrow}`,
  closed: `${downArrow}`,
};

const MobileNav = ({ showMobileNav }) => {
  const [featureArrow, setFeatureArrow] = useState(arrow.closed);
  const [companyArrow, setCompanyArrow] = useState(arrow.closed);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const onFeatureClick = () => {
    featureArrow === arrow.closed
      ? setFeatureArrow(arrow.open)
      : setFeatureArrow(arrow.closed);

    setOpenFeatures(!openFeatures);
  };

  const onCompanyClick = () => {
    companyArrow === arrow.closed
      ? setCompanyArrow(arrow.open)
      : setCompanyArrow(arrow.closed);

    setOpenCompany(!openCompany);
  };

  return (
    <div className="text-medium-gray p-8 text-sm lg:flex lg:gap-4 lg:p-0 lg:items-center lg:justify-between lg:w-full">
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
        {openFeatures &&
          navItems.map((item) => {
            return (
              <div key={item.text}>
                <div className="flex gap-2 items-center px-6 hover:cursor-pointer">
                  <img
                    className="w-4 h-4"
                    src={item.icon}
                    alt="Icons"
                  />
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
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
          <div className="space-y-4 px-6">
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
      <div className="mt-10 flex flex-col items-center gap-4 lg:mt-0 lg:flex-row lg:gap-4 lg:fixed lg:top-5 lg:right-10 lg:text-base">
        <div className="hover:text-almost-black hover:cursor:pointer">
          <a href="#">Login</a>
        </div>
        <div className="w-full" onClick={(e) => e.preventDefault()}>
          <a
            className="py-2 border-2 border-medium-grey inline-block w-full rounded-xl text-center hover:cursor:pointer hover:bg-almost-black hover:text-almost-white lg:px-6"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

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

const Nav = () => {
  const [arrow, setArrow] = useState(`${downArrow}`);

  return (
    <div className="text-medium-gray p-4 text-sm">
      <div className="fixed top-4 right-4 hover:cursor-pointer">
        <img
          className="bg-medium-grey"
          src={menuClose}
          alt="Close menu btn"
        />
      </div>

      {/*///// FEATURES */}
      <div className="flex flex-col gap-4 mt-16">
        <div className="flex items-center gap-4 hover:cursor-pointer">
          <h3 className="text-base">Features</h3>
          <img className="w-2 h-2" src={arrow} alt="arrow menu" />
        </div>
        {navItems.map((item) => {
          return (
            <div className="flex gap-2 items-center px-6 hover:cursor-pointer hidden">
              <img className="w-4 h-4" src={item.icon} alt="" />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>

      {/* //// ABOUT */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-[11px] hover:cursor-pointer">
          <h3 className="text-base">Company</h3>
          <img className="w-2 h-2" src={arrow} alt="arrow menu" />
        </div>
        <div className="space-y-4 px-6 hidden">
          <p className="hover:cursor-pointer">History</p>
          <p className="hover:cursor-pointer">Our Team</p>
          <p className="hover:cursor-pointer">Blog</p>
        </div>
      </div>
      <div className="mt-4 hover:cursor-pointer">
        <h3 className="text-base">Careers</h3>
      </div>
      <div className="mt-4 hover:cursor-pointer">
        <h3 className="text-base">About</h3>
      </div>

      {/*//// USER */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="hover:cursor:pointer">
          <a href="#">Login</a>
        </div>
        <div className="w-full">
          <a
            className="py-2 border-2 border-medium-gray inline-block w-full rounded-xl text-center hover:cursor:pointer"
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

{
  /* <div>
              <img src={notepad} alt="notepad icon" />
              <p>Todo List</p>
            </div>
            <div>
              <img src={calendar} alt="calendar icon" />
              <p>Calendar</p>
            </div>
            <div>
              <img src={bell} alt="bell icon" />
              <p>Reminders</p>
            </div>
            <div>
              <img src={clock} alt="clock icon" />
              <p>Planning</p>
            </div> */
}

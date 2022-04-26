import notepad from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import bell from '../images/icon-reminders.svg';
import clock from '../images/icon-planning.svg';

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

const NavItems = () => {
  const items = navItems.map((item) => {
    return (
      <div
        key={item.text}
        className="flex gap-2 items-center px-6 hover:cursor-pointer hover:text-almost-black lg:px-0 lg:gap-2"
      >
        <img className="w-4 h-4" src={item.icon} alt="Icons" />
        <p>{item.text}</p>
      </div>
    );
  });

  return <>{items}</>;
};

export default NavItems;

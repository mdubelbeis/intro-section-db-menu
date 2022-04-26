import Logo from '../images/logo.svg';
import Menu from '../images/icon-menu.svg';

import Image from './Image.component';
import Info from './Info.component';

const App = () => {
  return (
    <div className="py-6 px-4">
      <header className="flex p-2 items-center justify-between">
        <img className="pt-1" src={Logo} alt="" />
        <img className="w-10" src={Menu} alt="" />
      </header>

      <main>
        <Image />
        <Info />
      </main>
    </div>
  );
};

export default App;

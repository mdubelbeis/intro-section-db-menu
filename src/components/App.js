import Image from './Image.component';
import Info from './Info.component';
import Clients from './Clients.component';
import Header from './Header.component';

const App = () => {
  return (
    <div className="py-6 px-4 w-screen mx-auto max-w-7xl lg:px-2">
      <header className="relative flex p-2 items-center justify-between lg:fixed lg:top-4 lg:left-8">
        <Header />
      </header>
      <main className="mt-10 lg:relative lg:max-w-full lg:w-full lg:mt-32">
        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-20">
          <Image />
          <Info />
        </div>
        <Clients />
      </main>
    </div>
  );
};

export default App;

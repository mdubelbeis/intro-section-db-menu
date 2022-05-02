const Info = () => {
  return (
    <div className="text-center space-y-6 max-w-xl mx-auto lg:text-left lg:mb-10 lg:space-y-10">
      <h1 className="text-4xl font-bold mt-10 lg:text-8xl lg:mt-0">
        <span className="lg:block">Make</span> remote work
      </h1>
      <p className="text-medium-gray lg:text-md lg:tracking-wider">
        Get your team in sync, no matter your location. <br />
        Streamline processes, create team rituals, and <br />
        watch productivity soar.
      </p>
      <button className="hover:bg-almost-white hover:text-almost-black bg-almost-black text-almost-white py-4 px-8 rounded-xl text-sm border-2 border-almost-black lg:hover:bg-almost-white lg:hover:text-almost-black">
        Learn more
      </button>
    </div>
  );
};

export default Info;

function App() {
  return (
    <>
      <div className="h-[560px] w-[300px] rounded-2xl bg-[#15273F] relative p-5 mx-auto m-16">
        <div className="relative group">
          <img
            src="/images/image-equilibrium.jpg"
            className="rounded-lg"
            alt=""
          />
          <div className="absolute inset-0 bg-[#00A4BF] opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
          <img
            src="/images/icon-view.svg"
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            alt=""
          />
        </div>
        <h1 className="text-white  pt-6 hover:text-[#41F0F3] duration-300 transition-all cursor-pointer text-[21px] font-semibold">
          Equilibrim #324
        </h1>
        <p className="text-[18px] mt-4 text-[#65799B]">
          Our Equilibrium promotes calm and balance.
        </p>
        <div className="flex justify-between mb-5">
          <h1 className="flex gap-2 text-[#00FFF8] mt-5 font-semibold ">
            <span className="mt-1">
              <img src="/images/icon-ethereum.svg" alt="" />
            </span>
            0.041ETH
          </h1>
          <p className=" flex gap-2 text-white mt-5">
            <span>
              <img src="/images/icon-clock.svg" className="mt-1" alt="" />
            </span>
            3 days left
          </p>
        </div>
        <hr />
        <div className="flex gap-2 mt-4">
          <img src="/images/image-avatar.png" className="w-[30px]" alt="" />
          <p className="text-white hover:text-[#41F0F3] cursor-pointer duration-300 transition-all">
            <span className="text-[#65799B] mr-1">Creation of</span>
            Jules Wyvern
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

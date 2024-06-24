function App() {
  return (
    <>
      <div className="h-[600px]  w-[300px]  rounded-2xl bg-[#15273F] p-5 mx-auto m-10">
        <img
          src="/images/image-equilibrium.jpg"
          className="rounded-lg"
          alt=""
        />
        <h1 className="text-white pt-6 text-[21px] font-semibold">
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
      </div>
    </>
  );
}

export default App;

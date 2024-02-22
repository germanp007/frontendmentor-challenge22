const App = () => {
  return (
    <main className="bg-LightGrayishCyan w-screen h-[1140px] flex flex-col justify-center items-center gap-12">
      <h1 className="text-[23.84px] text-VeryDarkCyan tracking-[0.63rem] opacity-75">
        SPLI <br />
        TTER
      </h1>
      <article className="bg-White w-full max-w-[500px]  h-[837px] rounded-2xl flex flex-col  items-center">
        <div className="relative w-[80%] flex flex-col  items-center">
          <h3 className="text-left">Bill</h3>
          <span className="absolute left-[1.1rem] inset-y-1/2 translate-y-1/2">
            <img
              src="../images/icon-dollar.svg"
              alt="dollar"
              className="w-[12px] h-6"
            />
          </span>
          <input
            type="number"
            className="bg-VeryLightGrayishCyan w-full h-[47.66px] text-end outline-none text-VeryDarkCyan py-[0.365rem] px-[1.1rem]"
            placeholder="0"
          />
        </div>
      </article>
    </main>
  );
};

export default App;

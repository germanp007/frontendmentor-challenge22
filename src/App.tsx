import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ActionType, MyContext } from "./context/context";

const App = () => {
  const contextValue = useContext(MyContext);
  const [people, setPeople] = useState(0);
  const handleBill = (e: ChangeEvent<HTMLInputElement>) => {
    contextValue?.dispatch({
      type: ActionType.UpdateBill,
      payload: Number(e.target.value),
    });
  };
  const handlePeople = (e: ChangeEvent<HTMLInputElement>) => {
    setPeople(Number(e.target.value));
    contextValue?.dispatch({
      type: ActionType.UpdatePeople,
      payload: people,
    });
  };
  const handleTip = (tips: string) => {
    const tip = Number(tips);
    contextValue?.dispatch({
      type: ActionType.UpdateTipPerson,
      payload: (contextValue?.state.bill * (tip / 100)) / people,
    });
  };

  useEffect(() => {
    contextValue?.dispatch({
      type: ActionType.UpdateTotalPerson,
      payload: contextValue.state.bill / people,
    });
  }, [contextValue?.state.bill, people]);

  return (
    <main className="bg-LightGrayishCyan w-screen h-[1140px] flex flex-col justify-center items-center gap-12">
      <h1 className="text-[23.84px] text-VeryDarkCyan tracking-[0.63rem] opacity-75">
        SPLI <br />
        TTER
      </h1>
      <article className="bg-White w-full max-w-[500px]  h-[837px] rounded-2xl flex flex-col  items-center justify-center gap-10">
        <div className="relative w-[80%] flex flex-col">
          <h3 className="text-left text-DarkGrayishCyan font-light">Bill</h3>
          <span className="absolute left-[1.1rem] inset-y-1/2 translate-y-1/2">
            <img
              src="../images/icon-dollar.svg"
              alt="dollar"
              className="w-[10px] h-5"
            />
          </span>
          <input
            type="number"
            className="bg-VeryLightGrayishCyan w-full h-[47.66px] text-2xl text-end outline-StrongCyan text-VeryDarkCyan py-[0.365rem] px-[1.1rem]"
            placeholder="0"
            onChange={handleBill}
          />
        </div>
        <div className="w-[80%]">
          <h3 className="text-left text-DarkGrayishCyan font-light mb-4">
            Select tip %
          </h3>
          <div className=" grid grid-cols-2 w-full m-auto gap-4 group-hover:bg-white">
            <button
              className="grid-span-1 transition-all duration-500"
              value="5"
              onClick={() => handleTip("5")}
            >
              5%
            </button>
            <button
              className="grid-span-1 transition-all duration-500"
              value="10"
              onClick={() => handleTip("10")}
            >
              10%
            </button>
            <button
              className="grid-span-1 transition-all duration-500"
              value="15"
              onClick={() => handleTip("15")}
            >
              15%
            </button>
            <button
              className="grid-span-1 transition-all duration-500"
              value="25"
              onClick={() => handleTip("25")}
            >
              25%
            </button>
            <button
              className="grid-span-1 transition-all duration-500"
              value="50"
              onClick={() => handleTip("50")}
            >
              50%
            </button>

            <input
              type="number"
              className="bg-VeryLightGrayishCyan grid-span-1 w-full h-[47.66px] text-2xl text-end outline-StrongCyan text-VeryDarkCyan py-[0.365rem] px-[1.1rem]"
              placeholder="Custom"
            />
          </div>
        </div>
        <div className="relative w-[80%] flex flex-col  items-center">
          <h3 className="text-left text-DarkGrayishCyan font-light">
            Number of people
          </h3>
          <span className="absolute left-[1.1rem] inset-y-1/2 translate-y-1/2">
            <img
              src="../images/icon-person.svg"
              alt="dollar"
              className="w-[14px] h-5"
            />
          </span>
          <input
            type="number"
            className="bg-VeryLightGrayishCyan w-full h-[47.66px] text-2xl text-end outline-StrongCyan text-VeryDarkCyan py-[0.365rem] px-[1.1rem]"
            placeholder="0"
            onChange={handlePeople}
          />
        </div>

        <div className="bg-VeryDarkCyan rounded-lg w-[80%] h-[281px] text-white flex flex-col justify-center">
          <div className="flex justify-between px-6 py-4">
            <div>
              <h3 className="font-normal">Tip Amount</h3>
              <p className="font-normal text-GrayishCyan">/ person</p>
            </div>
            <div>
              <h3 className="text-StrongCyan text-[32px]">
                ${contextValue?.state.tipPerson.toFixed(2)}
              </h3>
            </div>
          </div>
          <div className="flex justify-between px-6 py-4">
            <div>
              <h3 className="font-normal">Total</h3>
              <p className="font-normal text-GrayishCyan">/ person</p>
            </div>
            <div>
              <h3 className="text-StrongCyan text-[32px]">
                ${contextValue?.state?.totalPerson.toFixed(2)}
              </h3>
            </div>
          </div>
          <div className="flex justify-between px-6 py-4">
            <button
              className="w-full bg-StrongCyan text-VeryDarkCyan uppercase"
              // onClick={() =>
              //   contextValue?.dispatch({
              //     type: ActionType.Reset,
              //   })
              // }
            >
              Reset
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default App;

import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ActionType, MyContext } from "./context/context";
import InputBill from "./components/InputBill";
import SelectTip from "./components/SelectTip";

const App = () => {
  const contextValue = useContext(MyContext);
  const [people, setPeople] = useState(0);
  const [peopleInput, setPeopleInput] = useState(false);

  const handlePeople = (e: ChangeEvent<HTMLInputElement>) => {
    setPeople(Number(e.target.value));
    contextValue?.dispatch({
      type: ActionType.UpdatePeople,
      payload: Number(e.target.value),
    });
  };
  const handleTip = (tips: string) => {
    if (!contextValue?.state.bill) {
      contextValue?.setBill(true);
      return;
    } else if (!contextValue?.state.people) {
      setPeopleInput(true);
      return;
    }
    contextValue?.setBill(false);
    setPeopleInput(false);
    const tip = Number(tips);

    contextValue?.dispatch({
      type: ActionType.UpdateTipPerson,
      payload: (contextValue?.state.bill * (tip / 100)) / people,
    });
  };

  const handleReset = () => {
    if (contextValue?.peopleRef.current) {
      contextValue.peopleRef.current.value = "";
    }
    if (contextValue?.billRef.current) {
      contextValue.billRef.current.value = "";
    }
    if (contextValue?.customRef.current) {
      contextValue.customRef.current.value = "";
    }
    contextValue?.dispatch({ type: ActionType.Reset, payload: undefined });
  };
  useEffect(() => {
    if (contextValue) {
      contextValue?.dispatch({
        type: ActionType.UpdateTotalPerson,
        payload:
          contextValue.state.bill / people + contextValue.state.tipPerson,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextValue?.state.tipPerson, people]);

  return (
    <main className="bg-LightGrayishCyan w-screen h-[1140px] flex flex-col justify-center items-center gap-12">
      <h1 className="text-[23.84px] text-VeryDarkCyan tracking-[0.63rem] opacity-75">
        SPLI <br />
        TTER
      </h1>
      <article className="bg-White w-full max-w-[500px]  h-[837px] rounded-2xl flex flex-col  items-center justify-center gap-10">
        <InputBill />
        <SelectTip handleTip={handleTip} />
        {/* 
        <div className="relative w-[85%] flex flex-col">
          <div className="flex justify-between">
            <span className=" text-DarkGrayishCyan font-light">
              Number of people
            </span>
            {peopleInput && (
              <span className=" text-Error font-light">Can't be zero</span>
            )}
          </div>

          <span className="absolute left-[1.1rem] inset-y-1/2 translate-y-1/2">
            <img
              src="../images/icon-person.svg"
              alt="dollar"
              className="w-[14px] h-5"
            />
          </span>
          <input
            type="number"
            className={`bg-VeryLightGrayishCyan w-full h-[47.66px] text-2xl text-end outline-StrongCyan text-VeryDarkCyan py-[0.365rem] px-[1.1rem] ${
              peopleInput ? "ring-1 ring-Error" : ""
            }`}
            placeholder="0"
            ref={contextValue?.peopleRef}
            onChange={handlePeople}
          />
        </div> */}

        <div className="bg-VeryDarkCyan rounded-lg w-[85%] h-[281px] text-white flex flex-col justify-center">
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
                ${contextValue?.state.totalPerson.toFixed(2)}
              </h3>
            </div>
          </div>
          <div className="flex justify-between px-6 py-4">
            <button
              className="w-full bg-StrongCyan text-VeryDarkCyan uppercase"
              onClick={handleReset}
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

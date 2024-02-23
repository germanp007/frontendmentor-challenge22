import { useContext } from "react";
import { ActionType, MyContext } from "../context/context";

const ResultTips = () => {
  const contextValue = useContext(MyContext);

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

  return (
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
  );
};

export default ResultTips;

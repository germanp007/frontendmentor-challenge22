import { ChangeEvent, useContext } from "react";
import { MyContext } from "../context/context";
import { ActionType } from "../context/context";

const InputBill = () => {
  const contextValue = useContext(MyContext);
  const handleBill = (e: ChangeEvent<HTMLInputElement>) => {
    contextValue?.dispatch({
      type: ActionType.UpdateBill,
      payload: Number(e.target.value),
    });
  };
  return (
    <div className="relative w-[85%] flex flex-col">
      <div className="flex justify-between">
        <h3 className="text-left text-DarkGrayishCyan font-light">Bill</h3>
        {contextValue?.bill && (
          <span className=" text-Error font-light">Can't be zero</span>
        )}
      </div>

      <span className="absolute left-[1.1rem] inset-y-1/2 translate-y-1/2">
        <img
          src="../images/icon-dollar.svg"
          alt="dollar"
          className="w-[10px] h-5"
        />
      </span>
      <input
        type="number"
        className={`bg-VeryLightGrayishCyan w-full h-[47.66px] text-2xl text-end outline-StrongCyan text-VeryDarkCyan py-[0.365rem] px-[1.1rem] ${
          contextValue?.bill ? "ring-1 ring-Error" : ""
        }`}
        placeholder="0"
        onChange={handleBill}
        ref={contextValue?.billRef}
      />
    </div>
  );
};

export default InputBill;

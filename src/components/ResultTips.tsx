import { useContext } from "react";
import { MyContext } from "../context/context";
import ResetButton from "./ResetButton";

const ResultTips = () => {
  const contextValue = useContext(MyContext);

  return (
    <div className="bg-VeryDarkCyan rounded-lg w-[85%] h-[281px] text-white flex flex-col justify-center md:h-full md:justify-evenly">
      <div className="flex justify-between px-6 py-4 items-center md:py-0">
        <div>
          <h3 className="font-normal">Tip Amount</h3>
          <p className="font-normal text-GrayishCyan">/ person</p>
        </div>
        <div>
          <h3 className="text-StrongCyan text-[32px] md:text-[46.4px]">
            ${contextValue?.state.tipPerson.toFixed(2)}
          </h3>
        </div>
      </div>
      <div className="flex justify-between px-6 py-4 items-center md:py-0">
        <div>
          <h3 className="font-normal">Total</h3>
          <p className="font-normal text-GrayishCyan">/ person</p>
        </div>
        <div>
          <h3 className="text-StrongCyan text-[32px] md:text-[46.4px]">
            ${contextValue?.state.totalPerson.toFixed(2)}
          </h3>
        </div>
      </div>
      <ResetButton />
    </div>
  );
};

export default ResultTips;

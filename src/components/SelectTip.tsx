import { FC, useContext } from "react";
import { MyContext } from "../context/context";

type Props = {
  handleTip: (tipAmount: string) => void;
};
const SelectTip: FC<Props> = ({ handleTip }) => {
  const contextValue = useContext(MyContext);

  return (
    <div className="w-[85%]">
      <h3 className="text-left text-DarkGrayishCyan font-light mb-4">
        Select tip %
      </h3>
      <div className=" grid grid-cols-2 w-full m-auto gap-4 group-hover:bg-white">
        {["5", "10", "15", "25", "50"].map((ele) => (
          <button
            key={ele}
            className="grid-span-1 transition-all duration-500"
            value={ele}
            onClick={() => handleTip(ele)}
          >
            {ele}%
          </button>
        ))}
        <input
          type="number"
          className="bg-VeryLightGrayishCyan grid-span-1 w-full h-[47.66px] text-2xl text-end outline-StrongCyan text-VeryDarkCyan py-[0.365rem] px-[1.1rem]"
          placeholder="Custom"
          onChange={(e) => handleTip(e.target.value)}
          ref={contextValue?.customRef}
        />
      </div>
    </div>
  );
};

export default SelectTip;

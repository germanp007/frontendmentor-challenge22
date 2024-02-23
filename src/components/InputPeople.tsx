import { ChangeEvent, FC, useContext } from "react";
import { ActionType, MyContext } from "../context/context";

type Props = {
  setPeople: React.Dispatch<React.SetStateAction<number>>;
};

const InputPeople: FC<Props> = ({ setPeople }) => {
  const contextValue = useContext(MyContext);

  const handlePeople = (e: ChangeEvent<HTMLInputElement>) => {
    setPeople(Number(e.target.value));
    contextValue?.dispatch({
      type: ActionType.UpdatePeople,
      payload: Number(e.target.value),
    });
  };
  return (
    <div className="relative w-[85%] flex flex-col">
      <div className="flex justify-between">
        <span className=" text-DarkGrayishCyan font-light">
          Number of people
        </span>
        {contextValue?.peopleInput && (
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
          contextValue?.peopleInput ? "ring-1 ring-Error" : ""
        }`}
        placeholder="0"
        ref={contextValue?.peopleRef}
        onChange={handlePeople}
      />
    </div>
  );
};

export default InputPeople;

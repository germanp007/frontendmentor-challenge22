import { useContext } from "react";
import { ActionType, MyContext } from "../context/context";

const ResetButton = () => {
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
    <div className="flex justify-between px-6 py-4">
      <button
        className="w-full bg-StrongCyan text-VeryDarkCyan uppercase"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default ResetButton;

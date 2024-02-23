import { useContext, useEffect, useState } from "react";
import { ActionType, MyContext } from "./context/context";
import InputBill from "./components/InputBill";
import SelectTip from "./components/SelectTip";
import InputPeople from "./components/InputPeople";
import ResultTips from "./components/ResultTips";
import Title from "./components/Title";

const App = () => {
  const contextValue = useContext(MyContext);
  const [people, setPeople] = useState(0);

  const handleTip = (tips: string) => {
    if (!contextValue?.state.bill) {
      contextValue?.setBill(true);
      return;
    } else if (!contextValue?.state.people) {
      contextValue?.setPeopleInput(true);
      return;
    }
    contextValue?.setBill(false);
    contextValue?.setPeopleInput(false);
    const tip = Number(tips);

    contextValue?.dispatch({
      type: ActionType.UpdateTipPerson,
      payload: (contextValue?.state.bill * (tip / 100)) / people,
    });
  };

  // const handleReset = () => {
  //   if (contextValue?.peopleRef.current) {
  //     contextValue.peopleRef.current.value = "";
  //   }
  //   if (contextValue?.billRef.current) {
  //     contextValue.billRef.current.value = "";
  //   }
  //   if (contextValue?.customRef.current) {
  //     contextValue.customRef.current.value = "";
  //   }
  //   contextValue?.dispatch({ type: ActionType.Reset, payload: undefined });
  // };

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
      <Title />
      <article className="bg-White w-full max-w-[500px]  h-[837px] rounded-2xl flex flex-col  items-center justify-center gap-10">
        <InputBill />
        <SelectTip handleTip={handleTip} />
        <InputPeople setPeople={setPeople} />
        <ResultTips />
      </article>
    </main>
  );
};

export default App;

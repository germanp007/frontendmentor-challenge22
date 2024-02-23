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

  useEffect(() => {
    if (contextValue) {
      contextValue?.dispatch({
        type: ActionType.UpdateTotalPerson,
        payload:
          contextValue?.state.bill / people + contextValue?.state.tipPerson,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextValue?.state.tipPerson, people]);

  return (
    <main className="bg-LightGrayishCyan w-screen h-[1140px] flex flex-col justify-center items-center gap-12 md:h-[780px]">
      <Title />
      <article className="bg-White w-full max-w-[500px]  h-[837px] rounded-2xl flex flex-col  items-center justify-center gap-10 md:flex-row md:max-w-[920px] md:h-[481px] md:gap-0">
        <div className="flex flex-col items-center w-full gap-10">
          <InputBill />
          <SelectTip handleTip={handleTip} />
          <InputPeople setPeople={setPeople} />
        </div>
        <div className="flex flex-col items-center w-full md:h-full py-8">
          <ResultTips />
        </div>
      </article>
    </main>
  );
};

export default App;

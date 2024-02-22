import React, { ReactNode, createContext, useReducer, useState } from "react";

export interface MyContextType {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  state: MyInitialState;
  dispatch: React.Dispatch<Action>;
}

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyInitialState {
  bill: number | null;
  people: number | null;
  percent: number | string | null;
  tipPerson: number;
  totalPerson: number;
}

const initialState: MyInitialState = {
  bill: null,
  people: null,
  percent: null,
  tipPerson: 0,
  totalPerson: 0,
};

// eslint-disable-next-line react-refresh/only-export-components
export enum ActionType {
  UpdateBill = "UPDATE_BILL",
  UpdatePeople = "UPDATE_PEOPLE",
  UpdatePercent = "UPDATE_PERCENT",
  UpdateTipPerson = "UPDATE_TIP_PERSON",
  UpdateTotalPerson = "UPDATE_TOTAL_PERSON",
  Reset = "RESET",
}

export interface Action {
  type: ActionType;
  payload: number | string | null;
}

const myReducer: React.Reducer<MyInitialState, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.UpdateBill:
      return {
        ...state,
        bill: action.payload,
      };
    case ActionType.UpdatePeople:
      return {
        ...state,
        people: action.payload,
      };
    case ActionType.UpdatePercent:
      return {
        ...state,
        percent: action.payload,
      };
    case ActionType.UpdateTipPerson:
      return {
        ...state,
        tipPerson: (state.bill || 0 * (state.percent / 100)) / +state.people,
      };
    case ActionType.UpdateTotalPerson
      return {
        ...state,
        totalPerson: state.bill + state.
      }

    default:
      return state;
  }
};

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<MyInitialState, Action>>(
    myReducer,
    initialState
  );
  const [value, setValue] = useState<number>(0);

  const contextValue: MyContextType = {
    state,
    dispatch,
    value,
    setValue,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;

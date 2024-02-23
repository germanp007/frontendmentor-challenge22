import React, { ReactNode, createContext, useReducer } from "react";

export interface MyContextType {
  state: MyInitialState;
  dispatch: React.Dispatch<Action>;
}

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyInitialState {
  bill: number;
  people: number;
  percent: number;
  tipPerson: number;
  totalPerson: number;
}

const initialState: MyInitialState = {
  bill: 0,
  people: 0,
  percent: 0,
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
  payload: number;
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
        tipPerson: action.payload,
      };
    case ActionType.UpdateTotalPerson:
      return {
        ...state,
        totalPerson: action.payload || 0,
      };
    case ActionType.Reset:
      return {
        bill: 0,
        percent: 0,
        people: 0,
        tipPerson: 0,
        totalPerson: 0,
      };

    default:
      return state;
  }
};

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<MyInitialState, Action>>(
    myReducer,
    initialState
  );

  const contextValue: MyContextType = {
    state,
    dispatch,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;

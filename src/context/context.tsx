import React, {
  ReactNode,
  createContext,
  useReducer,
  useRef,
  useState,
} from "react";

export interface MyContextType {
  state: MyInitialState;
  dispatch: React.Dispatch<Action>;
  bill: boolean;
  setBill: React.Dispatch<React.SetStateAction<boolean>>;
  peopleRef: React.MutableRefObject<HTMLInputElement | null>;
  billRef: React.MutableRefObject<HTMLInputElement | null>;
  customRef: React.MutableRefObject<HTMLInputElement | null>;
  peopleInput: boolean;
  setPeopleInput: React.Dispatch<React.SetStateAction<boolean>>;
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
  payload?: number;
}

const myReducer: React.Reducer<MyInitialState, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.UpdateBill:
      return {
        ...state,
        bill: action.payload as number,
      };
    case ActionType.UpdatePeople:
      return {
        ...state,
        people: action.payload as number,
      };
    case ActionType.UpdatePercent:
      return {
        ...state,
        percent: action.payload as number,
      };
    case ActionType.UpdateTipPerson:
      return {
        ...state,
        tipPerson: action.payload as number,
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
  const [bill, setBill] = useState(false);

  const [peopleInput, setPeopleInput] = useState(false);
  const peopleRef = useRef<HTMLInputElement>(null);
  const billRef = useRef<HTMLInputElement>(null);
  const customRef = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useReducer<React.Reducer<MyInitialState, Action>>(
    myReducer,
    initialState
  );

  const contextValue: MyContextType = {
    state,
    dispatch,
    bill,
    setBill,
    peopleRef,
    billRef,
    customRef,
    peopleInput,
    setPeopleInput,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;

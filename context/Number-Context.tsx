import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface NumberContextType {
  enteredValue: string;
  numberOfRounds: number;
  setEnteredValue: (value: string) => void;
  setNumberOfRounds: (value: number) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const NumberContext = createContext<NumberContextType | null>(null);

export default function NumberContextProvider({ children }: ChildrenProps) {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [numberOfRounds, setNumberOfRounds] = useState<number>(0);

  const value: NumberContextType = {
    enteredValue,
    numberOfRounds,
    setEnteredValue,
    setNumberOfRounds,
  };
  return (
    <NumberContext.Provider value={value}>{children}</NumberContext.Provider>
  );
}

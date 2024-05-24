import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface NumberContextType {
  enteredValue: string;
  setEnteredValue: (value: string) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const NumberContext = createContext<NumberContextType | null>(null);

export default function NumberContextProvider({ children }: ChildrenProps) {
  const [enteredValue, setEnteredValue] = useState<string>("");

  const value: NumberContextType = {
    enteredValue,
    setEnteredValue,
  };
  return (
    <NumberContext.Provider value={value}>{children}</NumberContext.Provider>
  );
}

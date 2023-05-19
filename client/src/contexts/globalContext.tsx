import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface globalContextType {
  popup: JSX.Element | null;
  setPopup: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
}

const globalContext = createContext<globalContextType>({} as globalContextType);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [popup, setPopup] = useState<JSX.Element | null>(<></>);

  const value = {
    popup,
    setPopup,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(globalContext);
}

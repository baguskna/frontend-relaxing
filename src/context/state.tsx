import { createContext, useContext, useEffect, useState } from "react";

type TAppWrapperProps = {
  children: React.ReactNode;
};

const AppContext = createContext(undefined as any);

export function AppWrapper({ children }: TAppWrapperProps) {
  const [cartContext, setCartContext] = useState();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartContext(cart);
  }, []);

  const saveData = (data: any) => {
    localStorage.setItem("cart", JSON.stringify(data));
    setCartContext(data);
  };

  return (
    <AppContext.Provider value={{ cartContext, setCartContext, saveData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

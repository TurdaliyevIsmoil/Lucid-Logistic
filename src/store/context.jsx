import React, { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
const UI = createContext();
const initialState = {
  dark: true,
  fromCity: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "toggle":
      return { ...state, dark: !state.dark };
    case "changeLocation":
      return { ...state, fromCity: payload };
  }
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Mode Switcher
  const toggle = () => {
    localStorage.setItem("dark", state.dark ? false : true);
    console.log(!state.dark);
    document.getElementsByTagName("body")[0].classList = state.dark
      ? "light"
      : "dark";

    dispatch({ type: "toggle" });
  };

  // Location Setter
  const locationDetector = (fromCity) => {
    dispatch({ type: "changeLocation", payload: fromCity });
  };

  useEffect(() => {
    // Detect mode
    const mode = localStorage.getItem("dark");
    if (mode === "false") {
      toggle();
    } else {
      document.getElementsByTagName("body")[0].classList =
        state?.dark === true ? "dark" : "light";
    }
  }, []);

  return (
    <UI.Provider value={{ ...state, toggle, locationDetector }}>
      {children}
    </UI.Provider>
  );
};
export const useUIContext = () => useContext(UI);

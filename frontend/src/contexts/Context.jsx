/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [user, setUser] = useState(false);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}
const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;

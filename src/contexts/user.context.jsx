// import React from 'react';

import { createContext, useState } from "react";

// as the actual value(for example user and ...) you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// the provider is the actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // why null
  const value = { currentUser, setCurrentUser };
  console.log("xx", currentUser);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// export { UserContext, UserProvider };

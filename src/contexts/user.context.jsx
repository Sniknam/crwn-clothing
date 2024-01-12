import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  creatuserDocumentFromAuth,
} from "../routes/utils/firebase/firebase.utils";

// as the actual value(for example user and ...) you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// the provider is the actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // why null
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    onAuthStateChangedListener((user) => {
      console.log(user); // is showing if is not signOut from firbase.if is not you should do it manually by import signOutUser and call it.then remove it
      if (user) {
        creatuserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    // return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// export { UserContext, UserProvider };

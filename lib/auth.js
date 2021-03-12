import React, { createContext, useState, useContext } from 'react';
import { supabase } from './Store';

const authContext = createContext();

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const handleUser = async userData => {
    if (userData) {
      setUser(userData);
      return userData;
    }
    setUser(false);
    return false;
  };

  const signout = () => {
    return supabase.auth.signOut().then(handleUser(false));
  };
  const signinWithEmail = (email, password) => {
    return supabase.auth
      .signIn({ email, password })
      .then(res => handleUser(res));
  };

  const signinWithGithub = () => {
    return supabase.auth
      .signIn({
        provider: 'github',
      })
      .then(res => handleUser(res));
  };

  return { signinWithEmail, signinWithGithub, signout, user };
};

export const useAuth = () => {
  return useContext(authContext);
};

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

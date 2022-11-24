import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // Set User on sate
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // Create User email & Password using firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //SignIn User with Email & Password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Update User Profile
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  //SignOut from website using firebase
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Load Current User Info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Found User");
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //Children
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    updateUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

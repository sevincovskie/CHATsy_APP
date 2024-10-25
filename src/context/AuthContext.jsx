// import { useContext, createContext, useState, useEffect } from "react";
// import {
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithRedirect,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../firebase";

// //create context
// const AuthContext = createContext();

// //Provider Context
// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // signin with google
//   const signinWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//    await signInWithRedirect(auth, provider);
//   };

//   //signout

//   const logout = async () => await signOut(auth);

//   const value = {
//     currentUser,
//     setCurrentUser,
//     signinWithGoogle,
//     logout
//   };

//   // set currentuser

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       console.log("İstifadəçi statusu:", user);
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };

import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

// Create context
const AuthContext = createContext();

// Provider Context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign in with Google
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider); // Using signInWithPopup
  };

  // Sign out
  const logout = () => signOut(auth);

  const value = {
    currentUser,
    setCurrentUser,
    signinWithGoogle,
    logout,
  };

  // Set currentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("İstifadəçi statusu:", user); // Debugging log
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

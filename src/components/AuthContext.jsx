import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { createContext } from "react";
import { auth, db } from "../config";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  //CREATE USER DOCUMENT
  const createUserFavorite = async (userId) => {
    try {
      console.log("userId", userId);
      await setDoc(doc(db, "users", userId), {
        favCard: [],
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // UPDATE FAVORITES
  };

  // REGISTER //? send and create needs to be 2 different fucntions
  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ); //? do i have to set him here as user too?
      console.log("userCredentials", userCredential);
      await createUserFavorite(userCredential?.user?.uid);

      setUser(userCredential.user);
      console.log("user", user);
    } catch (error) {
      console.log("error", error.message); //? how to enter the object tree / have a look inside?
    }
  };

  //LOGIN
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("userLogin", user);
        setUser(user);
      })
      .catch((error) => {
        setUser(null);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <AuthContext.Provider value={{ user, setUser, register, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

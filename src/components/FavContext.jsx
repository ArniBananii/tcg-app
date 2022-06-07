import React, { useContext, useState } from "react";

import { createContext } from "react";
import { db } from "../config";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { AuthContext } from "./AuthContext";

export const FavContext = createContext();

export const FavContextProvider = (props) => {
  const [favorite, setFavorite] = useState({});
  const { user } = useContext(AuthContext);

  console.log("favcontext user =>", user);
  const updateFavorite = async (favorite, userId) => {
    const favRef = doc(db, "users", userId);
    console.log("userId", userId);
    console.log("favorite", favorite);
    const myFav = {
      name: favorite.name,
    };
    await updateDoc(favRef, {
      favCard: arrayUnion(favorite),
    });
  };

  return (
    <FavContext.Provider value={{ favorite, setFavorite, updateFavorite }}>
      {props.children}
    </FavContext.Provider>
  );
};

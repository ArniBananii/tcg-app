import React, { useState } from "react";

import { createContext } from "react";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = (props) => {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

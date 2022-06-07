import React, { useContext, useEffect, useState } from "react";
import { db } from "../config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { AuthContext } from "../components/AuthContext";
function Favorites() {
  const { user } = useContext(AuthContext);
  const [favCards, setFavCards] = useState([]);
  const { updateFavorite } = useContext(AuthContext);
  const getFavorites = () => {
    onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("Current data: ", doc.data());

      setFavCards(doc.data());
      console.log("favCards", favCards.favCard);
    });
  };
  useEffect(() => {
    getFavorites();
  }, [updateFavorite]);
  return (
    <div>
      {favCards == null ? ( //TODO: change so it loads even if empty!
        favCards.favCard.map((card, index) => {
          return <p key={index}>{card.name}</p>;
        })
      ) : (
        <p>...Loading...</p>
      )}
    </div>
  );
}

export default Favorites;

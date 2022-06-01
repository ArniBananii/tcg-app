import React, { useContext } from "react";
import { FavoriteContext } from "../components/FavoriteContext";

function About() {
  const { favorite } = useContext(FavoriteContext);
  return <div>{console.log(favorite)}</div>;
}

export default About;

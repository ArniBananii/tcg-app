import React, { useContext } from "react";
import { FavContext } from "../components/FavContext";

function About() {
  const { favorite } = useContext(FavContext);
  return <div>{console.log(favorite)}</div>;
}

export default About;

import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { name } = useParams();
  console.log("name", name);
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default Detail;

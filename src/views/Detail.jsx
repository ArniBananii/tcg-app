import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Detail() {
  const { name } = useParams();
  const {
    state: { data },
  } = useLocation();

  console.log("data", data);

  // console.log("currentCard", currentCard);
  //! should I fetch data here now again || give currentCard as props
  console.log("name", name);
  return (
    <div>
      <p>{name}</p>
      <img src={data.imageUrl} alt="" />
    </div>
  );
}

export default Detail;

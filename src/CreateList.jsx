import React from "react";
import { useEffect, useState } from "react";
import CreateModal from "./CreateModal";
import { Button, ButtonGroup } from "@mui/material";
import "./style/CreateCards.css";
import useFetch from "./util/useFetch";
import CreateCards from "./CreateCards";
import AddButton from "./Button";
import AddIcon from "@mui/icons-material/Add";

function CreateList() {
  const [pageNum, setPageNum] = useState(1);
  const { response, error, isLoading } = useFetch(
    `https://api.magicthegathering.io/v1/cards?page=${pageNum}`
  );

  return (
    <div className="App">
      <div>
        {isLoading ? (
          <p>...Loading...</p>
        ) : (
          <CreateCards data={response} isLoading={isLoading} />
        )}
      </div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => {
            setPageNum(pageNum + 1);
          }}
        >
          Next Page
        </Button>
        <Button
          onClick={() => {
            if (pageNum > 1) {
              setPageNum(pageNum - 1);
            }
          }}
        >
          Previous Page
        </Button>
      </ButtonGroup>

      <div>{error && error}</div>
    </div>
  );
}

export default CreateList;

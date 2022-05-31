import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import InfoIcon from "@mui/icons-material/Info";
import Button from "./Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ButtonGroup, IconButton } from "@mui/material"; //? consize the amount of imports to
import CreateModal from "./CreateModal";

// TODO: arno, look up jsdocs! will help with type-safety without needing TypeScript
function CreateCards(props) {
  const { data, isLoading } = props;
  const [currentCard, setCurrentCard] = useState(undefined);
  const [showCards, setShowCards] = useState(4);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("data", data);
  const cards = data.cards;

  const seen = new Set();
  const filteredCards = cards
    .filter((el) => {
      const duplicate = seen.has(el.name);
      seen.add(el.name);
      return !duplicate;
    })
    .slice(0, showCards);

  return (
    <div>
      {currentCard && (
        <CreateModal
          open={open}
          close={handleClose}
          currentCard={currentCard}
        />
      )}
      <ImageList cols={1} sx={{ width: "75%", height: 450 }}>
        <ImageListItem key="Subheader">
          <ListSubheader component="div">Cards</ListSubheader>
        </ImageListItem>

        {filteredCards.map((card, index) => {
          return (
            <ImageListItem sx={{ mt: 5 }} key={index}>
              <img src={card.imageUrl} alt={cards.name} />

              <ImageListItemBar
                title={card.name}
                subtitle={card.artist}
                actionIcon={
                  <IconButton
                    onClick={() => {
                      handleOpen();
                      setCurrentCard(card);
                    }}
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${card.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          );
        })}
      </ImageList>

      <ButtonGroup>
        <Button
          Icon={AddIcon}
          color={"secondary"}
          onClick={() => {
            setShowCards(showCards + 5);
          }}
        />

        <Button
          Icon={RemoveIcon}
          color={"warning"}
          onClick={() => {
            if (showCards > 4) {
              setShowCards(showCards - 5);
            }
          }}
        />
      </ButtonGroup>
    </div>
  );
}

export default CreateCards;

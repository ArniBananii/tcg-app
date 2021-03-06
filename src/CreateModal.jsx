import {
  Box,
  Typography,
  Modal,
  Grid,
  Chip,
  Divider,
  Stack,
} from "@mui/material";

import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
import { FavContext } from "./components/FavContext";
import { AuthContext } from "./components/AuthContext";

function CreateModal(props) {
  const { currentCard, open, close } = props; //! isLoading has no function yet....
  const { favorite, setFavorite, updateFavorite } = useContext(FavContext);
  const { user } = useContext(AuthContext);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    maxWidth: "400px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "80%",
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,

    overflow: "scroll",
  };

  return (
    //TODO: Design elements more!
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ my: 3, mx: 2 }}>
            {currentCard !== undefined ? (
              currentCard.name
            ) : (
              <LoadingButton loading></LoadingButton>
            )}

            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  {currentCard == undefined ? (
                    <Box>
                      <LoadingButton loading variant="outlined"></LoadingButton>
                    </Box>
                  ) : (
                    <img src={currentCard.imageUrl} alt="WTF?!" />
                  )}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  {currentCard == undefined ? (
                    <LoadingButton
                      loading
                      loadingIndicator="Loading..."
                      variant="outline"
                    ></LoadingButton>
                  ) : (
                    <Stack
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      directions={{ xs: "row", sm: "row" }}
                      spacing={{ xs: 2, sm: 2, md: 2 }}
                    >
                      <Chip
                        label={`Power: ${
                          currentCard.power ?? "X"
                        } / Toughness: ${currentCard.toughness ?? "X"}`}
                      />
                      <Chip label={`Cost: ${currentCard.manaCost}`} />
                      <Chip label={`Type: ${currentCard.type}`} />
                      <Chip label={`Rarity: ${currentCard.rarity}`} />
                    </Stack>
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              {currentCard.originalText}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 2 }}></Box>
          <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
            {currentCard == undefined ? (
              <p>...Loading...</p>
            ) : (
              <Link
                to={`${currentCard?.name}`}
                state={{
                  data: currentCard,
                }}
              >
                <Button>Learn more</Button>
              </Link>
            )}
          </Box>
          <Button
            disabled={disable}
            onClick={() => {
              if (!user) {
                navigate("/login");
              } else {
                updateFavorite(currentCard, user?.reloadUserInfo.localId);
                setDisable(true);
              }
            }}
          >
            I sure love this card!
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateModal;

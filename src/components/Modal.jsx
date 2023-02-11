import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  backgroundColor: "#111",
};

const Popup = ({ open, handleClose, type, data }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {type === "favourites" ? "Your favorites" : "Recent Views"}
          </Typography>
          {data?.map((name, idx) => {
            return (
              <Typography
                key={idx}
                id="transition-modal-description"
                sx={{ mt: 2 }}
              >
                {name}
              </Typography>
            );
          })}
        </Box>
      </Fade>
    </Modal>
  );
};

export default Popup;

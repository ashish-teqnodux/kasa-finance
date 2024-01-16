import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InfoIcon from "@mui/icons-material/Info";
import { CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 270,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
  px: 3,
  border: "none",
  borderRadius: 2,
};

const MuiCustomModal = ({ open, handleClose, onSubmit, loading }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 1,
            my: 2,
          }}
        >
          <div>
            <InfoIcon sx={{ fontSize: "30px" }} />
          </div>
          <Typography id="modal-description">
            Would like to get an Email ?
          </Typography>
        </Box>
        <Box sx={{ mt: 4, mb: 2, display: "flex", justifyContent: "center" }}>
          <Button
            disabled={loading?.["Yes"]}
            sx={{
              bgcolor: `${loading?.["Yes"] ? "" : "#1976D2"}`,
              border: loading?.["Yes"] ? "1px solid #1976D2" : "none",
              color: "white",
              marginRight: 1,
              fontSize: "12px",
              "&:hover": {
                backgroundColor: "#1976D2",
              },
            }}
            onClick={() => {
              onSubmit("Yes");
            }}
          >
            {!loading?.["Yes"] ? (
              "Yes"
            ) : (
              <CircularProgress color="inherit" size={15} />
            )}
          </Button>
          <Button
            disabled={loading?.["No"]}
            sx={{
              border: "1px solid #1976D2",
              color: "black",
              fontSize: "12px",
            }}
            onClick={() => {
              onSubmit("No");
            }}
          >
            {!loading?.["No"] ? (
              "No"
            ) : (
              <CircularProgress color="inherit" size={15} />
            )}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MuiCustomModal;

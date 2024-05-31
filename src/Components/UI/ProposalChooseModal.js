import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ProposalDropdownField from "./ProposalDropdownField";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
  px: 3,
  border: "none",
  borderRadius: 2,
};

const ProposalChooseModal = ({
  open,
  handleClose,
  onClick,
  onCancel,
  setProposaId,
  proposaId,
  proposals,
}) => {
  useEffect(() => {
    const filteredProposals =
      proposals.filter((pro) => !!pro?.Create_Invoice_For_Proposal) || [];

    if (filteredProposals.length > 0) {
      setProposaId(filteredProposals[0].id);
    }
  }, [proposals]);

  const options = React.useMemo(() => {
    return proposals.map((pro) => {
      const totalAmount = pro?.Sub_Total - pro?.Discount + pro?.Tax;
      return {
        id: pro?.id,
        value: `${pro.Subject} - ${totalAmount?.toFixed(2)}$ - ${moment(
          pro?.Created_Time
        ).format("YYYY-MM-DD hh:mm:ss")}`,
      };
    });
  }, [proposals]);

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
          <Typography
            id="modal-description"
            sx={{ fontSize: "18px", fontWeight: 400 }}
          >
            Select the proposal to create invoice
          </Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <ProposalDropdownField
            id="proposalSelect"
            name="proposalSelect"
            label="Select Proposal"
            getOptionLabel
            value={proposaId}
            handleChangeDropdown={(e) => {
              setProposaId(e.target.value);
            }}
            options={options}
          />
        </Box>
        <Box
          sx={{
            mt: 3,
            mb: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <Button
            sx={{
              border: "1px solid gray",
              color: "black",
              fontSize: "12px",
            }}
            onClick={onCancel}
            type="button"
          >
            Cancel
          </Button>
          <Button
            disabled={!proposaId}
            sx={{
              bgcolor: `${!proposaId ? "gray" : "#1976D2"}`,
              color: "white !important",
              marginRight: 1,
              fontSize: "12px",
              "&:hover": {
                backgroundColor: "#1976D2",
              },
              "&:disable": {
                color: "white",
              },
            }}
            onClick={onClick}
            type="button"
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProposalChooseModal;

import { Box, Typography } from "@mui/material";
import React from "react";

const ColorInfo = () => {
  return (
    <Box sx={{ mb: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "#009DC2",
            }}
          ></Box>
          <Typography sx={{ fontSize: "12px" }}>Installation</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "#1E2E5A",
            }}
          ></Box>
          <Typography sx={{ fontSize: "12px" }}>Refinishing</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "#F9832C",
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: "12px",
            }}
          >
            Installation & Refinishing
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "#80807b",
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: "12px",
            }}
          >
            Out of scope
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ColorInfo;

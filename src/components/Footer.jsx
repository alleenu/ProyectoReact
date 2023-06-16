import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#D7D7D7", color: "BLACK", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a
            href="https://github.com/alleenu/ProyectoReact"
            target="_blank"
            rel="noopener noreferrer"
          >
          <GitHubIcon />
          </a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
           &copy; Junio, 2023  
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

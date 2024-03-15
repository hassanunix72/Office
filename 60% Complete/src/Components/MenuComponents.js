import React from "react";
import { Box, Button, ListItemButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MenuComponents = ({ navName, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "15px",
          textTransform: "capitalize",
          marginTop: "0.5rem",
        }}>
        {navName}
      </Button>
    </Box>
  );
};

export default MenuComponents;

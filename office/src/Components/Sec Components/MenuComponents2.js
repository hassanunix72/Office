import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

const MenuComponents2 = ({ navName }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box>
        <Button
          id="demo-positioned-button"
          aria-controls="demo-positioned-menu"
          aria-haspopup="true"
          onClick={(e) => setOpen(e.currentTarget)}
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
    </>
  );
};

export default MenuComponents2;

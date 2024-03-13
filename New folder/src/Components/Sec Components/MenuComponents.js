import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

const MenuComponents = ({ navName, menuItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box>
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
        <Menu
          id="demo-positioned-menu"
          anchorEl={open}
          open={Boolean(open)}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}>
          {menuItems.map((item, i) => (
            <MenuItem key={i}>{item}</MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default MenuComponents;

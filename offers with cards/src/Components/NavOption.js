import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavOption = ({ menuItems, navName }) => {
  const [open, setOpen] = useState(null);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Box>
      <List>
        <ListItem sx={{ paddingX: "-100rem" }}>
          <ListItemButton onClick={handleClick}>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
                textTransform: "capitalize",
                marginTop: "0.5rem",
              }}>
              {navName}
            </Typography>

            <KeyboardArrowDownIcon
              sx={{ marginTop: "0.5rem", color: "white" }}
            />
          </ListItemButton>
        </ListItem>
        <Menu
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          id="navbarDropdownMenuLink"
          aria-labelledby="navbarDropdownMenuLink">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              component={Link}
              to={item.link}
              onClick={handleClose}>
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </List>
    </Box>
  );
};

export default NavOption;

import { Box, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Action", link: "/action" },
    { text: "Another action", link: "/another-action" },
    { text: "Something else here", link: "/something-else" },
  ];

  return (
    <Box>
      <List sx={{ display: 'flex' }}>
        <ListItem>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Dropdown link" />
          </ListItemButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            id="navbarDropdownMenuLink"
            aria-labelledby="navbarDropdownMenuLink"
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} component={Link} to={item.link} onClick={handleClose}>
                {item.text}
              </MenuItem>
            ))}
          </Menu>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;

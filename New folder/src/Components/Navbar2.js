import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import React from "react";

const Navbar2 = () => {
  // const listItem = [
  //   {
  //     text: "Home",
  //     icon: <HouseIcon />,
  //   },
  //   {
  //     text: "About",
  //     icon: <InfoIcon />,l
  //   },
  //   {
  //     text: "Contact",
  //     icon: <CallIcon />,
  //   },
  // ];

  const array = ["1st", "2nd", "3rd"];
  return (
    <Box>
      <List sx={{ width: 300 }}>
        {array.map((list, i) => (
          <ListItem>
            <ListItemButton>
              <ListItemText primary={list} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navbar2;

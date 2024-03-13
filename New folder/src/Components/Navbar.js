import React, { useState } from "react";
import "./Navbar.css";
import { Box, Button, Typography } from "@mui/material";
import MenuComponents from "./Sec Components/MenuComponents";
import MenuComponents2 from "./Sec Components/MenuComponents2";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {

  
  return (
    <Box className="Header" sx={{ gap: 2, paddingRight: "5rem" }}>
      <Typography variant="h6" color={"white"} fontSize={30}>
        Offers<span>.com</span>
      </Typography>

      <MenuComponents
        navName={"Stores*"}
        menuItems={[
          "Amazon",
          "Hobby Lobby",
          "Home Depot",
          "JCPenney",
          "Macy's",
          "All Stores",
        ]}
      />
      <MenuComponents
        navName={"Categories*"}
        menuItems={[
          "Auto Parts",
          "Clothing & Accessories",
          "Electronics",
          "Fast Food",
          "Furniture",
          "Health & Beauty",
          "All Categories",
        ]}
      />
      <MenuComponents
        navName={"Savings Events*"}
        menuItems={["Black Friday", "Easter", "Cyber Monday", "All Events"]}
      />
      <MenuComponents2 navName={"Best Deals"} />
      <MenuComponents2 navName={"Savings Tips"} />
      <Box
        sx={{
          paddingLeft: "30rem",
        }}>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            textTransform: "capitalize",
          }}>
          <SearchIcon /> Search
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;

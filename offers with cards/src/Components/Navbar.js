import React from "react";
import { Box, Typography } from "@mui/material";

import NavOption from "./NavOption";
import SearchBar from "./SearchBar";
import MenuComponents from "./MenuComponents";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#00a6aa",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "3.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      }}>
      <Typography variant="h6" color={"white"} fontSize={30}>
        Offers<span>.com</span>
      </Typography>

      <NavOption
        navName={"Stores"}
        menuItems={[
          { text: "Amazon", link: "/amazon" },
          { text: "Hobby Lobby", link: "/hobby-lobby" },
          { text: "Home Depot", link: "/home-depot" },
          { text: "JCPenny", link: "/jcpenny" },
          { text: "SHEIN", link: "/shein" },
          { text: "Target", link: "/target" },
          { text: "All Stores", link: "/all-stores" },
        ]}
      />
      <NavOption
        navName={"Categories"}
        menuItems={[
          { text: "Auto Parts", link: "/auto-parts" },
          { text: "Clothing & Accessories", link: "/clothing" },
          { text: "Electronics", link: "/electronics" },
          { text: "Fast Food", link: "/fast-food" },
          { text: "Furniture", link: "/furniture" },
          { text: "All Categories", link: "/all-Categories" },
        ]}
      />
      <NavOption
        navName={"Savings Events"}
        menuItems={[
          { text: "Black Friday", link: "/black-friday" },
          { text: "Easter", link: "/easter" },
          { text: "Cyber Monday", link: "/cyber-monday" },
          { text: "All Events", link: "/all-events" },
        ]}
      />

      <MenuComponents navName={"Best Deals"} link={"/Best-Deals"} />
      <MenuComponents navName={"Savings Tips"} link={"/Savings-Tips"} />

      {/* Search Component */}
      <Box
        sx={{
          position: "absolute",
          right: "7rem",
          top: "50%",
          transform: "translateY(-50%)",
        }}>
        <SearchBar />
      </Box>
    </Box>
  );
};

export default Navbar;

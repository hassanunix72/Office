import React from "react";
import { Box, Grid } from "@mui/material";
import ThumbNail from "./ThumbNail";
import amazon from "./images/amazon.jpg";
const ThumbNailData = () => {
  return (
    <Box sx={{ marginLeft: "10rem" }}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <ThumbNail
            image={amazon}
            headingInfo={
              "6 Non-Toxic Beauty Buys for Embracing Your Clean Girl Era"
            }
            brandLink={"Tazi Phillips "}
            dateInfo={"March 6, 2024"}
            paraInfo={
              "Shop some of our favorite cruelty-free products at Walmart."
            }
            itemLink={"Cosmetic"}
            sponsorLink={"Sponsored"}
          />
        </Grid>
        <Grid item xs={6}>
          <ThumbNail />
        </Grid>
        <Grid item xs={6}>
          <ThumbNail />
        </Grid>
        <Grid item xs={6}>
          <ThumbNail />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThumbNailData;

import React from "react";
import { Box, CardContent, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const Cards = ({ offerName, offerDiscount, offerBrand, offerValue }) => {
  return (
    <Container>
      <Card
        sx={{
          maxWidth: 250,
          margin: "15px",
          borderRadius: "16px",
          position: "relative",
        }}>
        {/* Sitewide label */}
        <Box
          sx={{
            position: "absolute",
            top: 1,
            left: 0,
            bgcolor: "#051e44",
            width: "6rem",
            height: "1.7rem",
            borderBottomRightRadius: "16px",
            borderTopLeftRadius: "16px",
            lineHeight: "1.5rem",
            textAlign: "center",
          }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "12px",
              color: "white",
              marginTop: "3.5px",
              textTransform: "uppercase",
            }}>
            {offerName}
          </Typography>
        </Box>

        {/* 50% label */}
        <Box
          sx={{
            position: "absolute",
            bottom: "51%",
            right: 8,
            bgcolor: "white",
            width: "5rem",
            height: "2rem",
            borderRadius: "16px",
            lineHeight: "1.5rem",
            textAlign: "center",
            boxShadow:
              "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
          }}>
          <Typography
            sx={{
              boxSizing: "border-box",
              fontWeight: "700",
              fontSize: "12px",
              color: "black",
              textTransform: "uppercase",
              padding: "8px 16px",
              lineHeight: "16px",
            }}>
            {offerDiscount}
          </Typography>
        </Box>

        {/* Card Media */}
        <CardMedia
          component="img"
          height="200"
          image="https://sgi3.offerscdn.net/i/production/published/4/image/11225679.h300.w300.flim.v3.bffffff.jpg"
          alt="Paella dish"
        />
        <CardContent sx={{ height: "9rem" }}>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontWeight: "500",
              textTransform: "uppercase",
            }}>
            {offerBrand}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontWeight: "500",
              textTransform: "capitalize",
              margin: "3px 0 3px 0",
            }}>
            {offerValue}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Cards;

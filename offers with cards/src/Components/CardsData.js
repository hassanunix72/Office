import React from "react";
import Cards from "./Cards";
import { Box } from "@mui/material";

const CardsData = () => {
  return (
    <>
      <Box>
        {/* First Row */}
        <Box sx={{ display: "flex", marginBottom: 2 }}>
          <Cards
            offerName={"Sitewide"}
            offerDiscount={"50% off"}
            offerBrand={"Michael kors"}
            offerValue={"25% off on any orders"}
          />
          <Cards
            offerName={"Any Order"}
            offerDiscount={"70% off"}
            offerBrand={"Jordan"}
            offerValue={"30% off on any orders"}
          />
          <Cards
            offerName={"Exclusive"}
            offerDiscount={"$15 off"}
            offerBrand={"Finish line"}
            offerValue={"$15 Off over $100 With Free Shipping"}
          />
          <Cards
            offerName={"Sitewide"}
            offerDiscount={"20% off"}
            offerBrand={"parana"}
            offerValue={"25% off on any orders"}
          />
          <Cards
            offerName={"Sitewide"}
            offerDiscount={"50% off"}
            offerBrand={"Michael kors"}
            offerValue={"20% off on full priced items for students & teachers"}
          />
        </Box>
        {/* Second Row */}
        <Box sx={{ display: "flex", marginBottom: 2 }}>
          <Cards
            offerName={"Sitewide"}
            offerDiscount={"50% off"}
            offerBrand={"Michael kors"}
            offerValue={"25% off on any orders"}
          />
          <Cards
            offerName={"Exclusive"}
            offerDiscount={"60% off"}
            offerBrand={"Michael Jorden"}
            offerValue={"30% off on Selected orders"}
          />
          <Cards
            offerName={"Sitewide"}
            offerDiscount={"50% off"}
            offerBrand={"Nike"}
            offerValue={"40% off on All orders"}
          />
        </Box>
        
      </Box>
    </>
  );
};

export default CardsData;

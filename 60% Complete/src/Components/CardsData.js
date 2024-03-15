import React from "react";
import Cards from "./Cards";
import { Box, Container, Link, Typography } from "@mui/material";
import CVS from "./images/CVS.png";
import FL from "./images/Finish line.png";
import Shein from "./images/SHEIN.png";
import Ulta from "./images/Ulta.png";
import skecher from "./images/Skecher.png";
import target from "./images/Target.png";
import krispy from "./images/krispy.png";
import crocs from "./images/crocs.png";
import amazon from "./images/amazon.jpg";

const CardsData = () => {
  return (
    <>
      <Container>
        <Box sx={{ boxSizing: "border-box", textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Inter var , sans-serif",
              fontSize: "36px",
              fontWeight: "700",
              margin: "16px 0px",
              color: "rgb(50, 50, 50)",
              lineHeight: "40px",
              boxSizing: "border-box",
            }}>
            Coupons and Deals From Stores You Love
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Inter var , sans-serif",
              color: "rgb(75, 85, 99)",
              fontSize: "12px",
              lineHeight: "16px",
              margin: "0px",
              boxSizing: "border-box",
            }}>
            When you buy through links on our site,
            <a href="#">we may earn a commission.</a>
          </Typography>
        </Box>
        {/* First Row */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter var , sans-serif",
            fontSize: "18px",
            fontWeight: "700",
            margin: "32px 0px 0px -6rem",
            lineHeight: "40px",
          }}>
          Featured Deals
          <Typography variant="span">
            &nbsp;&nbsp;
            <Link
              href="#"
              sx={{
                color: "#009599",
                fontSize: "14px",
                fontWeight: "100",
                fontFamily: "Inter var , sans-serif",
                textDecoration: "underline solid rgb(0, 149, 153)",
              }}>
              <>View All</>
            </Link>
          </Typography>
        </Typography>
        <Box sx={{ display: "flex", marginBottom: 2 }}>
          <Cards
            image={
              "https://sgi3.offerscdn.net/i/production/published/4/image/11225679.h300.w300.flim.v3.bffffff.jpg"
            }
            offerName={"Sitewide"}
            offerDiscount={"50% off"}
            offerBrand={"Michael kors"}
            offerValue={"25% off on any orders"}
            sx={{ marginRight: 1 }}
          />
          <Cards
            image={
              "https://sgi3.offerscdn.net/i/production/published/4/image/11221308.h300.w300.flim.v8.bffffff.jpg"
            }
            offerName={"Any Order"}
            offerDiscount={"70% off"}
            offerBrand={"Jordan"}
            offerValue={"30% off on any orders"}
            sx={{ marginRight: 1 }}
          />
          <Cards
            image={
              "https://sgi2.offerscdn.net/i/zdcs-merchants/02gZkrgqGKK5NsfQRiavl5G.h300.w300.flim.v127.bffffff.png"
            }
            offerName={"Exclusive"}
            offerDiscount={"$15 off"}
            offerBrand={"Finish line"}
            offerValue={"$15 Off over $100 With Free Shipping"}
            sx={{ marginRight: 1 }}
          />
          <Cards
            image={
              "https://sgi2.offerscdn.net/i/zdcs-merchants/05exxGj3D7XT5VhRxpiPZJI.h300.w300.flim.v1036.bffffff.png"
            }
            offerName={"Sitewide"}
            offerDiscount={"20% off"}
            offerBrand={"parana"}
            offerValue={"25% off on any orders"}
            sx={{ marginRight: 1 }}
          />
          <Cards
            image={FL}
            offerName={"Sitewide"}
            offerDiscount={"50% off"}
            offerBrand={"Michael kors"}
            offerValue={"20% off on full priced items for students & teachers"}
          />
        </Box>
        {/* Second Row */}
        <Box sx={{ display: "flex", marginBottom: 2 }}>
          <Cards
            image={CVS}
            offerName={"Sitewide"}
            offerDiscount={"50% off"}
            offerBrand={"Michael kors"}
            offerValue={"25% off on any orders"}
          />
          <Cards
            image={Shein}
            offerName={"Exclusive"}
            offerDiscount={"60% off"}
            offerBrand={"Michael Jorden"}
            offerValue={"30% off on Selected orders"}
          />
          <Cards
            image={Ulta}
            offerName={"Sitewide"}
            offerDiscount={"50% off"}
            offerBrand={"Nike"}
            offerValue={"40% off on All orders"}
          />
          <Cards
            image={FL}
            offerName={"Sitewide"}
            offerDiscount={"50% off"}
            offerBrand={"Nike"}
            offerValue={"40% off on All orders"}
          />
          <Cards
            image={Shein}
            offerName={"Sitewide"}
            offerDiscount={"50% off"}
            offerBrand={"Nike"}
            offerValue={"40% off on All orders"}
          />
        </Box>

        {/* Third Row */}

        <Box sx={{ paddingTop: 7 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter var , sans-serif",
              fontSize: "18px",
              fontWeight: "700",
              margin: "32px 0px 0px -6rem",
              lineHeight: "40px",
            }}>
            Our Favorite St. Patrick's Day Deals
          </Typography>
          <Box sx={{ display: "flex", marginBottom: 2 }}>
            <Cards
              image={skecher}
              offerName={"Sitewide"}
              offerDiscount={"50% off"}
              offerBrand={"Michael kors"}
              offerValue={"25% off on any orders"}
            />
            <Cards
              image={target}
              offerName={"Exclusive"}
              offerDiscount={"60% off"}
              offerBrand={"Michael Jorden"}
              offerValue={"30% off on Selected orders"}
            />
            <Cards
              image={krispy}
              offerName={"Sitewide"}
              offerDiscount={"50% off"}
              offerBrand={"Nike"}
              offerValue={"40% off on All orders"}
            />
            <Cards
              image={crocs}
              offerName={"Sitewide"}
              offerDiscount={"50% off"}
              offerBrand={"Nike"}
              offerValue={"40% off on All orders"}
            />
            <Cards
              image={amazon}
              offerName={"Sitewide"}
              offerDiscount={"50% off"}
              offerBrand={"Nike"}
              offerValue={"40% off on All orders"}
            />
          </Box>

          {/* Fourth Row */}

          <Box sx={{ display: "flex", marginBottom: 2 }}>
            <Cards
              image={target}
              offerName={"Sitewide"}
              offerDiscount={"50% off"}
              offerBrand={"Michael kors"}
              offerValue={"25% off on any orders"}
            />
            <Cards
              image={crocs}
              offerName={"Exclusive"}
              offerDiscount={"60% off"}
              offerBrand={"Michael Jorden"}
              offerValue={"30% off on Selected orders"}
            />
            <Cards
              image={amazon}
              offerName={"Sitewide"}
              offerDiscount={"50% off"}
              offerBrand={"Nike"}
              offerValue={"40% off on All orders"}
            />
            <Cards
              image={skecher}
              offerName={"Sitewide"}
              offerDiscount={"50% off"}
              offerBrand={"Nike"}
              offerValue={"40% off on All orders"}
            />
            <Cards
              image={krispy}
              offerName={"Sitewide"}
              offerDiscount={"50% off"}
              offerBrand={"Nike"}
              offerValue={"40% off on All orders"}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CardsData;

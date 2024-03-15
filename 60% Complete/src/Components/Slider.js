import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { IconButton } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://sgi3.offerscdn.net/i/production/published/92/image/3746.h312.w1248.flpad.v2.bffffff.jpg",
    label: "San Francisco – Oakland Bay Bridge, United States",
  },
  {
    imgPath:
      "https://sgi2.offerscdn.net/i/production/published/92/image/3745.h312.w1248.flpad.v2.bffffff.jpg",
    label: "Bird",
  },
];

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%", // Adjust width as needed

        margin: "0 auto", // Center horizontally
      }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ maxWidth: "80%" }} // Limit image width
      >
        {images.map((step, index) => (
          <Box key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  borderRadius: "10px",
                  overflow: "hidden",
                  height: "32vh",
                }}>
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
                
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 120,
                    left: 10,
                    bgcolor: "white",
                    color: "black",
                    borderRadius: "50%",
                  }}
                  onClick={handleBack}
                  disabled={activeStep === 0}>
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </IconButton>
                <IconButton
                  sx={{
                    position: "absolute",
                    bgcolor: "white",
                    color: "black",
                    right: 10,
                    top: 120,
                    borderRadius: "50%",
                  }}
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}>
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </IconButton>
              </Box>
            ) : null}
          </Box>
        ))}
        
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Slider;

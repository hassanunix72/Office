import { Box } from "@mui/material";

import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import CardsData from "./Components/CardsData";
import ThumbNailData from "./Components/ThumbNailData";

function App() {
  return (
    <>
      <Navbar />

      <Box sx={{ marginTop: "15px" }}>
        <Slider />
      </Box>

      <CardsData />
      <ThumbNailData />
    </>
  );
}

export default App;

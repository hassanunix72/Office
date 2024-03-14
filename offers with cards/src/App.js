import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import CardsData from "./Components/CardsData";

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ marginTop: "15px" }}>
        <Slider />
      </Box>
      <CardsData />
    </>
  );
}

export default App;

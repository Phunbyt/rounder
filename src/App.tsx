import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          marginTop: "4em",
        }}
      ></Box>
      <Home />
    </>
  );
}

export default App;

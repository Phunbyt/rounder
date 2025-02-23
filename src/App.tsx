import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import { Box, Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

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

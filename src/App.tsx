import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import { Box } from "@mui/material";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router";
import SIS from "./pages/SIS/SIS";
import AboutUs from "./pages/AboutUs/AboutUs";
import FAQ from "./pages/FAQ/FAQ";

function App() {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          marginTop: "4em",
        }}
      ></Box>
      <Routes>
        <Route index element={<Home />} />
        <Route path="sis" element={<SIS />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="faq" element={<FAQ />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

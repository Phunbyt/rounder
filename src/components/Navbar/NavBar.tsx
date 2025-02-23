import {
  Stack,
  Link,
  Toolbar,
  Container,
  AppBar,
  Box,
  Drawer,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavList from "./NavList";
import { useState } from "react";
import CustomButton from "../Button/Button";
import { rounderLogo } from "../../assets/images";

const pages = [
  { name: "Ride", id: "ride" },
  { name: "Drive", id: "drive" },
  { name: "About Us", id: "about" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#111",
        boxShadow: "none", // Remove elevation
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "0.5em", sm: "1em" }, // Responsive padding
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={rounderLogo}
              alt="RoundeR Logo"
              sx={{
                height: { xs: "40px", sm: "50px", md: "60px" }, // Responsive logo size
                width: "auto",
              }}
            />
          </Box>

          {/* Mobile Menu Icon */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" }, // Show only on small screens
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: 1,
            }}
          >
            <MenuIcon
              onClick={toggleDrawer(true)}
              sx={{ color: "white", fontSize: "2rem" }} // Responsive icon size
            />
          </Box>

          {/* Mobile Drawer */}
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            anchor="right"
            sx={{
              display: { xs: "block", sm: "none" }, // Show only on small screens
              "& .MuiDrawer-paper": {
                backgroundColor: "#1b1b1b", // Dark background for drawer
                width: { xs: "70%", sm: "300px" }, // Responsive drawer width
              },
            }}
          >
            <NavList />
          </Drawer>

          {/* Desktop Navigation Links */}
          <Stack
            direction="row"
            gap={{ xs: 2, sm: 3, md: 4 }} // Responsive gap
            sx={{
              display: { xs: "none", sm: "flex" }, // Hide on small screens
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.id}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
                  "&:hover": {
                    color: "primary.main", // Hover effect
                  },
                }}
              >
                {page.name}
              </Link>
            ))}
          </Stack>

          {/* Desktop Login and Sign Up */}
          <Stack
            direction="row"
            gap={{ xs: 2, sm: 3, md: 4 }} // Responsive gap
            sx={{
              display: { xs: "none", sm: "flex" }, // Hide on small screens
              alignItems: "center",
            }}
          >
            <Link
              sx={{
                color: "white",
                textDecoration: "none",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
                "&:hover": {
                  color: "primary.main", // Hover effect
                },
              }}
            >
              Login
            </Link>
            <CustomButton
              text="Sign Up"
              sx={{
                padding: { xs: "0.5em 1em", sm: "0.8em 1.5em" }, // Responsive padding
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
              }}
            />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

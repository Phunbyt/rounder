import { Box, Container, Link } from "@mui/material";
import { appstore, googleplay, rounderLogo } from "../../assets/images";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { BodyText } from "../../components/Text";

const Bottom = () => {
  const links = [
    { id: "ride", title: "Book a truck" },
    { id: "drive", title: "Consultation" },
    { id: "about", title: "Track your truck" },
  ];

  const socialLinks = [
    { url: "facebook.com", icon: <FacebookIcon /> },
    { url: "instagram.com", icon: <InstagramIcon /> },
    { url: "twitter.com", icon: <TwitterIcon /> },
    { url: "youtube.com", icon: <YouTubeIcon /> },
  ];

  return (
    <Container
      sx={{
        marginTop: { xs: "1em", sm: "2em", md: "3em" }, // Responsive margin
        padding: { xs: ".6em", sm: "1em", md: "2em" }, // Responsive padding
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          marginBottom: { xs: "1.5em", sm: "2em", md: "3em" }, // Responsive margin
        }}
      >
        <Box
          component="img"
          alt="RoundeR Logo"
          src={rounderLogo}
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: { xs: "60px", sm: "80px" }, // Responsive logo size
          }}
        />
      </Box>

      {/* Links */}
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          margin: { xs: "1.5em auto", sm: "2em auto", md: "3em auto" }, // Responsive margin
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: { xs: "350px", sm: "400px" }, // Responsive max width
            width: "100%",
            gap: { xs: "1em", sm: "2em" }, // Responsive gap between links
          }}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
              }}
            >
              {link.title}
            </Link>
          ))}
        </Box>
      </Box>

      {/* App Store and Google Play Buttons */}
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          margin: { xs: "1.5em auto", sm: "2em auto", md: "3em auto" }, // Responsive margin
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: { xs: "300px", sm: "400px", md: "500px" }, // Responsive max width
            width: "100%",
            gap: { xs: "1em", sm: "2em" }, // Responsive gap between buttons
          }}
        >
          <Box>
            <Box
              component="img"
              alt="App Store"
              src={appstore}
              sx={{
                width: { xs: "120px", sm: "150px" }, // Responsive image size
                height: "auto",
              }}
            />
          </Box>
          <Box>
            <Box
              component="img"
              alt="Google Play"
              src={googleplay}
              sx={{
                width: { xs: "120px", sm: "150px" }, // Responsive image size
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Social Links */}
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          margin: { xs: "1.5em auto", sm: "2em auto", md: "3em auto" }, // Responsive margin
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: { xs: "250px", sm: "300px" }, // Responsive max width
            width: "100%",
            gap: { xs: "1em", sm: "2em" }, // Responsive gap between icons
          }}
        >
          {socialLinks.map((link) => (
            <Link
              key={link.url}
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: { xs: "1.5rem", sm: "2rem" }, // Responsive icon size
              }}
            >
              {link.icon}
            </Link>
          ))}
        </Box>
      </Box>

      {/* Footer Text */}
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          margin: { xs: "1.5em auto", sm: "2em auto", md: "3em auto" }, // Responsive margin
        }}
      >
        <BodyText
          text={"2025. All rights reserved."}
          style={{ opacity: 0.5, fontSize: { xs: "0.8rem", sm: "1rem" } }} // Responsive font size
        />
      </Box>
    </Container>
  );
};

export default Bottom;

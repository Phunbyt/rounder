import { Box, Container } from "@mui/material";
import { BodyText, HeaderText } from "../../components/Text";

import CustomButton from "../../components/Button/Button";

const Hero = () => {
  return (
    <Container
      sx={{
        marginTop: { xs: "1em", sm: "2em", md: "3em" }, // Responsive margin
        display: "grid",
        placeItems: "center",
        padding: { xs: "1em", sm: "2em", md: "3em" }, // Responsive padding
      }}
      disableGutters={true}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",

          flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, row on larger screens
          justifyContent: "space-between",
          gap: { xs: "2em", md: "4em" }, // Responsive gap between text and image
          width: "100%",
        }}
      >
        {/* Background Blur Effect */}
        <Box
          sx={{
            position: "absolute",
            height: { xs: "150px", sm: "200px", md: "500px" }, // Responsive height
            width: "100%",
            maxWidth: { xs: "200px", sm: "250px", md: "400px" }, // Responsive width
            top: { xs: "10%", sm: "5%" }, // Responsive position
            left: { xs: "30%", sm: "40%" }, // Responsive position
            borderRadius: "50%",
            filter: "blur(80px)",
            background: "rgba(208, 53, 255, 0.21)",
            zIndex: -1, // Ensure it stays behind the content
          }}
        ></Box>
        {/* Left Side: Text and Buttons */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" }, // Center text on small screens, left-align on larger screens
          }}
        >
          <HeaderText
            text={"Optimize Your Stock. Minimise Waste. Automate Alerts."}
            style={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "4rem" }, // Responsive font size
              margin: { xs: "0.5em auto", md: "1em auto" }, // Responsive margin
              textAlign: "center",
            }}
          />
          <BodyText
            text={
              "Automated inventory insights that detect low stock, track expiry dates, and highlight products ready for promotion."
            }
            style={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "2rem" }, // Responsive font size
              margin: { xs: "1em auto", md: "1.5em auto" }, // Responsive margin
              textAlign: "center",
            }}
          />

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack buttons vertically on small screens, row on larger screens
              justifyContent: "center", // Center buttons on small screens, left-align on larger screens
              gap: { xs: "1em", sm: "2em" }, // Responsive gap between buttons
              margin: { xs: "2em auto", md: "5em auto" }, // Responsive margin
            }}
          >
            <CustomButton
              sx={{
                padding: { xs: "0.8em", sm: "1em" }, // Responsive padding
                width: { xs: "100%", sm: "200px" }, // Full width on small screens, fixed width on larger screens
              }}
              text={"Get Started"}
            />
            <CustomButton
              sx={{
                padding: { xs: "0.8em", sm: "1em" }, // Responsive padding
                width: { xs: "100%", sm: "200px" }, // Full width on small screens, fixed width on larger screens
              }}
              text={"See how it works"}
              outlined={true}
            />
          </Box>
        </Box>

        {/* Right Side: Image */}
        {/* <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" }, // Center image on small screens, align right on larger screens
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            alt="The house from the offer."
            src={truckLoad}
            sx={{
              width: "100%",
              maxWidth: { xs: "300px", sm: "400px", md: "500px" }, // Responsive image size
              height: "auto",
              borderRadius: "8px", // Optional: Add rounded corners
            }}
          />
        </Box> */}
      </Box>
    </Container>
  );
};

export default Hero;

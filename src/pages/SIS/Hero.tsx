import { Box, Container } from "@mui/material"; // Added Container for max-width control
import { BodyText, HeaderText } from "../../components/Text";
import { esl } from "../../assets/images";

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Main Flex Container */}
      <Box
        sx={{
          // Default: Stack vertically for small screens
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" }, // Image on top for mobile, Text on left for desktop
          alignItems: "center", // Center items along the cross-axis
          gap: { xs: 4, md: 8 }, // Responsive gap between the two main sections
        }}
      >
        {/* Text Section (Now takes 2/3rds of space on desktop) */}
        <Box
          sx={{
            flex: { md: 2 }, // Increased flex size to give text more room
            textAlign: { xs: "center", md: "left" }, // Center text on small, left-align on desktop
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 3 }, // Responsive gap between Text elements (Header and Body)
          }}
        >
          <HeaderText
            text={"Intelligent Shelves. Smarter Inventory."}
            style={{
              fontSize: { xs: "1rem", sm: "2rem", md: "3rem" }, // Slightly increased sizes for impact
              lineHeight: 1.1, // Improved readability for large headers
            }}
          />
          <BodyText
            text={
              "Real-time alerts for low stock, nearing-expiry items, and promotions. All accessible via your dashboard or mobile device."
            }
            style={{
              fontSize: { xs: "1rem", sm: "1.15rem", md: "1.35rem" }, // Slightly increased sizes for body text
              maxWidth: { md: "90%" }, // Constrain width on desktop for better reading
              margin: { xs: "0 auto", md: 0 }, // Center body text on mobile
            }}
          />
        </Box>

        {/* Image Section (Now takes 1/3rd of space on desktop) */}
        <Box
          sx={{
            flex: { md: 1 }, // Reduced flex size to make the image smaller
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // Control max width on mobile to prevent image overflow
            maxWidth: { xs: "80%", sm: "60%", md: "100%" },
            margin: { xs: "0 auto", md: 0 }, // Center image on mobile
          }}
        >
          <Box
            component="img"
            alt="Intelligent Electronic Shelf Labels (ESL) displaying inventory information."
            src={esl}
            sx={{
              width: "100%", // Always take full width of parent Box
              height: "auto",
              borderRadius: 2, // Use theme spacing for radius (equivalent to 8px)
              boxShadow: 3, // Optional: Add a subtle shadow for depth
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;

import { Box, Container } from "@mui/material"; // Added Container for max-width control

import { store } from "../../assets/images";
import LongCard from "../../components/LongCard/LongCard";
import { longCardData } from "../../components/LongCard/longCardData";

function Installation() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Main Flex Container */}
      <Box>
        <Box
          sx={{
            position: "absolute",
            height: { xs: "150px", sm: "200px", md: "500px" }, // Responsive height
            width: "100%",
            maxWidth: { xs: "200px", sm: "250px", md: "400px" }, // Responsive width
            top: { xs: "10%", sm: "80%" }, // Responsive position
            left: { xs: "30%", sm: "40%" }, // Responsive position
            borderRadius: "50%",
            filter: "blur(80px)",
            background: "rgba(208, 53, 255, 0.21)",
            zIndex: -1, // Ensure it stays behind the content
          }}
        ></Box>
        <Container
          sx={{
            backgroundColor: "#1A1B1D",
            padding: 3,
            marginBottom: "8rem",
          }}
        >
          <Container maxWidth="md">
            <LongCard
              title={"Installation"}
              body={
                "Professional setup of sensors, displays, and ERP/POS integrations—get your system running seamlessly from day one"
              }
              image={store}
            />
          </Container>
        </Container>

        {/* Text Section (Now takes 2/3rds of space on desktop) */}
        <Container maxWidth="md">
          {longCardData.map((card, index) => (
            <Box
              key={index}
              sx={{
                marginBottom:
                  index !== longCardData.length - 1 ? "7rem" : "0rem",
              }}
            >
              <LongCard
                title={card.title}
                body={card.body}
                image={card.image}
              />
            </Box>
          ))}
        </Container>
      </Box>
    </Container>
  );
}

export default Installation;

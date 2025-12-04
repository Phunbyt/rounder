import { Box, Container } from "@mui/material";
import { BodyText, HeaderText } from "../../components/Text";
import CustomButton from "../../components/Button/Button";
import AccordionUsage from "../../components/Accordion/Accordion";
import { accordionData } from "../../components/Accordion/accordionData";

const FAQ = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          flex: { md: 2 }, // Increased flex size to give text more room
          textAlign: { xs: "center", md: "left" }, // Center text on small, left-align on desktop
          display: "flex",
          //   flexDirection: "column",
          gap: { xs: 2, md: 3 }, // Responsive gap between Text elements (Header and Body)
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: { xs: "150px", sm: "200px", md: "500px" }, // Responsive height
            width: "100%",
            maxWidth: { xs: "200px", sm: "250px", md: "400px" }, // Responsive width
            top: { xs: "10%", sm: "30%" }, // Responsive position
            left: { xs: "30%", sm: "40%" }, // Responsive position
            borderRadius: "50%",
            filter: "blur(80px)",
            background: "rgba(208, 53, 255, 0.21)",
            zIndex: -1, // Ensure it stays behind the content
          }}
        ></Box>
        <Box
          sx={{
            flex: { md: 2 }, // Increased flex size to give text more room
          }}
        >
          <HeaderText
            text={"Got some questions?"}
            style={{
              fontSize: { xs: "1rem", sm: "2rem", md: "3rem" }, // Slightly increased sizes for impact
              lineHeight: 1.1, // Improved readability for large headers
            }}
          />
        </Box>
        <Box
          sx={{
            flex: { md: 2 }, // Increased flex size to give text more room
          }}
        >
          <BodyText
            text={"Still have unanswered questions and need to get in touch?"}
            style={{
              fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1rem" }, // Slightly increased sizes for body text
              maxWidth: { md: "90%" }, // Constrain width on desktop for better reading
              margin: { xs: "0 auto", md: 0 }, // Center body text on mobile
            }}
          />

          <CustomButton
            text="Contact Us"
            color="#fff"
            backgroundColor="#DE05FF"
            sx={{
              marginTop: 2,
              padding: { xs: "0.6em", md: "0.8em" },
              width: { xs: "100%", sm: "80%", md: "60%" },
            }}
          />
        </Box>
      </Box>

      <AccordionUsage questions={accordionData} />
    </Container>
  );
};

export default FAQ;

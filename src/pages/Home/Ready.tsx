import { Box, Container } from "@mui/material";
import { BodyText, HeaderText } from "../../components/Text";
import CustomButton from "../../components/Button/Button";

const Ready = () => {
  return (
    <Container
      sx={{
        marginTop: { xs: "2em", sm: "3em", md: "4em" }, // Responsive margin
        padding: { xs: "1em", sm: "2em", md: "3em" }, // Responsive padding
      }}
    >
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.05)",
          padding: { xs: "2em", sm: "3em", md: "5em" }, // Responsive padding
          borderRadius: "8px", // Optional: Add rounded corners
        }}
      >
        {/* Header and Body Text */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: { xs: "1.5em", sm: "2em", md: "3em" }, // Responsive margin
          }}
        >
          <HeaderText
            text={"Want to know more?"}
            style={{
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // Responsive font size
              marginBottom: { xs: "1rem", sm: "1.5rem" }, // Responsive margin
            }}
          />
          <BodyText
            text={"We’d love to hear from you"}
            style={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
              marginBottom: { xs: "1.5rem", sm: "2rem", md: "3rem" }, // Responsive margin
            }}
          />
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack buttons vertically on small screens, row on larger screens
            justifyContent: "center",
            gap: { xs: "1em", sm: "2em" }, // Responsive gap between buttons
            alignItems: "center",
          }}
        >
          {/* <Box
            sx={{
              width: { xs: "100%", sm: "250px" }, // Full width on small screens, fixed width on larger screens
            }}
          >
            <CustomButton
              text={"Book a truck"}
              sx={{
                padding: { xs: "0.8em", sm: "1em" }, // Responsive padding
                width: "100%",
              }}
            />
          </Box> */}
          <Box
            sx={{
              width: { xs: "100%", sm: "250px" }, // Full width on small screens, fixed width on larger screens
            }}
          >
            <CustomButton
              text={"Contact us"}
              // outlined={true}
              color={"#fff"}
              backgroundColor={"#DE05FF"}
              sx={{
                padding: { xs: "0.8em", sm: "1em" }, // Responsive padding
                width: "100%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Ready;

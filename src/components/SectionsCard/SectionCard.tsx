import { Box, CircularProgress } from "@mui/material";

import { BodyText, HeaderText } from "../Text";

const SectionCard = ({ title, body }: { title: string; body: string }) => {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        maxWidth: 400,

        display: "flex",
        flexDirection: "column",

        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
        marginBottom: 2,
      }}
    >
      <CircularProgress sx={{ backgroundColor: "#DE05FF", borderRadius: "50%" }} />

      <HeaderText
        style={{
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.5rem" }, // Responsive font size
          fontWeight: 600,
          mt: { xs: 1, sm: 1.5 },
        }}
        text={title}
      />
      <BodyText
        text={body}
        style={{
          fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive font size
          margin: { xs: "1em auto", md: "1.5em auto" }, // Responsive margin
        }}
      />
    </Box>
  );
};

export default SectionCard;

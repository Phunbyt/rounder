import { Box } from "@mui/material";
import React from "react";
import { BodyText, HeaderText } from "../Text";
import Grid from "@mui/material/Grid2";

interface TextCardProps {
  title: string;
  body: string;
  headerTextColor?: string;
  removeBackground?: boolean;
  headerTextFontSize?: { xs: string; sm: string; md: string };
}

const TextCard: React.FC<TextCardProps> = ({
  title,
  body,
  headerTextColor,
  removeBackground,
  headerTextFontSize,
}) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Box
        sx={{
          p: { xs: 2, sm: 3 },
          background: removeBackground ? "none" : "rgba(248, 255, 248, 0.1)",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          },
          marginBottom: 2,
        }}
      >
        <HeaderText
          style={{
            fontSize: headerTextFontSize?.md
              ? headerTextFontSize
              : { xs: "0.9rem", sm: "1rem", md: "1.5rem" }, // Responsive font size
            fontWeight: 600,
            mt: { xs: 1, sm: 1.5 },
            color: headerTextColor,
          }}
          text={title}
        />
        <BodyText
          text={body}
          style={{
            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive font size
            margin: { xs: "1em auto", md: "1.5em auto" }, // Responsive margin
            textAlign: "center",
          }}
        />
      </Box>
    </Grid>
  );
};

export default TextCard;

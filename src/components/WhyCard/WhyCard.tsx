import { Box, Stack } from "@mui/material";
import React from "react";
import { BodyText, HeaderText } from "../Text";

const WhyCard = ({ icon, headerText, bodyText }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          marginBottom: "1.5em",
          marginTop: "1.5em",
        }}
      >
        <Box
          component="img"
          alt="The house from the offer."
          src={icon}
          sx={{
            background: "rgba(248, 255, 248, 0.1)",
            padding: ".8em",
            borderRadius: "10px",
          }}
        />
      </Box>

      <Box
        sx={{
          marginBottom: "2.5em",
          padding: "0.8em",
        }}
      >
        <HeaderText
          style={{
            fontSize: ".9rem",
            textAlign: "center",
            marginBottom: "1.5em",
          }}
          text={headerText}
        />
        <BodyText text={bodyText} style={{ textAlign: "center" }} />
      </Box>
    </Box>
  );
};

export default WhyCard;

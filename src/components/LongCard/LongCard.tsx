import { Box } from '@mui/material';
import React from 'react'
import { BodyText, HeaderText } from '../Text';

interface LongCardProps {
  title: string;
  body: string;
  image?: string;
}

const LongCard: React.FC<LongCardProps> = ({ title, body, image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" }, // Image on top for mobile, Text on left for desktop
        alignItems: "center", // Center items along the cross-axis
        gap: { xs: 4, md: 8 }, // Responsive gap between the two main sections
      }}
    >
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
          text={title}
          style={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "2rem" }, // Slightly increased sizes for impact
            lineHeight: 1.1, // Improved readability for large headers
          }}
        />
        <BodyText
          text={body}
          style={{
            fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1rem" }, // Slightly increased sizes for body text
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
          src={image}
          sx={{
            width: "100%", // Always take full width of parent Box
            height: "auto",
            borderRadius: 2, // Use theme spacing for radius (equivalent to 8px)
            boxShadow: 3, // Optional: Add a subtle shadow for depth
          }}
        />
      </Box>
    </Box>
  );
}

export default LongCard
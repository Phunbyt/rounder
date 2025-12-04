import { Box, Container, Grid2 } from "@mui/material";

import { BodyText, HeaderText } from "../../components/Text";
import SectionCard from "../../components/SectionsCard/SectionCard";
import { sectionData } from "../../components/SectionsCard/sctionData";

const Sectors = () => {
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
            flex: { md: 2 }, // Increased flex size to give text more room
          }}
        >
          <HeaderText
            text={"Sectors we serve"}
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
            text={
              "RoundeR brings intelligent inventory management across a variety of industries—helping businesses reduce waste, improve stock turnover, and maximize profitability."
            }
            style={{
              fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1rem" }, // Slightly increased sizes for body text
              maxWidth: { md: "90%" }, // Constrain width on desktop for better reading
              margin: { xs: "0 auto", md: 0 }, // Center body text on mobile
            }}
          />
        </Box>
      </Box>

      <Grid2
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {sectionData.map((section, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <SectionCard title={section.title} body={section.body} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Sectors;

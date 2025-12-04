import { Box, Container } from "@mui/material";
import { BodyText, HeaderText } from "../../components/Text";
import { longShelf, missionShop } from "../../assets/images";
import WhyRounderSection from "../../components/WhyRounder/WhyRounderSection";
import Grid from "@mui/material/Grid2";
import TextCard from "../../components/TextCard/TextCard";

const aboutData = [
  {
    headerText: "Our Mission/Vision",
    bodyText:
      "To empower retailers and distributors with real-time inventory intelligence that reduces waste, prevents stock-outs, and drives profitability; helping clients achieve up to 40% better stock utilisation.",
    bodyText2:
      "To be the leading provider of smart inventory solutions across Africa, delivering innovation, reliability, and measurable impact to every business we serve.",
    listValues: [],
    buttonText: "",
    imageUrl: missionShop,

    reverse: false,
  },
];

const values = [
  {
    title: "Innovation",
    body: "Continuously improving systems for smarter, faster inventory decisions.",
  },
  {
    title: "Reliability",
    body: "24/7 support and seamless system performance you can trust.",
  },
  {
    title: "Local Impact",
    body: "Solutions tailored to African market, reducing waste and improving profitability.",
  },
];

const mission = [
  {
    title: "100+",
    body: "Stores and distributors are currently",
    headerTextColor: "#DE05FF",
    removeBackground: true,
    headerTextFontSize: { xs: "1rem", sm: "2rem", md: "3rem" }, // , // Slightly increased sizes for body text
  },
  {
    title: "20 - 25%",
    body: "Inventory accuracy improvement",
    headerTextColor: "#DE05FF",
    removeBackground: true,
    headerTextFontSize: { xs: "1rem", sm: "2rem", md: "3rem" }, // , // Slightly increased sizes for body text
  },
  {
    title: "35%",
    body: "Reduction in expired inventory",
    headerTextColor: "#DE05FF",
    removeBackground: true,
    headerTextFontSize: { xs: "1rem", sm: "2rem", md: "3rem" }, // , // Slightly increased sizes for body text
  },
];

const AboutUs = () => {
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
            top: { xs: "10%", sm: "50%" }, // Responsive position
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
            text={"About RoundeR"}
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
              "Transforming inventory management across Nigeria and Africa with intelligent, data-driven solutions"
            }
            style={{
              fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1rem" }, // Slightly increased sizes for body text
              maxWidth: { md: "90%" }, // Constrain width on desktop for better reading
              margin: { xs: "0 auto", md: 0 }, // Center body text on mobile
            }}
          />
        </Box>
      </Box>
      <Box
        component="img"
        alt="The house from the offer."
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "8px", // Optional: Add rounded corners
          marginBottom: { xs: 2, md: 4 },
        }}
        src={longShelf}
      />

      {aboutData.map((section) => (
        <WhyRounderSection
          reverse={section.reverse}
          headerText={section.headerText}
          bodyText={section.bodyText}
          bodyText2={section.bodyText2}
          listValues={section.listValues}
          buttonText={section.buttonText}
          imageUrl={section.imageUrl}
        />
      ))}

      <br />
      <br />
      <br />

      <Grid container spacing={3} justifyContent="center">
        {mission.map((service) => (
          <TextCard
            title={service.title}
            body={service.body}
            headerTextColor={service.headerTextColor}
            removeBackground={service.removeBackground}
            headerTextFontSize={service.headerTextFontSize}
          />
        ))}
      </Grid>
      <br />
      <br />
      <br />
      <HeaderText
        text={"Our Core Values"}
        style={{
          fontSize: { xs: "1rem", sm: "2rem", md: "3rem" }, // Slightly increased sizes for impact
          lineHeight: 1.1, // Improved readability for large headers
          textAlign: "center",
        }}
      />
      <Grid container spacing={3} justifyContent="center">
        {values.map((service) => (
          <TextCard title={service.title} body={service.body} />
        ))}
      </Grid>
    </Container>
  );
};

export default AboutUs;

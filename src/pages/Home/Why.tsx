import { Box, Container } from "@mui/material";
import { BodyText, HeaderText } from "../../components/Text";
import Grid from "@mui/material/Grid2";
import { whyDataBottom, whyDataTop } from "../../components/WhyCard/whyData";
import WhyGridItem from "../../components/WhyCard/WhyGridItem";
import WhyCard from "../../components/WhyCard/WhyCard";

const Why = () => {
  return (
    <Container
      sx={{
        marginTop: { xs: "2em", sm: "3em", md: "4em" }, // Responsive margin
        display: "grid",
        placeItems: "center",
        padding: { xs: "1em", sm: "2em", md: "3em" }, // Responsive padding
      }}
    >
      <Box>
        {/* Header Section */}
        <Box
          sx={{
            marginBottom: { xs: "1.5em", sm: "2em", md: "3em" }, // Responsive margin
            textAlign: "center",
          }}
        >
          <HeaderText
            text={"Why Choose RoundeR?"}
            style={{
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
            }}
          />
          <BodyText
            text={
              "RoundeR is more than just a transportation service; it's a movement towards a greener future."
            }
            style={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
            }}
          />
        </Box>

        {/* Grid Section */}
        <Box
          sx={{
            position: "relative",
          }}
        >
          {/* Background Blur Effect */}
          <Box
            sx={{
              position: "absolute",
              height: { xs: "150px", sm: "200px", md: "300px" }, // Responsive height
              width: "100%",
              maxWidth: { xs: "100px", sm: "150px", md: "200px" }, // Responsive width
              top: { xs: "10%", sm: "5%" }, // Responsive position
              left: { xs: "30%", sm: "40%" }, // Responsive position
              borderRadius: "50%",
              filter: "blur(80px)",
              background: "rgba(255, 232, 138, 0.21)",
              zIndex: -1, // Ensure it stays behind the content
            }}
          ></Box>

          {/* Grid Container */}
          <Grid container>
            {whyDataTop.map((item, index) => (
              <WhyGridItem
                key={index}
                children={
                  <WhyCard
                    icon={item.icon}
                    headerText={item.headerText}
                    bodyText={item.bodyText}
                  />
                }
                top={item.top}
                bottom={item.bottom}
                right={item.right}
                left={item.left}
              />
            ))}
            {whyDataBottom.map((item, index) => (
              <WhyGridItem
                key={index}
                children={
                  <WhyCard
                    icon={item.icon}
                    headerText={item.headerText}
                    bodyText={item.bodyText}
                  />
                }
                top={item.top}
                bottom={item.bottom}
                right={item.right}
                left={item.left}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Why;

import { Box, Container } from "@mui/material";

import { HeaderText } from "../../components/Text";
import { truck, chart, device } from "../../assets/images";
import Grid from "@mui/material/Grid2";

const serviceList = [
  { title: "Book a CNG truck", image: truck },
  { title: "Book a consultation", image: chart },
  { title: "Track your truck", image: device },
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={3} justifyContent="center">
        {serviceList.map((service, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                p: { xs: 2, sm: 3 },
                background: "rgba(248, 255, 248, 0.1)",
                borderRadius: 2,
                // height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              {/* <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: { xs: 80, md: 100 },
                  height: "auto",
                  mb: 2,
                }}
              /> */}

              <Box
                component="img"
                alt="The house from the offer."
                src={service.image}
                sx={
                  {
                    // width: { xs: 80, md: 100 },
                    // height: 200
                    //   borderRadius: "10px",
                  }
                }
              />
              <HeaderText
                style={{
                  fontSize: { xs: "1.1rem", sm: "1.2rem" },
                  fontWeight: 600,
                  mt: { xs: 1, sm: 1.5 },
                }}
                text={service.title}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;

import { Box, Container } from "@mui/material";

import { shelf } from "../../assets/images";
import Grid from "@mui/material/Grid2";
import TextCard from "../../components/TextCard/TextCard";

const serviceList = [
  {
    title: "How We Help You Save More",
    body: "RoundeR delivers measurable savings by automating inventory monitoring and optimizing product turnover.",
  },
  {
    title: "Reduce Manual Checks by up to 60%",
    body: "Our automated alerts eliminate the need for constant manual stock audits, freeing up staff time for higher-value tasks.",
  },
  {
    title: "Cut Product Waste by 35–50%",
    body: "By identifying items nearing expiration, RoundeR helps stores take timely action, discount, restock, or reallocate, to reduce losses.",
  },
  {
    title: "Lower Operating Overheads",
    body: "Streamlined inventory processes mean fewer labor hours, reduced paperwork, and better utilization of storage space.",
  },
  {
    title: "Faster Restocking Cycles",
    body: "Real-time data ensures products are replenished exactly when needed, preventing costly stock-outs and overstocking.",
  },
  {
    title: "Increased Profit Margins",
    body: "With improved stock accuracy and optimized promotions, RoundeR users can see up to a 15% boost in gross margins over time.",
  },
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        component="img"
        alt="The house from the offer."
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "8px", // Optional: Add rounded corners
          marginBottom: { xs: 2, md: 4 },
        }}
        src={shelf}
      />

      <Grid container spacing={3} justifyContent="center">
        {serviceList.map((service) => (
          <TextCard title={service.title} body={service.body} />
        ))}
      </Grid>
    </Container>
  );
};

export default Services;

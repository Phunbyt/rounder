import { Container } from "@mui/material";


import { whyRounderSection } from "../../components/WhyRounder/whyRounderSectionData";
import WhyRounderSection from "../../components/WhyRounder/WhyRounderSection";


const For = () => {
  return (
    <Container>
      {whyRounderSection.map((section) => (
        <WhyRounderSection
          reverse={section.reverse}
          headerText={section.headerText}
          bodyText={section.bodyText}
          listValues={section.listValues}
          buttonText={section.buttonText}
          imageUrl={section.imageUrl}
        />
      ))}
    </Container>
  );
};

export default For;

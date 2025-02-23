import { Container } from "@mui/material";

import ForSection from "../../components/ForSection/ForSection";
import { forSectionData } from "../../components/ForSection/forSectionData";

const For = () => {
  return (
    <Container>
      {forSectionData.map((section) => (
        <ForSection
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

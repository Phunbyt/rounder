import { Box } from "@mui/material";
import { BodyText, HeaderText } from "../Text";
import CustomButton from "../Button/Button";
import List from "@mui/joy/List";
import { ListItem } from "@mui/joy";

interface ForSectionProps {
  reverse: boolean;
  headerText: string;
  bodyText: string;
  bodyText2?: string;
  listValues: string[];
  buttonText: string;
  imageUrl: string;
}

const WhyRounderSection = ({
  reverse,
  headerText,
  bodyText,
  bodyText2,
  listValues,
  buttonText,
  imageUrl,
}: ForSectionProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column", // Stack vertically on small screens
          md: reverse ? "row-reverse" : "row", // Row layout on larger screens
        },
        marginTop: { xs: "4em", sm: "6em", md: "9em" }, // Responsive margin
        gap: { xs: "2em", md: "4em" }, // Responsive gap between text and image
        alignItems: "center", // Center items vertically
      }}
    >
      {/* Text and List Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" }, // Center text on small screens, left-align on larger screens
          width: { xs: "100%", md: "auto" }, // Full width on small screens
          maxWidth: { xs: "100%", md: "600px" }, // Limit width on larger screens
          padding: { xs: "1em", md: "0" }, // Add padding on small screens
          order: reverse ? { xs: 2, md: 1 } : { xs: 1, md: 1 }, // Reorder on small screens if reverse
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1em", md: "1.5em" }, // Responsive gap between elements
        }}
      >
        <HeaderText
          text={headerText}
          style={{
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
          }}
        />
        <BodyText
          text={bodyText}
          style={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
          }}
        />

        {bodyText2 && (
          <BodyText
            text={bodyText2}
            style={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
            }}
          />
        )}
        <Box
          sx={{
            color: "#fff",
            textAlign: { xs: "left", md: "left" }, // Left-align list on all screens
          }}
        >
          <List marker={"disc"}>
            {listValues.map((text, index) => (
              <ListItem
                sx={{
                  color: "#fff",
                }}
                key={index}
              >
                {text}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          {buttonText ?? (
            <CustomButton
              text={buttonText}
              sx={{
                width: { xs: "100%", sm: "200px" }, // Full width on small screens, fixed width on larger screens
                padding: { xs: "0.8em", sm: "1em" }, // Responsive padding
              }}
            />
          )}
        </Box>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "auto" }, // Full width on small screens
          maxWidth: { xs: "100%", md: "600px" }, // Limit width on larger screens
          order: reverse ? { xs: 1, md: 2 } : { xs: 2, md: 2 }, // Reorder on small screens if reverse
        }}
      >
        <Box
          component="img"
          alt="The house from the offer."
          src={imageUrl}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px", // Optional: Add rounded corners
          }}
        />
      </Box>
    </Box>
  );
};

export default WhyRounderSection;

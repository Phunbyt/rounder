import Grid from "@mui/material/Grid2";
import { ReactNode } from "react";


interface WhyGridItemProps {
  children: ReactNode;
  top: boolean;
  bottom: boolean;
  right: boolean;
  left: boolean;
}

const WhyGridItem = ({
  children,
  top,
  bottom,
  right,
  left,
}: WhyGridItemProps) => {
  return (
    <Grid
      size={6}
      sx={{
        borderTop: top ? "1px solid grey" : "",
        borderRight: right ? "1px solid grey" : "",
        borderBottom: bottom ? "1px solid grey" : "",
        borderLeft: left ? "1px solid grey" : "",
        display: "grid",
        placeItems: "center",
      }}
    >
      {/* grid item */}
      {children}
    </Grid>
  );
};

export default WhyGridItem;

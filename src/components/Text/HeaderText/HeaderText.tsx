import { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
interface HeaderTextProps {
  text: string;
  style?: SxProps<Theme>;
}
const HeaderText = ({ text, style }: HeaderTextProps) => {
  return (
    <Typography
      fontFamily={"MonumentExtended"}
      variant="h1"
      gutterBottom
      component="h1"
      sx={{ ...style }}
    >
      {text}
    </Typography>
  );
};

export default HeaderText;

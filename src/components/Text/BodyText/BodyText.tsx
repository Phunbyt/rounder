import { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
interface BodyTextProps {
  text: string;
  style?: SxProps<Theme>;
}
const BodyText = ({ text, style }: BodyTextProps) => {
  return (
    <Typography variant="body1" gutterBottom component="p" sx={{ ...style }}>
      {text}
    </Typography>
  );
};

export default BodyText;

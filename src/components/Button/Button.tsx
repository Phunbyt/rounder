import { SxProps, Theme } from "@mui/material";
import Button from "@mui/material/Button";
interface ButtonProps {
  outlined?: boolean;
  text: string;
  sx?: SxProps<Theme>;
}

const CustomButton = ({ outlined = false, text, sx }: ButtonProps) => {
  return (
    <Button
      sx={{
        ...sx,
        backgroundColor: outlined ? "transparent" : "#fff",
        color: outlined ? "#fff" : "#000",
        outlineColor: outlined ? "#fff" : "transparent",
        borderColor: outlined ? "#fff" : "transparent",
      }}
      variant={outlined ? "outlined" : "contained"}
    >
      {text}
    </Button>
  );
};

export default CustomButton;

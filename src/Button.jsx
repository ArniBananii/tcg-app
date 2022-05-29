import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function Button(props) {
  const { color, size, onClick, Icon } = props;

  return (
    <Box onClick={onClick} sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size={size ?? "small"} color={color ?? "secondary"}>
        <Icon />
      </Fab>
    </Box>
  );
}

export default Button;

/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box >
      <Typography
        variant="h2"
        fontWeight="bold"
        color={colors.gray[100]}
      >
        {title}
      </Typography>
    
    </Box>
  );
};

export default Header;

import {
  Box,
  IconButton,
  InputBase,
  Menu,
  Tooltip,
  useMediaQuery,
  useTheme,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import { tokens, ColorModeContext } from "../../../theme";
import { useContext } from "react";
import { MdOutlineLogout } from "react-icons/md";
import {
  DarkModeOutlined,
  LightModeOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { ToggledContext } from "../../../pages/main";
import { FaRegCircleUser } from "react-icons/fa6";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { toggled, setToggled } = useContext(ToggledContext);
  const isMdDevices = useMediaQuery("(max-width:768px)");
  const isXsDevices = useMediaQuery("(max-width:466px)");
  const colors = tokens(theme.palette.mode);
  const settings = ["Logout"];
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    settings?.map((element) => {
      if (element === "Logout") {
        localStorage.removeItem("email")
        localStorage.removeItem("access_token")
       setTimeout(()=>{
        navigate("/");
       },500)
      }
    });
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <IconButton
          sx={{ display: `${isMdDevices ? "flex" : "none"}` }}
          onClick={() => setToggled(!toggled)}
        >
          <MenuOutlined />
        </IconButton>
        <Box
          display="flex"
          alignItems="center"
          bgcolor={colors.primary[400]}
          borderRadius="3px"
          sx={{ display: `${isXsDevices ? "none" : "flex"}` }}
        >
          <InputBase placeholder="Search" sx={{ ml: 2, flex: 1 }} />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchOutlined />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "20px" }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>

        <IconButton onClick={handleCloseUserMenu} type="button">
          <MdOutlineLogout className="text-[#4cceac] text-2xl" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;

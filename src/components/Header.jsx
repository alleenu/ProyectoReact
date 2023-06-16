import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import "../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={"30px"} width={"50px"}/>
        Api Clima
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeclassname="active" to={"/"}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to={"/About"}>Sobre Nosotros</NavLink>
        </li>
        <li>
          <NavLink to={"/BarraDeBusqueda"}>AppClima</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contacto</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#FFFFFF;" }}>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}              
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                color={"goldenrod"}
                variant="h6"
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "16px",
                }}
              >
                <img
                  src={Logo}
                  alt="logo"
                  height={"40"}
                  width="80"
                  style={{ marginRight: "2px" }}
                />
                Api Clima
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeclassname="active" to={"/"}>
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}>Sobre Nosotros</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contacto</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
                right: 0,
              },
              "& .MuiBackdrop-root": {
                visibility: "visible", // Asegura que el fondo del Drawer sea visible
              },
            }}
          >
            {drawer}
            <IconButton
              color="black"
              aria-label="close drawer"
              edge="start"
              sx={{ position: "absolute", top: "3%", left: "7%", 
              borderRadius: "10%",
              border: "2px solid #1E4595",
              backgroundColor: "#1E4595",
              zIndex: 1,
            }}
              onClick={handleDrawerToggle}
            ><CloseIcon style={{ fontSize: "12px" }}/>
            </IconButton>
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
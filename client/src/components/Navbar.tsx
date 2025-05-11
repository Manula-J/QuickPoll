import React from "react";
import Logo from "../assets/logo.jpeg";
import { AppBar, Box, Button, Container, Typography } from "@mui/material";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const pages = ["Products", "Pricing", "Blog"];

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Box
        sx={{
          maxWidth: "x1",
          display: "flex",
          px: 3,
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 65,
            width: 60,
            display: "inline-block",
            alignItems: "center",
          }}
          alt="Logo"
          src={Logo}
        />
        <Box
          sx={{
            display: { xs: "none", sm: "inline-block" },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "inline-block", mx: 1 }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Button
          variant="text"
          color="secondary"
          sx={{
            minWidth: 100,
            maxHeight: 35,
            fontWeight: "bold",
            backgroundColor: "grey.400",
            color: "white",
            my: "auto",
            "&:hover": {
              backgroundColor: "grey.500",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </AppBar>
  );
};

export default Navbar;

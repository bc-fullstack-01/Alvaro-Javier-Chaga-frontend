import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material"


const CustomAppBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ dispaly: { xs: "none" } }} />
          <IconButton
            size="large"
            arial-label="show home"
            color="inherit"
            onClick={}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomAppBar;
import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material"
import { Navigate } from 'react-router-dom';


const CustomAppBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            >
              {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ dispaly: { xs: "none" } }} />
          <CustomIconButton
            label="show home"
            onClickCallback={() => navigate("/home")}
          >
            <HomeIcon />
          </CustomIconButton>
          <CustomIconButton
            label="show edit"
            onClickCallback={() => navigate("/create")}
            >
              <EditIcon />
              </CustomIconButton>
              <CustomIconButton
              label="show profiles"
              onClickCallback={() => Navigate("/profiles")}
              >
                <GroupIcon />
              </CustomIconButton>
              <CustomIConButton></CustomIConButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomAppBar;
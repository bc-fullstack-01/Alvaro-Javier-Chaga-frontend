import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import {
  Home as HomeIcon,
  Edit as EditIcon,
  Group as GroupIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import CustomIconButton from "../CustomiconButton";

interface Props {
  title: string;
}

const CustomAppBar = ({ title }: Props) => {
  const navigate = useNavigate();
  return (
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
        <Box sx={{ dispaly: { xs: "none", md: "flex" } }}>
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
        onClickCallback={() => navigate("/profiles")}
        >
          <GroupIcon />
        </CustomIconButton>
        <CustomIconButton 
        label="show profile" 
        onClickCallback={() => navigate("/profile")}
        >
          <AccountCircleIcon />
        </CustomIconButton>
      </Box>
      </Toolbar>
    </AppBar>

  );
};

export default CustomAppBar;
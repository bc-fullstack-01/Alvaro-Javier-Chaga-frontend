import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { AppBar, Toolbar, Typography, Box, Badge } from "@mui/material";
import {
  Home as HomeIcon,
  Edit as EditIcon,
  Group as GroupIcon,
  AccountCircle as AccountCircleIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import CustomIconButton from "../CustomiconButton";
import constants from '../../constants';

interface Props {
  title: string;
}

const CustomAppBar = ({ title }: Props) => {
  const navigate = useNavigate();
  const token = localStorage.getitem("accessToken");
  const [messageCount, setMessageCount] = useState(0);
  const [messages, setMessages] = useState([]);

  const socket = io(constants.SERVER_ADDRESS, {
    auth: { token },
  });

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket);
    });

    socket.on("connect_profile", (profile) => {
      console.log(profile);
    });

    socket.on("disconnect", () => {
      console.log(socket);
    });

    socket.on("post", (data) => {
      console.log(data);
      setMessageCount((count) => count + 1);
    });

    socket.on("post-like", (data) => {
      console.log(data);
      setMessageCount((count) => count + 1);
    });

    socket.on("comment", (data) => {
      console.log(data);
      setMessageCount((count) => count + 1);
    });

    socket.on("comment-like", (data) => {
      console.log(data);
      setMessageCount((count) => count + 1);
    });

    socket.on("connect_error", (err) => {
      console.error(err);
    });

    return () => {
      socket.off();
    };
  }, [token, socket]);

  const handleClickEmail = () => {
    if (messageCount) {
      setMessageCount(0);
      window.location.reload();
    }
  };


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
            label="notifications"
            onClickCallback={handleClickEmail}
            >
              <Badge badgeContent={messageCount} color="secondary">
                <EmailIcon />
              </Badge>
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
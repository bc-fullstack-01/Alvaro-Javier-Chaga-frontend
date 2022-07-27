import React, { useEffect, useState } from "react";
import { Typography, IconButton } from "@mui/material";
import {
    ChatBubbleOutline as ChatBubbleOutlineIcon,
    FavoriteBorder as FavoriteBorderIcon,
    Favorite as FavoriteIcon,
} from '@mui/icons-material';

interface Props {
    commentCount: number;
    likeCount: number;
    likes: string[]
}

const CustomActionIcon = ({ commentCount, likeCount, likes }: Props) => {
    const profile = localStorage.getItem("profile") as string;
    const [liked, setLiked] = useState(false);

    useEffect(() => {
       setLiked(likes.includes(profile));
    }, [profile, likes]);

    return (
        <div>
            <IconButton>
                <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>
            <Typography variant="caption" color="textSecondary">
                {commentCount}
            </Typography>
            <IconButton>
                {liked ? (
                    <FavoriteIcon fontSize="small" sx={{ bgcolor: "red" }} />
                ) : (
                    <FavoriteBorderIcon fontSize="small" />
                )}
            </IconButton>
            <Typography variant="caption" color="textSecondary">
                {likeCount}
            </Typography>
        </div>
    );
};

export default CustomActionIcon;
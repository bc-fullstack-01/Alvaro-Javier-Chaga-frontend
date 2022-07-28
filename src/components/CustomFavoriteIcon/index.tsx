import React from 'react';
import { IconButton, Typography,  } from '@mui/material';
import {
    FavoriteBorder as FavoriteBorderIcon,
    Favorite as FavoriteIcon,
} from '@mui/icons-material';

interface Props {
    handleLike: any;
    liked: boolean;
    likeCount: number;
}

const CustomFavoriteIcon = ({ handleLike, liked, likeCount }: Props) => {
    return (
    <>
    <IconButton onClick={() => handleLike()}>
    {liked ? (
        <FavoriteIcon fontSize="small" sx={{ color: "red" }} />
    ) : (
        <FavoriteBorderIcon fontSize="small" />
    )}
</IconButton>
<Typography variant="caption" color="textSecondary">
    {likeCount}
</Typography>
</>
);
};

export default CustomFavoriteIcon;
import { IconButton } from '@mui/material';
import React from 'react';

const CustomiconButton = ( => {
    return(
        <IconButton
        size="large"
        arial-label="show home"
        colosr="inherit"
        onClick={() => onCallback()}
        >
            {children}
        </IconButton>
    )
})
export default CustomiconButton;
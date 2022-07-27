import { IconButton } from '@mui/material';
import React from 'react';

interface Props {
    children: ReactElement;
    label: string;
    onClickCallback: any;
}

const CustomIconButton = ({ children, label, onClickCallback }: Props) => {
    return(
        <IconButton
        size="large"
        arial-label={label}
        colosr="inherit"
        onClick={() => onClickCallback()}
        >
            {children}
        </IconButton>
    );
};

export default CustomIconButton;
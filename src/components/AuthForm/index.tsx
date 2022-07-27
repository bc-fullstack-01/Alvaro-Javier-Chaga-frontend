import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Stack, TextField, Button } from '@mui/material';

import logo from '../../assets/logo.svg';

import "./index.css";

interface Props {
    onSubmitForm: any;
    onSubmitButtonText: string;
    onRouteText: string;
    onRouteLink: string;

}

const AuthForm = ({
    onSubmitForm,
    onSubmitButtonText,
    onRouteText,
    onRouteLink
}: Props) => {
    const [user, setUser] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitForm(user.value, password.value);
    }

    return (
        <div>
            <Container maxWidth="sm">
                <form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={6}
                    >
                        <img src={logo} alt="Logo" className="logo" />
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="strech"
                            spacing={6}
                        >
                            <TextField
                                variant="outlined"
                                label="Usuàrio"
                                name="user"
                                value={user.value}
                                onChange={(e) => setUser({ value: e.target.value, error: "" })}
                            />
                            <TextField
                                type="password"
                                variant="outlined"
                                label="Senha"
                                value={password.value}
                                onChange={(e) => setPassword({ value: e.target.value, error: "" })}
                            />
                            <Button variant="contained" type="submit">
                                {onSubmitButtonText}
                            </Button>
                        </Stack>
                        <Link to={onRouteLink}>{onRouteText}</Link>
                    </Stack>
                </form>
            </Container>
        </div>
    );
};

export default AuthForm;
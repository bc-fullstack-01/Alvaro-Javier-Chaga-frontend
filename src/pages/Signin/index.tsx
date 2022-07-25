import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import jwt_decode from "jwt-decode";
import server from '../../api/server';


import "./index.css";

import AuthForm from "../../components/AuthForm";

interface TokenUser {
    user: string;
    profile: string;
};

const Signin = () => {
    const navigate = useNavigate();


    const handleLogin = async (user: string, password: string) => {
        const response = await server.post("/security/login", {
            user,
            password,
        });

        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        const decoded = jwt_decode(accessToken) as TokenUser;
        localStorage.setItem("user", decoded.user);
        localStorage.setItem("profile", decoded.profile);
        navigate("/home");
    };

    return (
        <div>
        <AuthForm
                onSubmitForm={handleLogin}
                onSubmitButtonText="Login"
                onRouteText="Não tem  uma conta? Faça o cadastro"
                onRouteLink="register"
            />
            <Container maxWidth="sm">
                <form onSubmit={handleLogin}>
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
                                Login
                            </Button>
                        </Stack>
                        <Link to="#">Não tem  uma conta? Faça o cadastro</Link>
                    </Stack>
                </form>
            </Container>
            </div>
    );
};

export default Signin;
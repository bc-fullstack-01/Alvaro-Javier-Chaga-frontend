import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import jwt_decode from "jwt-decode";
import server from '../../api/server';

import AuthForm from "../../components/AuthForm";
interface TokenUser {
    user: string;
    profile: string;
};
const Signin = () => {
    const navigate = useNavigate();

    const handleLogin = async (user: string, password: string) => {
        try {
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
        } catch (err) {
            alert("Ocorreu um erro no login");
        }
    };
    return (
        <AuthForm
            onSubmitForm={handleLogin}
            onSubmitButtonText="Login"
            onRouteText="Não tem  uma conta? Faça o cadastro"
            onRouteLink="register"
        />
    );
};

export default Signin;
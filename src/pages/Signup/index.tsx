import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from '../../components/AuthForm';

import server from '../../api/server';

const Signup = () => {
    const navigate = useNavigate();

    const handleRegister = async (user: string, password: string) => {
        try {
          const response = await server.post('/security/register', {
            user,
            password
          });
          
          navigate("/");
        } catch(err) {
            alert("Não foi possível criar usuário");
        }
    };
    return (
        <AuthForm
            onSubmitForm={handleRegister}
            onSubmitButtonText="Cadastro"
            onRouteText="Já tem uma conta? Faça o login"
            onRouteLink="/"
        />
    );
};

export default Signup;
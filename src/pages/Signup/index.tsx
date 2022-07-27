import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from '../../components/AuthForm';

import server from '../../api/server';

const Signup = () => {
    const handleRegister = async (user: string, password: string) => {
        try {
          const response = await server.post('/security/register', {
            user,
            password
          });
          console.log(response.data);

        } catch(err) {
            console.log(err);
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
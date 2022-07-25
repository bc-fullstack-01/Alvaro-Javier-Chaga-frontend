import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from '../../components/AuthForm';

import server from '../../api/server';

const Signup = () => {
    const handleRegister = async (user: string, password: string),
    
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
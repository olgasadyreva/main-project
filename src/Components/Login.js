import React from 'react';
import styled from 'styled-components';
//import loginImg from '../images/user.svg';


const LoginStyled =  styled.button`
    padding-top: 46px;
    background-image: url(../images/user.svg);
    background-repeat: no-repeat;
    background-position: top center;
    font-size: 16px;
    line-height: 1.2;
    text-transform: uppercase;
`;

export const Login = () => (
    <LoginStyled>
        Войти
    </LoginStyled>
);
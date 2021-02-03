import React from 'react';
import styled from 'styled-components';
import logoImg from '../images/logo.svg';
import loginImg from '../images/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login =  styled.button`
    margin-right: 25px;
    padding: 40px 15px 0 15px;
    background: url(${loginImg}) no-repeat top center transparent;
    background-size: 32px 32px;
    font-size: 16px;
    line-height: 1.2;
    text-transform: uppercase;
    border: none;
    color: white;
`;



export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo" />
            <H1>MrDonald"s</H1>
        </Logo>
        <Login>Войти</Login>
    </NavBarStyled>
);
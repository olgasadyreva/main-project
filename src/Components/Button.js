import React from 'react';
import styled from 'styled-components';


const ButtonStyled = styled.button`
    background-color: rgba(41,155,1,.85);
    font-family: Roboto, sans-serif;
    font-size: 21px;
    line-height: 1;
    width: 250px;
    padding: 20px 0;
    margin-top: auto;
    margin-bottom: 43px;
    color: #fff;
    border: none;
    cursor: pointer;
    display: block;
    align-self: center;

    &:hover {
        background-color: rgba(41,155,1,1);
    }
`;


export const Button = () => (
    <ButtonStyled>Добавить</ButtonStyled>
);


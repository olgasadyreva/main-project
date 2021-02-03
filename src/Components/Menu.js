import React from 'react';
import styled from 'styled-components';
import DBMenu from './DBMenu';
import { ListItem } from './ListItem';
import bannerImg from '../images/banner.png';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const BannerStyled = styled.div`
    width: 100%;
    height: 210px;
    background: url(${bannerImg}) no-repeat 0 0;
`;



export const Menu = () => (
    <MenuStyled>
        <BannerStyled/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={ DBMenu.burger }/>
        </SectionMenu>

        <section>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={ DBMenu.other }/>
        </section>
    </MenuStyled>
);
    

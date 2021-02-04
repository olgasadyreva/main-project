import React from 'react';
import styled from 'styled-components';
import DBMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({setOpenItem}) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem 
                itemList={ DBMenu.burger }
                setOpenItem={setOpenItem}
            />
        </SectionMenu>

        <section>
            <h2>Закуски / Напитки</h2>
            <ListItem 
                itemList={ DBMenu.other }
                setOpenItem={setOpenItem}    
            />
        </section>
    </MenuStyled>
);
    

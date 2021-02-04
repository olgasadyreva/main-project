import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-item: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aligm-items: center;
    position: relative;
    background-color: #fff;
    width: 600px;
    height: 600px;
    
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;

`;

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
    font-family: Pacifico;
    font-size: 30px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if(!openItem) return null;
    return (
        <Overlay id="overlay" onClick={closeModal}>
        
            <Modal>
                <Banner img={openItem.img}/>
                <WrapperStyled>
                {openItem.name}
                <p>{openItem.price.toLocaleString('ru-RU',
                {style: 'currency', currency: 'RUB'})}</p>
                </WrapperStyled>
                <Button/>
            </Modal>

        </Overlay>
    )
};

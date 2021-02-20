import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { useTitle } from '../Hooks/useTitle';


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
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    padding: 30px;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 30px;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Pacifico', cursive;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

//export const totalPriceItems = order => order.price * order.count;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
        //saveCount: order.count,
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    };

    const addToOrder = (authentication) => {
        if(authentication) {
            //alert(authentication);
           // useTitle(order.name);
            const count = order.count;
            setOrders([...orders, order]);
            setOpenItem(null);
            return count;
        }
        else {
            //logIn();
        }
        
    }

    

    return (
        <Overlay id="overlay" onClick={closeModal}>

            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{formatCurrency(openItem.price)}</div>
                    </HeaderContent>
                    <CountItem {...counter }/>
                    { openItem.toppings && <Toppings { ...toppings }/> }
                    { openItem.choices && <Choices { ...choices } openItem={openItem}/> }
                    <TotalPriceItem>
                        <span>Цена</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <Button onClick={ isEdit ? editOrder : addToOrder }
                        disabled={order.choices && !order.choice}
                        >{isEdit ? 'Редактировать' : 'Добавить'}</Button>
                </Content>
            </Modal>

        </Overlay>
    )
};

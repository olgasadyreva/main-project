import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { projection } from '../Functions/secondaryFunction';
import 'firebase/auth';

const OrderStyled = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    width: 340px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0,0,0,.25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr  => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item  => item ? item : 'no choices'],
};



export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, firebaseDatabase }) => {
    const dataBase = firebaseDatabase();
   

    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));
        dataBase.ref('orders').push().set({
            nameClient: authentication.displayName,
            email: authentication.email,
            order: newOrder
        });
        setOrders([]);
    }

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        //второй вариант 
        /* const newOrders = orders.filter((item, i) =>
            index !== i); */

        setOrders(newOrders);
    };

    const total = orders.reduce((result, order)=>
        totalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order)=>
        order.count + result, 0);


    return(
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                {orders.length ?
                <OrderList>
                    {orders.map((order, index) => <OrderListItem
                        key={index}
                        order={order}
                        deleteItem={deleteItem}
                        index={index}
                        setOpenItem={setOpenItem}
                    />)}
                </OrderList> :
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>Итого:</span>
                <span>{ totalCounter }</span>
                <TotalPrice>{ formatCurrency(total) }</TotalPrice>
            </Total>
            <Button onClick={() => {
                if (authentication) {
                    sendOrder();
                    //const emptyOrder = [];
                    
                } else {
                    logIn();
                }
            }}>Оформить</Button>
        </OrderStyled>
    )
};

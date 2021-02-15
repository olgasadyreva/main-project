import React from 'react';
import styled from 'styled-components';
import trashImg from '../../images/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';


const OrderItemStyled = styled.li`
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;

`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const ToppingsStyled = styled.div`
    font-size: 14px;
    color: #9A9A9A;
    width: 100%;
`;



export const OrderListItem = ({ order, orders }) => {
    console.dir(orders);
    const deleteItem = ({ order, orders}) => {
        //let allOrders = {...orders};
       
        console.dir(orders);
        //return allOrders = allOrders.filter(item => item.id !== order.id);
    };

    /* const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');  решение преподавателя*/
    const choiceToppings = order.topping.filter(item => item.checked);
    const toppingsList = choiceToppings.map(item => item.name).join(', ');

    
    
    

    return (
            <OrderItemStyled>
                <ItemName>{order.name} {order.choice}</ItemName>
                <span>{order.count}</span>
                <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
                <TrashButton onClick={() => {deleteItem(order)}} />
                { toppingsList && <ToppingsStyled>Допы: { toppingsList }</ToppingsStyled>}
            </OrderItemStyled>
    )
};





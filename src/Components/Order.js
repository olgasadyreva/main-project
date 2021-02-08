import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { OrderListItem } from './OrderListItem';

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




export const Order = () => {
    return(
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem/>
                    <OrderListItem/>
                    <OrderListItem/>
                </OrderList>
            </OrderContent>
            <Total>
                <span>Итого:</span>
                <TotalPrice>5800 руб</TotalPrice>
            </Total>
            <Button>Оформить</Button>
        </OrderStyled>
    )
};

export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = price => price.toLocaleString('ru-Ru',
{ style: 'currency', currency: 'RUB'});
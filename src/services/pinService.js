/**
 * getOrders()
 * updateStatusOrder()
 */

export const updateStateOrder = async (orderId, state) => {
    const orders = await getOrders();

    const orderIndex = orders.findIndex(order => order.id === orderId)

    if(orderIndex !== -1) {
        const order = orders[orderIndex]

        order.state = state;
    }

    return orders[orderIndex]
}

export const getOrders = async () => {
    return [
        {
            id: '1',
            chatId: '12349',
            name: 'Josebe Barbosa',
            price: 'R$ 33,45',
            typePayment: 'cartão de crédito',
            phone: '(92) 99186-8926',
            state: 'wait',
            created: '2024-04-25 15:11:05',
        },
        {
            id: '2',
            chatId: '123669',
            name: 'Gabriel Enrique',
            price: 'R$ 63,45',
            typePayment: 'cartão de debito',
            phone: '(92) 99186-8926',
            state: 'wait',
            created: '2024-04-25 15:11:05',
        },
        {
            id: '3',
            chatId: '12349',
            name: 'Daniel Bastos',
            price: 'R$ 103,45',
            typePayment: 'dinheiro',
            phone: '(92) 99186-8926',
            state: 'preparation',
            created: '2024-04-25 15:11:05',
        },
        {
            id: '4',
            chatId: '12349',
            name: 'Anderson Nogueira',
            price: 'R$ 83,45',
            typePayment: 'cartão de crédito',
            phone: '(92) 99186-8926',
            state: 'delivery',
            created: '2024-04-25 15:11:05',
        },
        {
            id: '5',
            chatId: '12349',
            name: 'Luiz Kennedy',
            price: 'R$ 123,65',
            typePayment: 'cartão de crédito',
            phone: '(92) 99186-8926',
            state: 'delivery',
            created: '2024-04-25 15:11:05',
        },
        {
            id: '6',
            chatId: '12349',
            name: 'Leticia Silva',
            price: 'R$ 33,45',
            typePayment: 'cartão de crédito',
            phone: '(92) 99186-8926',
            state: 'preparation',
            created: '2024-04-25 15:11:05',
        },
        {
            id: '7',
            chatId: '12349',
            name: 'Patricia Kelen',
            price: 'R$ 33,45',
            typePayment: 'cartão de crédito',
            phone: '(92) 99186-8926',
            state: 'delivery',
            created: '2024-04-25 15:11:05',
        },
    ]
}

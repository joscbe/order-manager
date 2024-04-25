import { useEffect } from "react";
import { useAppContext } from "../../store/AppContext"
import { fetchOrdersAction, updateStateOrderAction } from "../../store/actions";


export const usePedidosPage = () => {
    const {state, dispatch} = useAppContext();

    const getOrders = async () => {
        await fetchOrdersAction(dispatch);
    }

    useEffect(() => {
        getOrders();
    },[]);

    const states = {
        "wait": 'preparation',
        "preparation": 'delivery',
        "delivery": 'done'
    }

    const handleClickOrder = async (order) => {
        console.log(order);
        const orderState = states[order.state]

        updateStateOrderAction(order.id, orderState, dispatch)
    }

    return {
        state,
        handleClickOrder
    }
}
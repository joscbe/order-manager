import * as types from './types'
import * as pinService from '../services/pinService'

const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time);
    })
);

const fetchOrdersInit = () => ({
    type: types.FETCH_ORDERS_INIT
})

const fetchOrdersSuccess = (orders) => ({
    type: types.FETCH_ORDERS_SUCCESS,
    payload: orders
})

export const fetchOrdersAction = async (dispatch) => {
    dispatch(fetchOrdersInit());
    const orders = await pinService.getOrders();
    dispatch(fetchOrdersSuccess(orders));
}

const updateOderInit = () => ({
    type: types.UPDATE_ORDER_INIT
})

const updateOrderSuccess = (order) => ({
    type: types.UPDATE_ORDER_SUCCESS,
    payload: order
})

export const updateStateOrderAction = async (orderId, state, dispatch) => {
    dispatch(updateOderInit());
    sleep(3);
    const order = await pinService.updateStateOrder(orderId, state);
    dispatch(updateOrderSuccess(order));
}
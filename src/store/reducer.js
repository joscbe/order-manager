import * as types from './types'

export const reducer = (state, action) => {
    switch (action.type) {
        case types.FETCH_ORDERS_INIT:
            return {
                ...state,
                type: action.type
            }
        case types.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                type: action.type,
                orders: action.payload
            }
        case types.UPDATE_ORDER_INIT:
            return {
                ...state,
                type: action.type,
            }
        case types.UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                type: action.type,
                orders: state.orders.map(order => order.id === action.payload.id ? action.payload : order)
            }
        default:
            return {
                ...state,
                type: action.type
            }
    }
}
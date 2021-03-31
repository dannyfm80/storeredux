import {ActionTypes} from '../constants/actions-types'

export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
};
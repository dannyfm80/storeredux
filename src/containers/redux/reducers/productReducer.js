import { ActionsTypes } from "../constants/actions-types";

const initialState = {
    products:[{
        id: 1,
        title: "Danny",
        category: "Developer"
    }]
}

export const productReducer = (state, {type,payload}) => {
    switch (type) {
        case ActionsTypes.SET_PRODUCTS:
            return state
        default:
            return state;
    }
}
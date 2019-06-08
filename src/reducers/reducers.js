import { combineReducers } from 'redux';

const initialState = {
    orders: [],
    products: {
        ids: [100000,100001,100002,100003,100004,100005,100006,100007],
        relatedInfo: [{
            product_name: 'Stockholm dining table',
            qty: 8,
            unit_price: 529,
        },{
            product_name: 'Table lamp',
            qty: 5,
            unit_price: 399,
        },{
            product_name: 'Coffee table',
            qty: 10,
            unit_price: 599.99,
        },{
            product_name: 'Bean bag',
            qty: 20,
            unit_price: 299.35,
        },{
            product_name: 'Book shelf',
            qty: 5,
            unit_price: 499,
        },{
            product_name: 'Book case',
            qty: 4,
            unit_price: 289,
        },{
            product_name: 'Cupboard',
            qty: 3,
            unit_price: 267,
        },{
            product_name: 'Sofa',
            qty: 10,
            unit_price: 330,
        }]
    },
}

const products = (state = initialState.products) => {
    return state;
}

const orders = (state = initialState.orders,action)=>{
    console.log(action.newOrder);
    switch(action.type){
        case 'ADD_ORDER': 
            return [
                ...state,
                action.newOrder
            ];
        default: 
            return state;
    }
}

export default combineReducers({
    products: products,
    orders,
});

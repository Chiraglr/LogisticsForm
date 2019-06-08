export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (newOrder)=>{
    return {
    type: ADD_ORDER,
    newOrder,
    }
};
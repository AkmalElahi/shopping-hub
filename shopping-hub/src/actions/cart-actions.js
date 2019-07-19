import { ADD_TO_CART, REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './actions-types'


//add cart action
export const addToCart= (id)=>{
    return (dispatch,getState)=>{
        const state = getState();
        dispatch({
            type:ADD_TO_CART,id,state
        })
    }
    }

//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

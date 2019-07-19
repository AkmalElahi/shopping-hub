import {FETCH_PRODUCTS_ERROR,FETCH_PRODUCTS_PENDING,FETCH_PRODUCTS_SUCCESS,ADD_TO_CART}  from '../actions/actions-types';


const initialState ={
    pending:false,
    products:[],
    error:null,
}

export function productReducer(state=initialState,action){
    switch(action.type){
        case FETCH_PRODUCTS_PENDING:
            return{
                ...state,
                pending:true
            }
        case FETCH_PRODUCTS_SUCCESS:
            console.log("in product reducer")
            console.log(state.products)
            if(state.products.length>0){
                console.log("returning")
                return
            }
            return Object.assign({},state,{
                products:action.payload,
                pending:false
            })
            case FETCH_PRODUCTS_ERROR:
                   return Object.assign({},state,{
                        error:true,
                        pending:false
                    })
                default:
                    return state;


    }
}





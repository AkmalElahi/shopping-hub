import {combineReducers }  from 'redux'
import { productReducer} from './products-reducer';
import { addToCartReducer } from './cart-reducers';
const rootReducer =combineReducers({
    data:productReducer,
    addedItems:addToCartReducer
})

// const rootReducer =(state={},action)=>{
//     return {
//         data: productReducer(state,action),
//         addeItem:addToCartReducer(state.data,action)
//     }
// }
export default rootReducer
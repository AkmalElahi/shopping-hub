import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from '../actions/actions-types';
const initialState = {
    addedItems: [],
    total: 0
}

export function addToCartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            //let selected_item = state.addedItems.find(item=>item.id===action.id)
            // console.log("in add")

            // console.log(action.state.addedItems)
            // console.log(state.addedItems)
            // console.log(action.id)
            let addedItem = action.state.data.products.find(product => product._id === action.id)
            let existed_item = state.addedItems.find(item => item._id === action.id)
            console.log(existed_item)
            if (existed_item) {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            }
            else {
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.price

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }

            }
        case REMOVE_ITEM:
            console.log("in remove")
            console.log(state.addedItems)
            let itemToRemove = state.addedItems.find(item => action.id === item._id)
            let new_items = state.addedItems.filter(item => action.id !== item._id)

            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            console.log(itemToRemove)
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        case ADD_QUANTITY:
            let addedItem_qty = state.items.find(item => item._id === action.id)
            addedItem_qty.quantity += 1
            let newTotal_qty = state.total + addedItem_qty.price
            return {
                ...state,
                total: newTotal_qty
            }
        case SUB_QUANTITY:
            let subItem = state.items.find(item => item._id === action.id)
            //if the qt == 0 then it should be removed
            if (subItem.quantity === 1) {
                let new_items = state.addedItems.filter(item => item.id !== action.id)
                let newTotal = state.total - subItem.price
                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else {
                subItem.quantity -= 1
                let newTotal = state.total - subItem.price
                return {
                    ...state,
                    total: newTotal
                }
            }

        default:
            return Object.assign({}, state)
    }
}


import { FETCH_PRODUCTS_ERROR,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_PENDING } from './actions-types';


export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}

import {fetchProductsPending,fetchProductsSuccess,fetchProductsError}from './index'


//const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://localhost:3000/items/"; 

export function fetchProducts(){
    return (dispatch, getState)=>{
        dispatch(fetchProductsPending())
        fetch(url)
        .then(response=>response.json())
        .then(response=> {
            if(response.error){
                throw(response.error)
            }
            
            dispatch(fetchProductsSuccess(response));
            console.log("in fetch")
            console.log(getState())
            //console.log("in action")
            //console.log(response.map(res=>res))
            return response
        }).catch(error=>{
            dispatch(fetchProductsError(error))
        })
    }
}


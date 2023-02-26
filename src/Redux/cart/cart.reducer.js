import { CART_UPDATE } from "./cart.types"

const initialState={
    cartStatus:false
}

export default function cartReducer(state=initialState,{type,payload}){

    switch(type){
        case CART_UPDATE:{
            return {...state,cartStatus:!state.cartStatus}
        }
        

        default:{
            return state
        }
    }

}
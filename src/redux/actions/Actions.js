export const DECREASE = "DECREASE"
export const INCREASE = "INCREASE"
export const RESET = "RESET"


export function increasingQuantity(){
    return{
        type:INCREASE
    }
}
export function decreasingQuantity(){
    return{
        type:DECREASE
    }
}
export function reset(){
    return{
        type:RESET
    }
}
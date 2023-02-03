import { DECREASE, INCREASE, RESET } from "../actions/Actions";
const intialState = {
    count:0
} 
const counterReducer = (state = intialState, action) => {
    switch (action.type) {
      case INCREASE:
        return {...state,count:state.count+1};
      case DECREASE:
        return {...state,count:state.count-1};
      case RESET:
        return {...state,count:0};
      default:
        return state;
    }
  };
  export default counterReducer;
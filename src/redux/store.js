import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware } from 'redux';
import counterReducer from './reducer/Reducer';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';


 const middleware = applyMiddleware(thunk,logger)


const store = createStore(counterReducer,composeWithDevTools(middleware))
export default store;
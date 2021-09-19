import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import countryReducer from './countryReducer';
import notificationReducer from './notificationReducer';

const createRootReducer = (history) => combineReducers({
    countries: countryReducer,
    notification: notificationReducer,
    router: connectRouter(history)
})

export default createRootReducer
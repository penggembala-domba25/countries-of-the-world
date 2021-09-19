import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            )
        )
    )

    return store
}
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';

// import countryReducer from './reducers/countryReducer';
// import notificationReducer from './reducers/notificationReducer';

// const reducers = combineReducers({
//     countries: countryReducer,
//     notification: notificationReducer
// })

// const store = createStore(
//     reducers,
//     composeWithDevTools(
//         applyMiddleware(thunk)
//     )
// )

// export default store
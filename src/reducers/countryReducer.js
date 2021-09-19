import serviceCountries from '../services/countries'
import { addNotification, remNotification } from './notificationReducer'

const reducer = (state = null, action) => {
    switch (action.type) {
        case 'INIT_COUNTRIES':
            return action.data.initCountries

        case 'SEARCH_COUNTRY':
            return action.data.country

        default:
            return state;
    }
}

export const initializeCountries = () => {
    return async dispatch => {
        const requestInitCountries = await serviceCountries.getAllCountries()

        dispatch({
            type: 'INIT_COUNTRIES',
            data: {
                initCountries: requestInitCountries
            }
        })

        if (requestInitCountries) {
            dispatch(addNotification({
                message: 'welcome guest!',
                variant: 'success'
            }))

            setTimeout(() => {
                dispatch(remNotification())
            }, 3000)
        }
    }
}

export const searchCountry = (nameCountry) => {
    return async dispatch => {
        const requestSearchCountry = await serviceCountries.getSingleCountry(nameCountry)

        dispatch({
            type: 'SEARCH_COUNTRY',
            data: {
                country: requestSearchCountry || null
            }
        })

        if (!requestSearchCountry) {
            dispatch(addNotification({
                message: 'country not found',
                variant: 'danger'
            }))

            setTimeout(() => {
                dispatch(remNotification())
            }, 3000)
        }
    }
}

export default reducer
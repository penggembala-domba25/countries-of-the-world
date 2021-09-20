let timeoutID

const reducer = (state = { message: null, variant: null }, action) => {
    switch (action.type) {
        case 'ADD_NOTIF':
            return action.data.newNotification

        case 'REMOVE_NOTIF':
            return action.data

        default:
            return state
    }
}

export const addNotification = (notification) => {
    clearTimeout(timeoutID)

    return dispatch => {
        dispatch({
            type: 'ADD_NOTIF',
            data: {
                newNotification: notification
            }
        })
    }
}

export const remNotification = () => {
    return dispatch => {
        dispatch({
            type: 'REMOVE_NOTIF',
            data: { message: null, variant: null }
        })
    }
}

export default reducer
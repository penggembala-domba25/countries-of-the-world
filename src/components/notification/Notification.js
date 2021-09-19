import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'

class Notification extends Component {
    render() {
        const { variant, message } = this.props.notification

        if(message && variant) {
            return (
                <Alert variant={variant}>
                    { message }
                </Alert>
            )
        }

        return null
    }
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
}

const connectedNotification = connect(mapStateToProps)(Notification)

export default connectedNotification
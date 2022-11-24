import React from 'react'
import PropTypes from 'prop-types'
import Contact from './../../models/contact.model';

import '../../styles/contact.scss'

const ContactComponent = ({ index, contact, actions }) => {
    const { changeConnected, remove } = actions
    return (
        <div className='Contact'>
            <div className='content'>
                <h3>{ contact.lastName }, { contact.firstName }</h3>
                <p>{ contact.email }</p>
                <p>{ contact.connected ? 'Online' : 'Offline' }</p>
            </div>
            <div className='actions'>
                <button onClick={() => changeConnected(index)}>{ contact.connected ? 'Connect' : 'Disconnect' }</button>
                <button onClick={() => remove(index)}>Remove</button>
            </div>

        </div>
    )
}

ContactComponent.propTypes = {
    index: PropTypes.number.isRequired,
    contact: PropTypes.instanceOf(Contact).isRequired,
    actions: PropTypes.exact({
        changeConnected: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired
    }).isRequired
}

export default ContactComponent

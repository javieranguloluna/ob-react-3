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
                <p>
                    { contact.email }
                    <div className={ `connected ${contact.connected ? 'success' : 'danger'}` }></div>
                </p>
                
            </div>
            <div className='actions'>
                <button onClick={() => changeConnected(index)} className={ contact.connected ? 'warn' : 'success' }>{ contact.connected ? 'Disconnect' : 'Connect' }</button>
                <button onClick={() => remove(index)} className="danger">Remove</button>
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

import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import Contact from '../../../models/contact.model';

import '../../../styles/contactForm.scss'

const ContactForm = ({ add }) => {
    const firstName = useRef('')
    const lastName = useRef('')
    const email = useRef('')

    const addNewContact = e => {
        e.preventDefault();
        add(new Contact(
            firstName.current.value,
            lastName.current.value,
            email.current.value
        ))
        firstName.current.value = ''
        lastName.current.value = ''
        email.current.value = ''
    }
    return (
        <form onSubmit={addNewContact} className="ContactForm">
            <label htmlFor="firstName">First Name</label>
            <input ref={firstName} id="firstName" type="text" required autoFocus />
            <label htmlFor="lastName">Last Name</label>
            <input ref={lastName} id="lastName" type="text" required />
            <label htmlFor="email">Email</label>
            <input ref={email} id="email" type="email" required />
            <button type='submit' className="success">Add</button>
        </form>
    )
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm

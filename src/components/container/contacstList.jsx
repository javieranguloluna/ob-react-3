import React, { useState } from 'react'
import ContactComponent from '../pure/contact'
import ContactForm from '../pure/forms/contactForm'
import Contact from './../../models/contact.model';

import '../../styles/contactsList.scss'

const ContactsList = () => {
    const defaultContacts = [
        new Contact('Pepe', 'Lopez', 'pepe.lopez@gmail.com'),
        new Contact('María', 'García', 'maria.garcia@gmail.com'),
        new Contact('Tony', 'Smith', 'tony.smith@gmail.com'),
    ]
    const [contacts, setContacts] = useState(defaultContacts)
    const actions = {
        remove: (index) => {
            setContacts(contacts.reduce((a,c,i) => {
                if (i !== index) a.push(c)
                return a
            }, []))
        },
        changeConnected: (index) => {
            setContacts(contacts.map((contact, i) => {
                if (i === index) contact.connected = !contact.connected
                return contact
            }))
        }
    }

    const addContact = (newContact) => setContacts([...contacts, newContact])

    return (
        <div className='ContactsList'>
            <div>
            {
                contacts.map((contact, index) => (
                    <ContactComponent
                        key={index}
                        index={index}
                        contact={contact}
                        actions={actions}
                    ></ContactComponent>
                ))
            }
            </div>
            <div>
                <ContactForm add={addContact}></ContactForm>
            </div>
        </div>
    )
}

export default ContactsList

import React, { Component } from "react";
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter'
import initialContacts from './initialContacts.json';
import { nanoid } from 'nanoid';


class Phonebook extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  }

  addContact = data => {
    const contactId = nanoid();
    const { contacts, name, number } = data;

    const contact = {
      id: contactId,
      name: name,
      number: number,
    };

    // contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase()).length > 0
    //   ? alert(`${name} is already in contacts.`)
    //   : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    // якщо додати новий контакт а потім ще раз то не шукає
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();
    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />     
        <h2>Contacts</h2>  
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} />
      </div>
    )
  }
}

export default Phonebook;
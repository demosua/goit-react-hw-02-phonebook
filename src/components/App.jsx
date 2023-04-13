import React, { Component } from "react";
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import Filter from './Filter'
import initialContacts from './initialContacts.json';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  }

  addContact = data => {
    const contactId = nanoid();
    const { contacts } = this.state

    const contact = {
      id: contactId,
      name: data.name,
      number: data.number,
    };

   contacts.filter(contact => contact.name.toLowerCase() === data.name.toLowerCase()).length > 0
      ? alert(`${data.name} is already in contacts.`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({contacts: this.state.contacts.filter(contact => contact.id !== contactId)}))
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
        <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </div>
    )
  }
}

export default App;
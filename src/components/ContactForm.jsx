import React, { Component } from "react";
import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
  contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '', filter: '' });
  };

  render() {
    const nameInputId = nanoid();
    const numberInputId = nanoid();

    return (
    <>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor ={nameInputId}>
          Name
        </label>
          <input
            type="text"
            name="name"
            id={nameInputId}
            value={this.state.name}
            onChange = {this.handleChange}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        <label htmlFor ={numberInputId}>
          Number
        </label>
          <input
            type="tel"
            name="number"
            id={numberInputId}
            value={this.state.number}
            onChange = {this.handleChange}
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit">Add contact</button>
      </form>
    </>
  )
  }
};
  
export default ContactForm;

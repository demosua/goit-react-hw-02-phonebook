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
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const nameId = nanoid();
    // const name = this.state.name;
    this.props.onSubmit(this.state);
    // this.state.contacts.push({ id:nameId, name })
    this.setState({name: ''});
  };

  render() {
    const nameInputId = nanoid();

    return (
    <>
      <form  onSubmit={this.handleSubmit}>
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
          <button type="submit">Add contact</button>
      </form>
    </>
  )
  }
};
  
export default ContactForm;

import React, { Component } from "react";
import ContactForm from './ContactForm';
// import ContactList from './ContactList';


class Phonebook extends Component {
  state = {
    contacts: [],
    name: ''
  }

  formSubmitHandler = data => {
    console.log(data);
  }



  render() {
    // const { contacts, name } = this.state;
    // const nameInputId = nanoid();

    return(
      <div>
        <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler}/>     
        {/* <ContactList contacts={contacts} /> */}
      </div>
    )
  }
}

export default Phonebook;
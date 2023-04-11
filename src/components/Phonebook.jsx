import React, { Component } from "react";
import Name from './Name';
import { nanoid } from "nanoid";

class Phonebook extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    
  };


  render(){
    const nameId = nanoid();

    return(
      <>
      <form onSubmit={this.handleSubmit}>
          <Name id={nameId} onNameEnter={this.handleChange}/>
          <button type="submit">Add contact</button>
      </form>
      </>
    )
  }
}

export default Phonebook;
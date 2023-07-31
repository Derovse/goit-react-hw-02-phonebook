import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="tel"
          name="number"
          pattern="\\+?\\d{1,4}[-.\\s]?\\(\\d{1,3}\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={this.handleInputChange}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;

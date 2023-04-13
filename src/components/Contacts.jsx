import ContactItem from "./ContactItem";
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
       <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactItem id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
          ))}
        </ul>
  )
};
  
export default Contacts;

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
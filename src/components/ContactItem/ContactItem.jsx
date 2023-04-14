import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <li key={id}>{name}: {number} <button onClick={() => onDeleteContact(id)}>delete</button></li>
    </>
  )
};
  
export default ContactItem;


ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
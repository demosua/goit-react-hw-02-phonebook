
const ContactList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
       <ul>
          {contacts.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
    </>
  )
};
  
export default ContactList;
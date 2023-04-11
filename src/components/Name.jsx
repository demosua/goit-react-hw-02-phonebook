const Name = ({id}) => {
  return (
    <>
      <label htmlFor ={id}>
        Name
      </label>
        <input
          type="text"
          name="name"
          id={id}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
    </>
  )
};
  
export default Name;

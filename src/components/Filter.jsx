import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();
  return (
    <>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" value={value} onChange={onChange} />
    </>
  )
};
  
export default Filter;

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};
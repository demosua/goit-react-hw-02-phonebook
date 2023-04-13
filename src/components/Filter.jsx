import React from "react";
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
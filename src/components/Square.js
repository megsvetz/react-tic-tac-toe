import React from "react";

const Square = ({ value, id, onClick }) => (
  <button className="square pickle" key={id} onClick={onClick}>
    {value}
  </button>
);

export default Square;

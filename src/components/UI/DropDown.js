import React from "react";
import "./dropDown.css";

function DropDown(props) {
  return (
    <>
      <label htmlFor="category_input">Category</label>
      <select
        defaultValue="food"
        name="category_input"
        id="category_input"
        onChange={props.onChange}
      >
        <option value="electronics">Electronics</option>
        <option value="food">Food</option>
        <option value="beauty">Beauty Products</option>
      </select>
    </>
  );
}

export default DropDown;

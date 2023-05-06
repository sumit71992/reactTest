import React from 'react';
import './productList.css';
import Button from './UI/Button';

function ProductList(props) {
const clickHandler = ()=>{
  localStorage.removeItem(props.id);
  props.onChange(localStorage.length);
}
  return (
    <li>
        {props.price} - {props.category} - {props.name} <Button type="submit" button="Delete Product" onClick={clickHandler} />
    </li>
  )
}

export default ProductList
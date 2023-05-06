import React, { useState } from "react";
import "./admin.css";
import Input from "./UI/Input";
import DropDown from "./UI/DropDown";
import Button from "./UI/Button";
import Category from "./Category";

function Admin() {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("food");
  const [len, setLen] = useState(0);

  const idChangeHandler = (e) => {
    setId(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let obj = {
      id: id,
      productName: name,
      productPrice: price,
      productCategory: category,
    };
    localStorage.setItem(obj.id, JSON.stringify(obj));
    setLen(localStorage.length);
  };
  return (
    <div className="admin">
      <form className="form-section" onSubmit={submitHandler}>
        <Input
          label="Id"
          id="id"
          type="text"
          value={id}
          onChange={idChangeHandler}
        />
        <Input
          label="Price"
          id="price"
          type="number"
          value={price}
          onChange={priceChangeHandler}
        />
        <Input
          label="Product Name"
          id="name"
          type="text"
          value={name}
          onChange={nameChangeHandler}
        />
        <DropDown onChange={categoryChangeHandler} />
        <Button type="submit" button="Add Product" />
      </form>
      <Category onSubmit={len} />
    </div>
  );
}

export default Admin;

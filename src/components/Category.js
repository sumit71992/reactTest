import React, { useEffect, useState } from "react";
import "./category.css";
import ProductList from "./ProductList";

function Category(props) {
  const [electronics, setElectronics] = useState([]);
  const [food, setFood] = useState([]);
  const [beauty, setBeauty] = useState([]);
  const [change, setChange] = useState(0)

  const changeHandler = (num) => {
    setChange(num);
  };
  useEffect(() => {
    const values = [];
    let keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    values.map((el) => {
      if (el.productCategory === "food") {
        setFood((prevFood) => {
          return [el, ...prevFood];
        });
      }
      if (el.productCategory === "electronics") {
        setElectronics((prevElectronics) => {
          return [el, ...prevElectronics];
        });
      }
      if (el.productCategory === "beauty") {
        setBeauty((prevBeauty) => {
          return [el, ...prevBeauty];
        });
      }
    });

    return () => {
      setBeauty([]);
      setElectronics([]);
      setFood([]);
    };
  }, [props.onSubmit, change]);

  return (
    <div>
      <h3>Electronic Products</h3>
      {electronics.map((el) => {
        return (
          <ProductList
            key={el.id}
            name={el.productName[0].toUpperCase() + el.productName.slice(1)}
            price={el.productPrice}
            category={el.productCategory[0].toUpperCase() + el.productCategory.slice(1)}
            id={el.id}
            onChange={changeHandler}
          />
        );
      })}
      <h3>Food Products</h3>
      {food.map((el) => {
        return (
          <ProductList
            key={el.id}
            name={el.productName[0].toUpperCase() + el.productName.slice(1)}
            price={el.productPrice}
            category={el.productCategory[0].toUpperCase() + el.productCategory.slice(1)}
            id={el.id}
            onChange={changeHandler}
          />
        );
      })}
      <h3>Beauty Products</h3>
      {beauty.map((el) => {
        return (
          <ProductList
            key={el.id}
            name={el.productName[0].toUpperCase() + el.productName.slice(1)}
            price={el.productPrice}
            category={el.productCategory[0].toUpperCase() + el.productCategory.slice(1)}
            id={el.id}
            onChange={changeHandler}
          />
        );
      })}
    </div>
  );
}

export default Category;

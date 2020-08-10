import React from "react";

export default function Order() {
  const products = JSON.parse(localStorage.getItem("items"));
  let totalPrice = 0;
  products.map((item) => {
    totalPrice += item.items[0].price;
  });
  return (
    <div className="container-order">
      <div className="id">Order # {products[0].id}</div>
      <div className="items">
        {products.map((item, index) => {
          return <p key={index}>-{item.items[0].name}</p>;
        })}
      </div>
      <div className="total">
        {totalPrice.toFixed(1)}
        {products[0].currency}
      </div>
      <div className="payment">{products[0].status}</div>
    </div>
  );
}

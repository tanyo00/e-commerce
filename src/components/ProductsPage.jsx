import React from "react";
import Card from "./Card";

export default function ProductsPage() {
  let prod = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      <div className="container-cards">
        {prod.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
}

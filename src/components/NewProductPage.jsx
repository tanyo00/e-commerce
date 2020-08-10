import React from "react";
import { useHistory } from "react-router-dom";

export default function NewProductPage() {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [image, setImage] = React.useState("");
  class Product {
    constructor(name, price, image) {
      this.name = name;
      this.price = price;
      this.image = image;
    }
  }
  let history = useHistory();
  const addProduct = (e) => {
    e.preventDefault();
    let item = new Product(name, price, image);
    let arrData = [];
    JSON.parse(localStorage.getItem("data")).map((item) => {
      arrData.push(item);
    });
    arrData.push(item);
    localStorage.setItem("data", JSON.stringify(arrData));
    history.push("/");
  };

  return (
    <>
      <div className="container">
        <div className="add-product-title">
          <p className="text">New Product</p>
        </div>
        <div>
          <input
            className="product-name"
            placeholder="Product name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            className="price"
            placeholder="Price"
            onChange={(e) => {
              setPrice(parseInt(e.target.value));
            }}
          />
        </div>
        <input
          className="image"
          placeholder="Image Url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />

        <button className="save" onClick={addProduct}>
          Save
        </button>
      </div>
    </>
  );
}

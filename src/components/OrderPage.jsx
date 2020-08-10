import React from "react";

import Order from "./Order";
export default function OrderPage() {
  return (
    <>
      <div className="add-product-title">
        <p className="text">My Orders</p>
      </div>
      <Order />
    </>
  );
}

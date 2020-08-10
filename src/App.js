import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import OrderPage from "./components/OrderPage";
import AddProduct from "./components/NewProductPage";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={ProductsPage} />
            <Route path="/my-orders" component={OrderPage} />
            <Route path="/add-product" component={AddProduct} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

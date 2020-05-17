import React from "react";
import "./App.css";
import { BillingForm, ShippingForm } from "./components/billingForm";
import ProductsCart from "./components/productsCart";
import Products from "./components/products";

export class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <BillingForm>Billing Address</BillingForm>
          <ShippingForm>Shipping Address</ShippingForm>
        </div>
        {/* <ProductsCart /> */}
        <Products/>
      </>
    );
  }
}

export default App;

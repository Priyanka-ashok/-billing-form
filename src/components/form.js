import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { form } from "./data/data";
import { Address } from "./billingForm";
import Products from "./products";
import "./billingForm.scss";

export const Form = () => {
  const [defaultShippingAddress, setDefaultStateShipping] = useState(
    form.shippingdata
  );
  const [defaultBillingAddress, setDefaultStateBilling] = useState(
    form.billingdata
  );
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState("");
  const [json, setFinalJson] = useState(form);

  const handleChange = (foo, value, type) => {
    type === "billingAddress" &&
      setDefaultStateBilling(prevState => {
        let defaultBillingAddress = Object.assign({}, prevState);
        defaultBillingAddress[foo] = value;
        return defaultBillingAddress;
      });
    type === "shippingAddress" &&
      setDefaultStateShipping(prevState => {
        let defaultBillingAddress = Object.assign({}, prevState);
        defaultBillingAddress[foo] = value;
        return defaultBillingAddress;
      });
    setFinalJson({
      billingAddress: defaultBillingAddress,
      shippingAddress: defaultShippingAddress
    });
  };
  const handleSave = () => {
    console.log("Updated JSON", json);
  };

  return (
    <>
      <div className="main">
        <div className="main__container">
          <Address address={defaultBillingAddress} handleChange={handleChange}>
            Billing Address
          </Address>
          <div className="date_container">
            <h4 className="title">Order Date</h4>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              className="date"
            />
            <i class="fa fa-calendar" id="calender-icon"></i>
          </div>
        </div>

        <div className="main__container">
          <Address address={defaultShippingAddress} handleChange={handleChange}>
            Shipping Address
          </Address>

          <div className="date_container">
            <h4 className="title">Expected Delivery</h4>
            <DatePicker
              onChange={date1 => setStartDate1(date1)}
              placeholderText="Date"
              className="date"
              selected={startDate1}
            />
            <i class="fa fa-calendar" id="calender-icon"></i>
          </div>
        </div>
      </div>

      <div className="product">
        <Products productitems={form.productsDetails} />
        <div className="btn">
          <button className="product__cartbuttons" onClick={handleSave}>
            SAVE
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;

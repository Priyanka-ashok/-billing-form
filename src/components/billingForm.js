import React, { Component } from "react";
import { data, shippingdata } from "./data/data";
import "./billingForm.scss";
import $ from "jquery";

export class BillingForm extends Component {
  componentDidMount() {
    $(document).ready(function() {
      var today = new Date().toISOString().split("T")[0];
      $("#datePicker").val(today);
    });
  }
  render() {
    return (
      <div className="container">
        <h4 className="title">{this.props.children}</h4>
        <form id="form">
          {Object.keys(data).map(key => {
            return (
              <>
                <input type="text" defaultValue={data[key]} placeholder={key} />
              </>
            );
          })}
        </form>
        <div>
          <h4 className="title">Order Date</h4>
          <input type="text" type="date" id="datePicker" />
        </div>
      </div>
    );
  }
}
export class ShippingForm extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="title">{this.props.children}</h4>
        <form id="form">
          {Object.keys(shippingdata).map(key => {
            return (
              <>
                <input type="text" defaultValue={data[key]} placeholder={key}/>
              </>
            );
          })}
        </form>
        <h4 className="title">Delivery Date</h4>
        <input type="text" type="date" id="date" />
      </div>
    );
  }
}

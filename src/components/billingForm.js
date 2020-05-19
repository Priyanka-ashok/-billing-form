import React, { Component } from "react";
import "./billingForm.scss";
const AddressRegex = RegExp(/[A-Za-z0-9'.\-\s,]/);
const ZipcodeRegex = RegExp(/^\d{1,5}$/);

export class Address extends Component {
  handleFormChange = (e, key) => {
    const { name, value } = e.target;
    switch (name) {
      case "First Name":
      case "Last Name":
        value.length < 4
          ? (document.getElementById(name).innerHTML =
              "Shoul have atleast 4 letters ")
          : (document.getElementById(name).innerHTML = "");
        break;
      case "Address line 1":
      case "Address line 2":
        AddressRegex.test(value)
          ? (document.getElementById(name).innerHTML =
              "Cannot add Special Characters")
          : (document.getElementById(name).innerHTML = "");
        break;
      case "City":
      case "Country":
      case "State":
        value === ""
          ? (document.getElementById(name).innerHTML = "Please fill the blanks")
          : (document.getElementById(name).innerHTML = "");
        break;
      case "Zipcode":
        ZipcodeRegex.test(value)
          ? (document.getElementById(name).innerHTML =
              "Please revise your five-digit Zip Code.")
          : (document.getElementById(name).innerHTML = "");
        break;
      default:
        break;
    }

    this.props.handleChange(key, e.target.value, this.props.address.type);
  };
  render() {
    const { address } = this.props;
    return (
      <>
        <h4 className="title">{this.props.children}</h4>
        <form className="form">
          {Object.keys(address)
            .splice(0, 8)
            .map(key => {
              return (
                <>
                  <input
                    className="form__fields"
                    type="text"
                    name={key}
                    defaultValue={address[key]}
                    placeholder={key}
                    noValidate
                    onChange={e => this.handleFormChange(e, key)}
                  />
                  <div id={key}>{}</div>
                </>
              );
            })}
        </form>
      </>
    );
  }
}

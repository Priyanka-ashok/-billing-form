import React, { Component } from "react";
import { productsName, form } from "./data/data";
import "./billingForm.scss";

export class Products extends Component {
  state = {
    rows: form.productsDetails
  };

  handleAddRow = () => {
    const item = {};
    this.setState({
      rows: [...this.state.rows, item]
    });
  };

  handleRemoveSpecificRow = idx => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };

  render() {
    const { rows } = this.state;
    return (
      <div>
        <div className="mainContainer">
          {productsName.map(title => {
            return (
              <div className="productsList">
                <h4 className="productsList__title">{title.name}</h4>
              </div>
            );
          })}
        </div>
        {rows.map((item, idx) => {
          const total = item.qty * item.unitPrice;
          return (
            <>
              <div className="mainContainer" id="list" key={idx}>
                <input type="text" value={item.productId} name={item} />
                <input type="text" value={item.productName} name={item} />
                <input type="text" value={item.qty} name={item} />
                <input type="text" value={item.unitPrice} name={item} />
                <input type="number" value={total} name={item} />
                <textarea></textarea>
                <button
                  className="product__cartbuttons"
                  id="delete"
                  onClick={this.handleRemoveSpecificRow(idx)}
                >
                  DELETE
                </button>
              </div>
            </>
          );
        })}
        <button className="product__cartbuttons" onClick={this.handleAddRow}>
          ADD PRODUCT
        </button>
        <br></br>
      </div>
    );
  }
}

export default Products;

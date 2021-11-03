import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../../container/ProductWrapper";
import { Consumer } from "./content";

export default class Product extends Component {
  render() {
    const { ID, name, src, price } = this.props.product;
    return (
      <ProductWrapper className="col-12 col-md-6 col-lg-4 my-3">
        <div className="card">
          <Consumer>
            {value => (
              <div>
            <div className="img-container p-5">
            <Link to="/">
              <img src={src} alt="products" className="card-img-top" id={ID} />
            </Link>
          </div>
          <div className="card-footer d-flex">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <Link to="/" className="link">
                  <strong><p className="align-self-left mb-0 my-2">{ID}. {name}</p></strong>
                </Link>
                <strong><h5 className="font-italic mb-0 my-2">{price}đ</h5></strong>
                <button className="btn cart-btn" onClick={() => value.addToCart(ID)}><i class="fa fa-cart-plus"></i></button>
              </div>
              </div>
          </div>
          </div>
            )}
          </Consumer>
        </div>
      </ProductWrapper>
    );
  }
}

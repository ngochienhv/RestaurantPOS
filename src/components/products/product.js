import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../../container/ProductWrapper";
export default class Product extends Component {
  render() {
    const { id, title, img, price } = this.props.product;
    return (
      <ProductWrapper className="col-12 col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5">
            <Link to="/">
              <img src={img} alt="products" className="card-img-top" id={id} />
            </Link>
            
          </div>
          <div className="card-footer d-flex">
            <div className="row">
              <div className="col-8 col-md-7 col-lg-12">
                <Link to="/" className="link">
                  <strong><p className="align-self-left mb-0 my-2">{id}. {title}</p></strong>
                </Link>
                <strong><h5 className="font-italic mb-0 my-2">{price}</h5></strong>
                <button className="btn cart-btn"><i class="fa fa-cart-plus"></i></button>
              </div>
              </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

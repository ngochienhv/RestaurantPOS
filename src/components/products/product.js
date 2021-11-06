import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../../container/ProductWrapper";
import { Consumer } from "./content";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import priceWithDots from "./priceWithDots";

export default class Product extends Component {
  render() {
    const { ID, name, src, price, type } = this.props.product;
    return (
      <ProductWrapper className="col-12 col-md-6 col-lg-3 my-3">
        <div>
          <Consumer>
            {value => (
              <div>
      <div className="food-card bg-white rounded-lg overflow-hidden shadow">
        <div className="food-card_img position-relative">
          <img src={src} alt="img" />
          <a href="#!">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="food-card_content">
          <div className="food-card_title-section overflow-hidden">
            <h4 className="food-card_title">
                        <a href="#!" className="text-dark" onClick={() => { value.openModal(ID); console.log(value.modalProduct.name) }}>
                <Link to="/"> {name} </Link>
              </a>
            </h4>
            <div className="d-flex justify-content-between food-card-type-section">
              <h3
                style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}
                className="food-card_author">
                {type}
              </h3>
              <div className="rating-box">
                <Rating
                  style={{ fontSize: 25, marginTop: 10 }}
                  name="read-only"
                  value={5}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="food-card_bottom-section">
            <div className="d-flex justify-content-between">
              <div className="food-card_price">
                <span> {priceWithDots(price)} VND</span>
              </div>
              <div className="food-card_order-count">
                <Button
                  className="btn btn-sm cart-btn"
                  onClick={()=>value.addToCart(ID)}
                >
                  <span className="fa fa-cart-plus" />
                </Button>
              </div>
            </div>
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

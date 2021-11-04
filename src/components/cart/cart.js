import React from "react";
import { Consumer } from "../products/content";
import CartItem from "./cartItem";
import { CartContainer } from "../../container/CartContainer";

export default class Cart extends React.Component {
    render() {
        return (
            <CartContainer>
            <div className="container cart position-fixed">
                <Consumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <div className="row cart-row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 cart-col">
                                        <p className="cart-title"><i class="fas fa-shopping-cart"></i> Your cart</p>     
                                    {value.cart.map(product => { return <CartItem key={product.ID} product={product} /> })}
                                    </div>
                                </div>
                                    <div className="total-container">
                                            <div className="d-flex justify-content-between">
                                                <p className="text-left p1">Total: </p>
                                                <p className="text-right p2"><strong>{value.cartTotal} VND</strong></p>
                                            </div>
                                        <button className="btn btn-primary btn-md clear-btn" onClick={() => value.clearCart()}>Clear</button>
                                    </div>
                                    <button className="btn btn-primary btn-lg payment-btn">Payment</button>
                                </React.Fragment>
                            )
                        }
                        else {
                            return (
                                <h3>Your cart is empty</h3>
                            )
                        }
                    }}
                    </Consumer>
                </div>
            </CartContainer>
        )
    }
}
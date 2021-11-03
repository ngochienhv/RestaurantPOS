import React from "react";
import { Consumer } from "../products/content";
import CartItem from "./cartItem";
export default class Cart extends React.Component {
    render() {
        return (
            <div className="container">
                <Consumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    {value.cart.map(product => { return <CartItem key={product.ID} product={product} /> })}
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <button className="btn btn-primary btn-sm" onClick={() => value.clearCart()}>Clear</button>
                                            <p>Total: </p>{value.cartTotal}
                                        </div>
                                    </div>
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
        )
    }
}
import React from "react";
import { CartItemWrapper } from "../../container/CartItemWrapper";
import { Consumer } from "../products/content";
export default class CartItem extends React.Component {
    render() {
        const { ID, name, src, price, count, total } = this.props.product;
        return (
            <Consumer>
                {value => (
                    <div>
                    <div className="row">
                        <div className="col-4 col-md-4 col-lg-4">
                            <img src={src} alt="products" className="card-img-top" id={ID} />
                        </div>
                        <div className="col-4 col-md-4 col-lg-4">
                            <p>{ID}. {name}</p>
                            <div className="d-flex flex-row justify-content-center">
                                    <button className="btn btn-primary btn-sm" onClick={() => value.decrease(ID)}>-</button>
                                    <p>{count}</p>
                                    <button className="btn btn-primary btn-sm" onClick={() => value.increase(ID)}>+</button>
                                    <button className="btn btn-primary btn-sm" onClick={() => value.remove(ID)}>Remove</button>
                            </div>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4">
                            <p>{price}đ</p>
                        </div>
                    </div>
                </div>
                )}
            </Consumer>
        )
    }
}
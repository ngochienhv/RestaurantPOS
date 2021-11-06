import React from "react";
import { Consumer } from "../products/content";
import { Link } from "react-router-dom";
import { ModalWrapper } from "../../container/modalWrapper";
import priceWithDots from "../products/priceWithDots";
import Rating from "@mui/material/Rating";
export default class Modal extends React.Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { ID, src, name, price, type, detail } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalWrapper className="modal-container">
                                <div className="modal-card">
                                <div className="container h-auto d-inline-block">
                                    <div className="modal-img-container">
                                        <img src={src} className="img-fluid" alt="modal" />
                                    </div>
                                    <div className="modal-content d-flex">
                                        <p><strong>{name}</strong></p>
                                                <p className="modal-type">{type}</p>
                                                <div className="rating-box">
                                                    <Rating
                                                        style={{ fontSize: 20, position: "relative", top: -30 }}
                                                        name="read-only"
                                                        value={5}
                                                        readOnly
                                                    />
                                                </div>
                                        <p className="modal-price">Price: {priceWithDots(price)} VND</p>
                                    </div>
                                    <div className="modal-detail">
                                        <p>Detail: {detail.map(item => {return <li>{item}</li>})}</p>
                                        <Link to="/">
                                            <button className="btn btn-primary close-btn" onClick={()=>closeModal()}>Close</button>
                                        </Link>
                                        <button className="btn btn-primary add-cart-btn" onClick={()=>value.addToCart(ID)}><span className="fa fa-cart-plus" /></button>
                                        </div>
                                    </div>
                                </div>
                            </ModalWrapper>
                        )
                    }
                }}
            </Consumer>
        )
    }
}


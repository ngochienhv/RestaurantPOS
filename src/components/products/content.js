import React, { Component } from "react";
import { productList } from "../../components/products/data";
const Context = React.createContext();

class Provider extends Component {
    state = {
        products: productList
    };
    render() {
        return (
            <Context.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }   
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
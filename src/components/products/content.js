import React, { Component } from "react";
import { foodArray } from "../../mcdonalds";
const Context = React.createContext();

class Provider extends Component {
    state = {
        products: foodArray
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
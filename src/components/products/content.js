import React, { Component } from "react";
import { foodArray } from "../../mcdonalds";

const Context = React.createContext();

class Provider extends Component {
    state = {
        products: [],
        cart: [],
        cartTotal: 0,
        modalOpen: false,
        modalProduct: foodArray[0]
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        foodArray.forEach(item => {
            const it = { ...item };
            tempProducts = [...tempProducts, it];
        });
        this.setState({
            products: tempProducts
        })
    }

    getItem = ID => {
        const item = this.state.products.find(product => product.ID === ID);
        return item;
    };

    addToCart = ID => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        const index = tempProducts.indexOf(this.getItem(ID));
        const product = tempProducts[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        if (tempCart.includes(product)) {
            this.setState({
                products: tempProducts,
                cart: [...this.state.cart],
            }, () => {
                this.calTotal();
            })
        }
        else {
            this.setState({
                products: tempProducts,
                cart: [...this.state.cart, product],
            }, () => {
                this.calTotal();
            })
        }
    };

    increase = ID => {
        let tempCart = [...this.state.cart];
        const tempProd = tempCart.find(item => item.ID === ID);
        const index = tempCart.indexOf(tempProd);
        const prod = tempCart[index];
        prod.count = prod.count + 1;
        prod.total = prod.count * prod.price;
        this.setState(
            () => {
                return {
                    cart: [...tempCart]
                };
            },
            () => {
                this.calTotal();
            }
        )
    };

    decrease = ID => {
        let tempCart = [...this.state.cart];
        const tempProd = tempCart.find(item => item.ID === ID);
        const index = tempCart.indexOf(tempProd);
        const prod = tempCart[index];
        prod.count = prod.count - 1;
        if (prod.count === 0) {
            this.setState(
                () => {
                    this.remove(ID);
                }
            )
        }
        prod.total = prod.count * prod.price;
        this.setState(
            () => {
                return {
                    cart: [...tempCart]
                };
            },
            () => {
                this.calTotal();
            }
        )
    };

    remove = ID => {
        let tempProds = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.ID !== ID);
        const index = tempProds.indexOf(this.getItem(ID));
        const delProd = tempProds[index];
        delProd.count = 0;
        delProd.total = 0;
        this.setState(
            () => {
                return {
                    cart: [...tempCart],
                    products: [...tempProds]
                };
            },
            () => {
                this.calTotal();
            }
        )
    };

    clearCart = () => {
        this.setState({
            cart: []
        },
        () => {
        this.setProducts();
        this.calTotal();
        }
    )};

    calTotal = () => {
        let total = 0;
        this.state.cart.map(item => (total += item.total));
        this.setState(()=> {
            return {
                cartTotal: total
            }
        })
    }

    openModal = (ID) => {
        const prod = this.getItem(ID);
        console.log("bruh");
        this.setState(() => {
            return { modalProduct: prod, modalOpen: true };
        })
    }

    closeModal = (ID) => {
        this.setState(() => {
            return { modalOpen: false };
        })
    }
    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                getItem: this.getItem,
                increase: this.increase,
                decrease: this.decrease,
                remove: this.remove,
                clearCart: this.clearCart,
                calTotal: this.calTotal,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }   
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
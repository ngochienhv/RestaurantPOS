import React, { Component } from "react";
import Title from "../components/title/title";
import { foodArray } from "../mcdonalds";
import { Consumer } from "../components/products/content";
import Product from "../components/products/product";
import { PaginationProvider, PaginationContext } from "../components/products/Pagination";
import '../ProductStyle/ProductListStyle.css'
import Cart from "../components/cart/cart";

const { useContext, useEffect } = React;

const Page = () => { 
  const [pagination, setPagination] = useContext(PaginationContext)
  const numberOfPages = Math.ceil(foodArray.length / pagination.limit);
  
  const navigateToPage = (pageNumber) => {
    setPagination({
      ...pagination,
      page: pageNumber,
      start: (pageNumber - 1) * pagination.limit,
      perPage: (pageNumber * pagination.limit),
    });
  };
  
  useEffect(() => {
    navigateToPage(1)
  }, [])
  
    return (
      <>
        <Consumer>
          {value => {
                  return value.products.slice(pagination.start, pagination.perPage).map(product => {
                    return <Product key={product.ID} product={product} />
                  })
                }}
        </Consumer>
        <div className="row">
          <div className="col-4 col-md-8 col-lg-9"></div>
          <div className="col-8 col-md-4 col-lg-3 my-4">
        {pagination.page > 2 && <button className="btn pagebtn" onClick={() => navigateToPage(1)}>First</button>}
        {pagination.page > 1 && <button className="btn pagebtn" onClick={() => navigateToPage(pagination.page - 1)}>Prev</button>}
        {[...Array(100)].slice(0, numberOfPages).map((x, i) =>
          <button className="btn pagebtn" onClick={() => navigateToPage(i + 1)}>{i + 1}</button>
        )}
        {pagination.page !== numberOfPages && <button className="btn pagebtn" onClick={() => navigateToPage(pagination.page + 1)}>Next</button>}
            {pagination.page < Math.ceil(numberOfPages / 2 + 1) && <button className="btn pagebtn" onClick={() => navigateToPage(numberOfPages)}>Last</button>}
          </div>
          </div>
      </>
  )
}
export default class ProductList extends Component {
  state = {
    products: foodArray
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 NavBar" id="NB1">
              <Title title="mcDonalds" />
              <button className="btn btn-lg cart-btn" id="cart-btn-1"><i class="fas fa-shopping-cart"></i></button>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-9">
                <div className="row">
              <PaginationProvider>
                <Page />
              </PaginationProvider>
              </div>
              </div>
              <div className="col-lg-3 cart">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
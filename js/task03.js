import React, {Component} from "react";
import ReactDOM from "react-dom";
import products from "./data/products";

const products = [
  {
    id: 1,
    name: 'Rower',
  },
];
 
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart = []
    };
    this.addToCart = this.addToCart.bind(this);
  }
 
  addToCart(product) {
    const cart = this.state.cart;
    if (!cart.includes(x => x.id === product.id)) {
      this.setState({ cart: cart });
    }
  }
 
  render() {
    return (
      <>
        <Products products={this.props.products} addToCartFunction={this.addToCart} />
        <Cart productsInCart={this.state.cart} />
      </>
    );
  }
}
 
class Products extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <>
        <h2>Produkty</h2>
        <ul>
          {this.props.products.map((product) => (
            <li>
              {product.name}
              <button class="btn btn-primary" onClick={() => this.props.addToCartFunction(product)}>Kup!</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
 
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <>
        <h2>Koszyk</h2>
        <ul>
          {this.props.productsInCart.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
 
function App() {
  return <Shop products={products} />;
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  Shop,
  Products,
  Cart
};
import React from "react";
import "./App.css";
//  import CartItem from './CartItem';
import Cart from "./Cart";
import Navbar from "./Navbar";
// import * as firebase from 'firebase';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        // {
        //   price:999,
        //   title:'watch',
        //   qty:1,
        //  img:'https://media.istockphoto.com/photos/wrist-watch-picture-id180844253',
        //   id: 1
        // },
      
        // {
        //   price:1099,
        //   title:'phone',
        //   qty:1,
        //   img:'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        //   id:2
        // },
        // {
        //   price:500,
        //   title:'tablet',
        //   qty:1,
        //   img:'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80',
        //   id:3
        // },
      
    
       
      
      ]
        
        
    };
  }
  //  componentDidMount(){
  //   //  firebase
  //   //  .firestore()
  //    .collection('products')
  //    .get()
  //    .then((snapshot)=>{
  //      console.log('snap')
  //    })
  //  }
  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    });
  };

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products
    });
  };

  handleDeleteProduct = id => {
    const { products } = this.state;

    const items = products.filter(product => product.id !== id);

    this.setState({
      products: items
    });
  };
  //to count cart items
  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };
  // to get cart total
  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;

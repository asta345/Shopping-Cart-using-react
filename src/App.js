import React from "react";
import "./App.css";
// import CartItem from './CartItem';
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }

  // componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection("products")
  //     .get()
  //     .then(snapshot => {
  //       const products = snapshot.docs.map(doc => {
  //         const data = doc.data();
  //         data["id"] = doc.id;
  //         return data;
  //       });
  //       this.setState({ products: products, loading: false });
  //     });
  // }

  componentDidMount() {
    
    firebase
      .firestore()
      .collection("products")
      // .where('price','>=',999)
      .orderBy('price')
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }

  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products
    // });
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty+1
    })
    .then(()=>{
      console.log('updated doc')
    })
    .catch((error)=>{
      console.log('error:',error);
    })
  };
     
  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
  //   products[index].qty -= 1;

  //   this.setState({
  //     products
  //   });
  const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
     
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log('updated successfully')
      .catch((error)=>{
        console.log('error',error)
      })
    })
     };

  handleDeleteProduct = id => {
    // const{ products } = this.state;

    // const items = products.filter(product => product.id !== id);

    // this.setState({
    //   products: items
    // });
    const docRef=this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log('delete successfully')
    })
    .catch((error)=>{
      console.log('error',error)
    })
  };

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };

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
   // to add product
   addProduct=()=>{
      this.db
    .collection('products')
    .add(
      {
        img:'',
        price:900,
        qty:'3',
        title:'washing machine'

      }
    )
     .then((docRef)=>{
       console.log('product added')
     })
     .catch((err)=>{
       console.log('error is catched')
     })
   }
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        {/* <button onClick={this.addProduct} style={{padding:20,fontsize:20}}>Add a product</button> */}
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;

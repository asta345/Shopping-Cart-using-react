
import react from 'react';

import Cart from './Cart';

import Navbar from './Navbar';
class App extends react.Component() {
    constructor () {
      super();
      this.state = {
        products:[
          {
            price:999,
            title:'watch',
            qty:1,
                                    img:'https://media.istockphoto.com/photos/wrist-watch-picture-id180844253',
            id: 1
          },
        
          {
            price:1099,
            title:'phone',
            qty:1,
            img:'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
            id:2
          },
          {
            price:500,
            title:'tablet',
            qty:1,
            img:'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80',
            id:3
          },
        
      
         
        ]
      }
      //here we are binding object to to class to remove undefined error
      // this.increaseQuantity = this.increaseQuantity.bind(this);
      //  this.testing();
          }
          //to incrse the quantity of the cart item
          handleIncreseQuantity =(product)=>{
      console.log('heyyplease increse the product ',product);
      const{products}=this.state;
      const index = products.indexOf(product);
      products[index].qty+=1;
      this.setState({
        products
      })
      }
      handleDecreaseQuantity =(product)=>{
        console.log('heyyplease decrese the product ',product);
        const{products}=this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0){
          return
        }
        products[index].qty-=1;
  
        this.setState({ //setState is being used in onclick and callback events
          products
        })
        }
  
      handleDeleteProduct =(id)=>{
        
        const {products}=this.state;
        const items = products.filter((item) => item.id !== id); // [{}]
  
        this.setState({
          products: items
        })
        
      }
      //code for adding to prices
      getCartTotal=()=>{
        const{products}=this.state;
                      let cartTotal =0;
  
          products.map=((product) => {
                       cartTotal = cartTotal+product.qty*product.price
          })
          return cartTotal;
      }
  render (){
    return(
  
    <div className="App">
      
      <Navbar/>
      <Cart
     onIncreaseQuantity={this.handleIncreseQuantity}
     onDecreaseQuantity={this.handleDecreaseQuantity}
     onDeleteProduct={this.handleDeleteProduct} />
    </div>
  );
}
}

export default App;

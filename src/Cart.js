import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
	render(){
	       const {products}=this.state 
        return(
		
          <div class="cart">
		  {products.map((product)=>{
			  return  (<CartItem
				 product={product}
				 key={product.id}
				 onIncreaseQuantity={this.handleIncreseQuantity}
				 onDecreaseQuantity={this.handleDecreaseQuantity}
				 onDeleteProduct={this.handleDeleteProduct}  />)
		  })}
		  <div style={{padding:10,fontsize:20}}>TOTAL:${this.getCartTotal()}</div>
	        </div>
	);

	
}

      }
    
      























export default Cart;
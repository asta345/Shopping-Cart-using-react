import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
	constructor () {
		super();
		this.state = {
		  products:[
			  {
				  price:999,
				  title:'watch',
				  qty:1,
                                  img:'',
				  id: 1
			  },
			
				{
					price:1099,
					title:'phone',
					qty:1,
					img:'',
					id:2
				},
				{
					price:500,
					title:'tablet',
					qty:1,
					img:'',
					id:3
				},
			
		
			 
		  ]
		}
		//here we are binding object to to class to remove undefined error
		// this.increaseQuantity = this.increaseQuantity.bind(this);
		//  this.testing();
	      }
	render(){
		const {products}=this.state	
	return(
		
          <div class="cart">
		  {products.map((product)=>{
			  return  (<CartItem
				 product={product}
				 key={product.id}/>)
		  })}
	  </div>
	);

	
}

}
    
























export default Cart;
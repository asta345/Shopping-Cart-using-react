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

			this.setState({
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
	  </div>
	);

	
}

      }
    
      























export default Cart;
import React from "react";
// to start write the code html 
class CartItem extends React.Component{
	constructor () {
		super();
		this.state = {
			price:999,
			title:'Mobile Phone',
			qty:1,
			img:''

		}
		//here we are binding object to to class to remove undefined error
		// this.increaseQuantity=this.increaseQuantity.bind(this);
	}

	//here we can use arrow functions will automatically bind this to onstance of class
        increaseQuantity =()=>{
	// 	//it will increase the qty of the objects in the console.log
	// 	//setstate from 1
		this.setState({
			qty:this.state.qty+1
	// 	//react will take that object and merge with it this.state
		});
                
		// console.log('this.state',this.state);
	
	        //setstateform2
		// this.setState=((prevState) => {
		// 	return{
		// 		qty:prevState.qty+1
		// 	}
		// });
	} 
	render(){
		//def from the object from work easy
         const{price,title,qty}=this.state;
	      // object de structuring
	return(
		<div className="cart-item">
                <div className="left-block">
              
	        <img style={styles.image} alt=""/>

		</div>
		<div className="right-block">
                 <div style={{fontSize:25}}>{title}</div>
		 <div style={{color:'#777'}}>${price}</div>
		 <div style={{color:'#777'}}>Qty{qty}</div>
		 <div className="cart-item-actions">
			 {/* for buttons */}
	    <img alt="increase" 
	    className="action-icons"
	     src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
	     onClick ={this.increaseQuantity}/>
            <img alt="decrease" 
	    className="action-icons"
	     src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
            <img alt="delete"
	     className="action-icons"
	      src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
		 </div>
		</div>
                </div>
	)	
	}
} //this is class component it inherit some features from the components

// in react we can style jsx using the objects cannot use css components
const styles={
	image:{
         height:110,
	 width:110,
	 borderRadius:4,
	 background:'#777'
	 
	}
}


export default CartItem;

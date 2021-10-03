import React from 'react';

class CartItem extends React.Component {
 
  // // testing(){
  // //   const promise = new Promise((resolve,reject)=>{
  // //       setTimeout(() => {
  // //         resolve('done')
  // //       }, 5000);
  // //   })
  
  // // promise.then (() => {
  // //   //in promise set state act as synchrous call
  // //  this.setState({qty:this.state+1});//after declare set state in event we cannot access the upto date state
  // //  this.setState({qty:this.state+1});
  // //  console.log('state',this.state);
  // // });
  // // }
  
  // //here we can use arrow functions will automatically bind this to instance of class
  // increaseQuantity = () => {
  
  //   // console.log('this', this.state);
  //   // setState form 1 is generally used to change title  
  //   // this.setState({
  //   //   qty: this.state.qty + 1
  //   // }, () => {});

  //   // setState form 2 - if prevState required use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty + 1
  //     }
  //   });
  // }

  // decreaseQuantity = () => {
  //   const { qty } = this.state;

  //   if (qty === 0) {
  //     return;
  //   }
  //   // setState form 2 - if prevState required use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty -1
  //     }
  //  });
  // }
   
  render () {
    console.log('render');
    const { price, title, qty } = this.props.product;
    const {product,
      onIncreaseQuantity
      ,onDecreaseQuantity
      ,onDeleteProduct}=this.props;
    
    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="left-block">
          <img style={styles.image} alt=""/>
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>${price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={()=>onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick={()=>onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              onClick={()=>onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}
//this is class component it inherit some features from the components

// in react we can style jsx using the objects cannot use css components
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;
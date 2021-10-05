import React from 'react';

const Navbar =(props)=> {

   
    return (
      <div style={styles.nav}>
	<div style={styles.cartIconContainer}>
		<img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart-icon"/>
			<span style={styles.cartCount}>3</span>
	</div>
      </div>
    );
  }


const styles = {
	cartIcon: {
        padding:'5px',
	  height: 32,
	 marginRight:20
	},
	nav:{ padding:'10px',
		height:40,
		background:'#4267b2',
		display:'flex',
		justifyContent:'flex-end',
		aligItems:'center'
	},
	cartIconContainer: {
		position: 'relative',
		
	      },
	      cartCount: {
	
		background: 'yellow',
		borderRadius: '50%',
		
		padding: '5px 8px',
		position: 'absolute',
		right: 0,
		top: -9
	}
       
     
};

export default Navbar;
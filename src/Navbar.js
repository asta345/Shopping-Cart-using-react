import React from 'react';

class Navbar extends React.Component {
 
  
  render () {
   
    return (
      <div>
	<div>
		<img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart-icon"/>
			<span>3</span>
	</div>
      </div>
    );
  }
}

const styles = {
	image: {
	  height: 32,
	 marginRight:20
	},
	nav:{
		height:70,
		background:'#4267b2',
		display:'flex',
		justifyContent:'flex-end',
		aligItems:'center'
	},
	cartIconContainer: {
		position: 'relative'
	      },
	      cartCount: {
		background: 'yellow',
		borderRadius: '50%',
		padding: '4px 8px',
		position: 'absolute',
		right: 0,
		top: -9
	}
       
     
};

export default Navbar;
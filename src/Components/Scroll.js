import React, { Component } from 'react';


class Scroll extends Component {
  render() {

  	return (
  		
  		<div style={{ overflowY:"scroll", height:'500px', border:"solid green 2px ", margin:"10px"}}>
  		{this.props.children}
  		</div>


  		);

  }
}




export default Scroll;
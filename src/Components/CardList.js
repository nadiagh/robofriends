import React, { Component } from 'react';
import Card from './Card.js';


class CardList extends Component {
  render() {


  	return(
  		
  	this.props.robots.map(i => <Card  obj={i} key={i.id} />)
        
  	
         );
  	
  }
}








  export default CardList;
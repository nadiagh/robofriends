import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    const {id,name,username,email}=this.props.obj;
    return (
      <div className="tc bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5 " >
    
  <img className="card-img-top" src={`https://robohash.org/${id}`} alt="Card cap"  />
  <p>{name}</p>
  <p>{username}</p>
  <p>{email}</p>
      </div>
      
    );
  }
}

export default Card;
import React, { Component } from 'react';


class Search extends Component {
  render() {

  	return (
  		<div className="pa2">
  		<input className="tc pa3 ba b--green bg-lightest-blue " 
  		type="search" 
  		placeholder="type the robot name" 
  		onInput={this.props.searchft}
  		/>
  		</div>
  		);
        

  }
}


export default Search;
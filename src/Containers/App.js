import React, { Component } from 'react';
import CardList from '../Components/CardList';
import Search from '../Components/Search';
import './App.css';
import Scroll from '../Components/Scroll';



class App extends Component {
   constructor(){
     super();
     this.state={
    	robots:[],
    	searchfield:''

    }


}



   onChangeField= (event)=>{
   	this.setState({searchfield:event.target.value});
    }
    

   componentDidMount(){
   	fetch('http://jsonplaceholder.typicode.com/users')
   	.then(response=>response.json())
   	.then(users=>this.setState({robots:users}));
   }


   	


  render() {
    const {robots,searchfield}=this.state;
    let robotfilter=robots.filter(i=>i.name.toLowerCase().includes(searchfield.toLowerCase()));
    
     return(
     	<div className="tc">
     	<h1 className="f1">RoboFriends</h1>
     	<Search  searchft={this.onChangeField}/>
     	<Scroll>
        <CardList  robots={robotfilter}/>
        </Scroll>
       </div>


);
  
  }



}

export default App;
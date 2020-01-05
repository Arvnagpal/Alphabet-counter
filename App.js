import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vov:"",
      a:0
    };
  }

  handleChange(e){
    let vov= e.target.value;
    let a = 0;
    let i;
   if(vov !== ""){
     for(i=0;i<vov.length;i++){
       if(vov.charAt(i)==='a' || vov.charAt(i)==='A' ){
         a++;
       }
     }
    }   
this.setState({
  vov,
  a
  })
}  


  render() { 
     return ( 
      <div>
       <input 
        type="text" 
        value={this.state.comment} 
        onChange={ this.handleChange.bind(this) }/>
         <p>No of a : {this.state.a}</p>
       </div>
      );
   }
  }
  

export default App;

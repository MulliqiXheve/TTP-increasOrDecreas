
import React from 'react';
import {Component} from "react"
import ReactDOM from 'react-dom';
import  './style.css'


class Decrement extends Component{
    constructor(props){
        super(props);
        this.state= {
            clices: 0,
            show: true
        };  
    }
    IncrementItem() {
    let val = this.state.clices + 1;
        this.setState({ clices: val});
    }
    DecrementItem(){
        if(this.state.clices <= 0){
            alert('number can not be less than 0');
        }
        else{
            let val = this.state.clices - 1;

            this.setState({ clices: val});
        }
    }
    ToggleClick =() => {
        this.setState({ show: !this.state.show});
    }
  
    render(){
        return (
          <div id= 'allDecroment'>
           <div class='decrementstyle' id= 'theNumber'> {this.state.clices}</div>
           <div class='decrementstyle'> <button on onClick={e => {this.IncrementItem()}}>Click to increas by 1</button></div>
            <div class='decrementstyle'><button on onClick={e => {this.DecrementItem()}}>Click to decres by 1</button></div>
           
           
          </div>
        );
    }
}
  export default Decrement;
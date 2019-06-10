import React from 'react';
import {Component} from "react"
import ReactDOM from 'react-dom';
import  './style.css'

class EventExample extends Component{
    save(){
        alert('clicked saved!');
    };
    render(){
        return <div>
            <button onClick ={this.save}>Save</button>
        </div>
    }
};

export default EventExample;
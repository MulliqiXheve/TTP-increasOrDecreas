
import React from 'react';
import ReactDOM from 'react-dom';
import  './style.css'
import Decrement from './Decrement'
import EventExample from './EventExample'



//Qestion 1
class CardContact extends React.Component{
  render(){
    return< div className="root">
          <p>{this.props.name}</p> 
          <p>{this.props.num}</p> 
          <p>{this.props.email}</p> </ div>
  }
}
function App(){
  return (
  <div>
   <div class= "cards"> <CardContact name='Mary' num="333-333-3333" email="example1@something.com" /></div>
   <div class= "cards"> <CardContact name='Bary' num="222-222-2222" email="example2@something.com" /></div>
   <div class= "cards"> <CardContact name='Gary' num="444-444-4444" email="example3@something.com" /></div>
   <Decrement />
   <EventExample />
</div>);

}
export default App;

 


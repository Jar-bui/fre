import React from 'react';
import logo from './logo.svg';
import Flo from './Flo'
import axios from 'axios'

class App extends React.Component{
  componentDidMount(){
    axios.get('/api/db/in_theaters').then(res=>{
      console.log(res)
    })
  }
  render(){
    return(
      <div className="App">
          
          <Flo/>
      </div>
    )
  }
}

export default App;

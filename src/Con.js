import React, { Component } from 'react'
import eventHub from './event_hub'
export default class Con extends Component {
   state={
       color:'red'
   }
   setcolor = (color)=>{
       this.setState({
           color
       })
       
   }
   componentDidMount(){
       eventHub.on("change",this.setcolor)
   }
    render() {

        return (
            
            <div style={{color: this.state.color}}>
                我是con组件

              
            </div>
        )
    }
}

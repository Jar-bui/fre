import React, { Component } from 'react'

import axios from "axios"


export default class Flo extends Component {
    state={
        list:[],
        user:"",
        ax:""
    }
    componentDidMount(){
        this.sett()
        // console.log(this.state.list)

    }
    sett=()=>{
        axios.get('http://localhost:4000/aoihoih').then(res=>{
            console.log(res)
            this.setState({
                list:res.data
            })
        })
    }
    // sett()
    // console.log(this.state.list)
        hand=(e)=>{
            this.setState({
                [e.target.id]:e.target.value

            })
        }
        handJ=(e)=>{
            // console.log(11)
            axios.post('http://localhost:4000/aoihoih',{
                title:this.state.user,
                author:this.state.ax
            }).then(res=>{
                console.log(res)
                console.log("成功")
                this.sett()
                this.setState({
                    user:"",
                    ax:""
                })
            })
        }
        render() {
            let {list,user,ax} = this.state
            // console.log(this.state.list)
        return (
            
            <div> 
                <input id="user" value={user} onChange={this.hand}/>
                <input id="ax" value={ax} onChange={this.hand}/>
                <button type="" onClick={this.handJ}>添加</button>
                {
                    list.map((item,index)=>{
                    return <li key={index}>{item.id} {item.author}{item.title}</li>
                    })
                }
            </div>
        )
    }
}
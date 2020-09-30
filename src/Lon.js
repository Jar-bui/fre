import React, { Component } from 'react'
import eventHub from './event_hub'

export default class Lon extends Component {
    randomHexColor() { //随机生成十六进制颜色
        return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
    }

    ChangeColor = ()=>{
        eventHub.trigger("change",this.randomHexColor())
    }
    render() {
        
        return (
            <div>
               lon组件
               <button onClick={this.ChangeColor}>改变兄弟组件颜色</button>
            </div>
        )
    }
}

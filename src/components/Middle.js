import React, { Component } from 'react'
import './middle.css'
import Slidera from './Slider'


export class Middle extends Component {
    
    
    render() {  
             
        return (
            <div className="middlesection">
             <Slidera  Price={this.props.Price}/>
            </div>
        )
    }
}

export default Middle

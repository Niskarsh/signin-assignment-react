import React, { Component } from 'react'
import request from 'request-promise'
import { Card } from './card/index'

export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            disabled : false,
            
        }
    }

    disabledHandler = () => {
        this.setState ({disabled : true})
    }
   
    render() {
        return (
            <div>
            <Card disabled={this.state.disabled} click={this.disabledHandler}/>
            
            </div>
        )
    }
}


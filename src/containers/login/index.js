import React, { Component } from 'react'
import request from 'request-promise'
import { Card } from './card/index'

export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rec : false,
            rec2 : false
        }
    }

    componentDidMount() {

    }

    LiAuth = async () => {
        let options = {
            withCredentials: true,
            method: 'GET',
            uri: 'https://guarded-plains-96027.herokuapp.com/signin',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:3000/',
                'Access-Control-Request-Method': 'POST',
            }
            // form: {
            //     email: values.emailLogin,
            //     password: values.passwordLogin,
            // }

        }

        await request(options).then( data => {
            console.log (`in`)
            this.setState ({rec2 : data})
            // store.dispatch(login(JSON.parse(data)));
            // notify('success', `Hi ${JSON.parse(data).nickname}`, `You\'re in`)
            // val = true
        }, () => {
            // notify('error', 'Signin failed', 'Invalid creds, try again')
        }).catch((e) => {
            // notify('error', 'Signin failed', 'Invalid creds, try again')
            // notify( 'error', 'Signin failed', 'Internal server error, bear with us')
        });

    }

    render() {
        return (
            <div>
            <Card click={this.LiAuth} rec2={this.state.rec2} />
            
            </div>
        )
    }
}


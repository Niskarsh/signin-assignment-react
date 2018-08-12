import React, { Component } from 'react'
import * as qs from 'query-string'
import request from 'superagent'

export class Authenticate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,

        }
        this.authorizationCode = qs.parse(this.props.location.search)!==undefined?qs.parse(this.props.location.search).code:null
        
    }

    // async componentDidMount () {

    //     console.log(`--------`,this.props.location.search)
    //     // console.log (`-------`, this.authorizationCode)
    //     // let options = {
    //     //     method: 'POST',
    //     //     uri: `https://www.linkedin.com/uas/oauth2/accessToken`,
    //     //     headers: {
    //     //         'content-type': 'application/x-www-form-urlencoded'
    //     //     },
    //     //     form: {
    //     //         grant_type: `authorization_code`,
    //     //         code: this.authorizationCode,
    //     //         redirect_uri: `http://localhost:3000/authenticate`,
    //     //         client_id: process.env.REACT_APP_CLIENT_ID,
    //     //         client_secret: process.env.REACT_APP_CLIENT_SECRET
    //     //     }

    //     // }

    //     // await request(options).then(data => {

    //     //     console.log(data)
    //     //     this.setState({ redirect: true })
    //     //     // store.dispatch(login(JSON.parse(data)));
    //     //     // notify('success', `Hi ${JSON.parse(data).nickname}`, `You\'re in`)
    //     //     // val = true
    //     // }).catch((e) => {
    //     //     // notify('error', 'Signin failed', 'Invalid creds, try again')
    //     //     // notify( 'error', 'Signin failed', 'Internal server error, bear with us')
    //     //     console.log(e)
    //     // })

    // }




    render() {
      
        return (
            <div>
                
                {
                    this.state.redirect ? `redirect` : `waiting`
                }
            </div>
        )
    }
}
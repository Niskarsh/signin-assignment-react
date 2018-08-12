import React, { Component } from 'react'
import request from 'request-promise'
import { connect } from 'react-redux';
import { Card } from './card/index'

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {}

        }
    }

    async componentDidMount() {
        let options = {
            withCredentials: true,
            method: 'GET',
            uri: `${process.env.REACT_APP_API_SERVER}userProfile`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Origin': `${process.env.REACT_APP_SERVER}`,
                'Access-Control-Request-Method': 'GET',
                'Authorization': `Bearer ${this.props.accessToken}`


            }

        }
        console.log(`Bearer ${this.props.accessToken}`)

        await request(options).then(data => {
            this.setState({ user: JSON.parse(data) })
            console.log(this.state.user)
        }).catch((e) => {

            // notify( 'error', 'Signin failed', 'Internal server error, bear with us')
        });


    }

    render() {
        return (
            <div>
            <Card user={this.state.user}/>
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    if (state.login.accessToken !== undefined && state.login.accessToken !== '') {
        return {
            accessToken: state.login.accessToken
        }
    }
    if (localStorage.getItem("accessToken") !== null && state.login.accessToken !== undefined) {
        return {
            accessToken: localStorage.getItem("accessToken")
        }
    }
    return {
        accessToken: "unauthenticated"
    }
}

export default connect(mapStateToProps)(Dashboard)


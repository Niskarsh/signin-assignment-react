import React, { Component } from 'react'
import { Spin } from 'antd';
import * as qs from 'query-string'
import request from 'superagent'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux';
import { intiateGetAccessCode } from '../../../redux/actions/index'
import './index.css'

class Authenticate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            cancel: false
        }
    }

    async componentDidMount() {
        if (qs.parse(this.props.location.search).error === undefined || qs.parse(this.props.location.search).error === null) {

            const authorizationCode = qs.parse(this.props.location.search).code
            await this.props.intiateGetAccessCode(authorizationCode, "/dashboard", this)
        } else {
            this.setState ({cancel : true})
        }
    }

    render() {

        return (
            <div>
                {
                    this.state.cancel ? <Redirect to="/" />:(this.state.redirect ? <Redirect to="/dashboard" /> : <Spin className="centered" size="large" />)
                }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        code: state.login.accessToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        intiateGetAccessCode: (authorizationCode, redirectUrl, reference) => {
            dispatch(intiateGetAccessCode(authorizationCode, redirectUrl, reference))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate)
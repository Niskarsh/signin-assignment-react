import React, { Component } from 'react'
import * as qs from 'query-string'
import request from 'superagent'
import { connect } from 'react-redux';
import { intiateGetAccessCode } from '../../../redux/actions/index'

class Authenticate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,

        }
        const authorizationCode = qs.parse(this.props.location.search).code
        this.props.intiateGetAccessCode(authorizationCode, "/dashboard")

    }
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

const mapDispatchToProps = dispatch => {
    return {
        intiateGetAccessCode: (authorizationCode, redirectUrl) => {
            dispatch(intiateGetAccessCode(authorizationCode, redirectUrl))

        }
    }
}

export default connect(null, mapDispatchToProps)(Authenticate)
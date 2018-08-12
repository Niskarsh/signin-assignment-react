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
    }

    async componentDidMount () {
        const authorizationCode = qs.parse(this.props.location.search).code
        await this.props.intiateGetAccessCode(authorizationCode, "/dashboard")
        this.setState ({redirect : true})
        

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


const mapStateToProps = state => {
    return {
        code : state.login.accessToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        intiateGetAccessCode: (authorizationCode, redirectUrl) => {
            dispatch(intiateGetAccessCode(authorizationCode, redirectUrl))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate)
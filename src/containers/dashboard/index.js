import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        

    }

    render() {
        return (`${this.props.accessToken}`)
    }
}

const mapStateToProps = state => {
    if (state.login.accessToken !== undefined && state.login.accessToken !== '') {
        return {
            accessToken: state.login.accessToken
        }
    }
    if (localStorage.getItem("accessToken") !== null&& state.login.accessToken !== undefined) {
        return {
            accessToken: localStorage.getItem("accessToken")
        }
    }
    return {
        accessToken: "unauthenticated"
    }
}

export default connect(mapStateToProps)(Dashboard)


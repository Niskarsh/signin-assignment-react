import request from 'request-promise'
import { put } from 'redux-saga/effects'
import { GET_ACCESS_CODE } from '../actions/actionTypes'

export function* getAccessCodeSaga (action) {
    console.log (`------call saga`)

    let options = {
        withCredentials : true,
        method: 'GET',
        uri: `${process.env.REACT_APP_API_SERVER}authorize?code=${action.code}`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Origin': `${process.env.REACT_APP_SERVER}`,
            'Access-Control-Request-Method': 'POST',
        }

    }

    const data = yield request(options)
    yield localStorage.setItem("accessToken", JSON.parse(data).access_token);
    yield put ({
        code : JSON.parse(data).access_token,
        redirectUrl : action.redirectUrl,
        type : GET_ACCESS_CODE
    })

} 
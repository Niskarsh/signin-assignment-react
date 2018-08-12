import request from 'request-promise'
import { put } from 'redux-saga/effects'
import { GET_ACCESS_CODE } from '../actions/actionTypes'

export function* getAccessCodeSaga (action) {
    console.log (`------call saga`)

    let options = {
        withCredentials : true,
        method: 'GET',
        uri: `http://localhost:3001/authorize?code=${action.code}`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Access-Control-Request-Method': 'POST',
        }

    }

    const data = yield request(options)
    console.log (`------aceessss`, data)
    yield put ({
        code : data.access_token,
        redirectUrl : action.redirectUrl,
        type : GET_ACCESS_CODE
    })

} 
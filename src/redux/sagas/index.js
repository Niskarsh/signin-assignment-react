import { takeEvery } from 'redux-saga/effects'
import { GET_ACCESS_CODE_INITIATE } from '../actions/actionTypes'
import { getAccessCodeSaga } from './oAuth'

export function* watchAccessCode () {
    console.log (`------watch saga`)
    yield takeEvery (GET_ACCESS_CODE_INITIATE, getAccessCodeSaga )


}

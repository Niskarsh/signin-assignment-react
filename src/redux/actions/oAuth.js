import request from 'request-promise'
import * as actionTypes from './actionTypes'

export const intiateGetAccessCode = (code, redirectUrl) => {
    return {
        code,
        redirectUrl,
        type : actionTypes.GET_ACCESS_CODE_INITIATE
    }
}
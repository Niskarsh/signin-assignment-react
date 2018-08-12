import { GET_USER_DETAILS_INITIATE } from './actionTypes'

export const intiateGetUserDetails = (code, redirectUrl) => {
    return {
        code,
        redirectUrl,
        type : actionTypes.GET_ACCESS_CODE_INITIATE
    }
}
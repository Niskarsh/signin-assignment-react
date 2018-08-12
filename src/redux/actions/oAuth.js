import { GET_ACCESS_CODE_INITIATE } from './actionTypes'

export const intiateGetAccessCode = (code, redirectUrl) => {
    return {
        code,
        redirectUrl,
        type : GET_ACCESS_CODE_INITIATE
    }
}
import { GET_ACCESS_CODE_INITIATE } from './actionTypes'

export const intiateGetAccessCode = (code, redirectUrl, reference) => {
    return {
        code,
        redirectUrl,
        type : GET_ACCESS_CODE_INITIATE,
        reference
    }
}
import { GET_ACCESS_CODE, GET_ACCESS_CODE_INITIATE } from '../actions/actionTypes'

const initialState = {
    accessToken : ""
}

export const login = (state = initialState, action) => {
    console.log (`--------eeeeeeeee`, state)
    switch (action.type) {
        case GET_ACCESS_CODE:

            return {
                ...state,
                accessToken :action.code

            }
    }
    return state
}
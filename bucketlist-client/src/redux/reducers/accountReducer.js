import { AccountConstants } from "../../constants/allConstants"

let initialState = {
    user: {},
    submitted: false,
}

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case AccountConstants.ADD_USER:
            return {
                ...state,
                user: state.user,
                submitted: action.payload
            }

        case AccountConstants.LOGIN_USER:
            return {
                ...state,
                submitted: action.payload
            }

        default:
            return state
    }
}
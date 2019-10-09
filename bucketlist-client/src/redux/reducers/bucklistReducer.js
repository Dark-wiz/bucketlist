import { bucketlistConstants } from "../../constants/allConstants"

let initialState = {
    list: {},
    submitted: false,
    allLists: []
}

export const bucketlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case bucketlistConstants.ADD_LIST:
            return {
                ...state,
                submitted: action.payload
            }

        case bucketlistConstants.UPDATE_LIST:
            return {
                ...state,
                submitted: action.payload
            }

        case bucketlistConstants.GET_LIST:
            return {
                ...state,
                allLists: action.payload
            }

        case bucketlistConstants.GET_SINGLE_LIST:
            return {
                ...state,
                list: action.payload,
            }
        case bucketlistConstants.DELETE_LIST:
            return {
                ...state,
                submitted: action.payload,
            }

        default:
            return state
    }
}
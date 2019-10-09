import { bucketlistItemConstants } from "../../constants/allConstants"

let initialState = {
    item: {},
    submitted: false,
    allItems: []
}

export const bucketlistItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case bucketlistItemConstants.ADD_ITEM:
            return {
                ...state,
                submitted: action.payload
            }

        case bucketlistItemConstants.UPDATE_ITEM:
            return {
                ...state,
                submitted: action.payload
            }

        case bucketlistItemConstants.DELETE_ITEM:
            return {
                ...state,
                submitted: action.payload
            }

        case bucketlistItemConstants.GET_ITEMS:
            return {
                ...state,
                allItems: action.payload
            }

        case bucketlistItemConstants.GET_SINGLE_ITEM:
            return {
                ...state,
                item: action.payload
            }

        default:
            return state
    }
}
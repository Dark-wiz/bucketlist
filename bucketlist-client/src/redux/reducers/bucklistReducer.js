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
                list: state.list,
                submitted: action.payload
            }

        case bucketlistConstants.GET_LIST:
            return {
                ...state,
                list: state.list,
                submitted: action.payload
            }

        default:
            return state
    }
}
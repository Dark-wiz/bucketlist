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
                item: state.item,
                submitted: action.payload
            }

        default:
            return state
    }
}
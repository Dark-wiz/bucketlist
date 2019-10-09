import axios from 'axios'
import { bucklistItemApi, bucketlistItemConstants, configure } from '../../constants/allConstants'
import { showSuccessfulMessage, showErrorMessage, refreshPage } from '../../utils'
import AuthServices from '../../utils/authorization'

export const addItemAction = (state) => {
    console.log(state, 'stste')
    const url = `${configure.apiUrl}${bucklistItemApi.add_item}/${state.bucketlistId}/items`

    return (dispatch) => {
        dispatch({
            type: bucketlistItemConstants.ADD_ITEM,
            payload: true
        })
        axios.post(url, state, {
            headers: { 'Authorization': `Bearer ${AuthServices.getToken()}` }
        })
            .then(res => {
                if (res.data.isSuccessful) {
                    dispatch({
                        type: bucketlistItemConstants.ADD_ITEM,
                        payload: false
                    })
                    showSuccessfulMessage("Added new bucket list item")
                    refreshPage();
                }
            })
            .catch(err => {
                dispatch({
                    type: bucketlistItemConstants.ADD_ITEM,
                    payload: false
                })
                showErrorMessage("Couldn't add")
            })
    }
}


export const editItemAction = (state) => {
    const url = `${configure.apiUrl}${bucklistItemApi.update_item}/${state.bucketlistId}/items/${state.id}`

    return (dispatch) => {
        dispatch({
            type: bucketlistItemConstants.UPDATE_ITEM,
            payload: true
        })
        axios.put(url, state, {
            headers: { 'Authorization': `Bearer ${AuthServices.getToken()}` }
        })
            .then(res => {
                if (res.data.isSuccessful) {
                    dispatch({
                        type: bucketlistItemConstants.UPDATE_ITEM,
                        payload: false
                    })
                    showSuccessfulMessage("update bucket list item")
                    refreshPage();
                }
            })
            .catch(err => {
                dispatch({
                    type: bucketlistItemConstants.UPDATE_ITEM,
                    payload: false
                })
                showErrorMessage("Couldn't add")
            })
    }
}


export const getItemAction = (item) => {
    return (dispatch) => {
        dispatch({
            type: bucketlistItemConstants.GET_SINGLE_ITEM,
            payload: item
        })
    }
}

export const deleteItemAction = (id, item_id) => {
    const url = `${configure.apiUrl}${bucklistItemApi.delete_item}/${id}/items/${item_id}`
    return (dispatch) => {
        axios.delete(url, {
            headers: { 'Authorization': `Bearer ${AuthServices.getToken()}` }
        })
            .then(res => {
                if (res.data.isSuccessful) {
                    dispatch({
                        type: bucketlistItemConstants.DELETE_ITEM,
                        payload: true
                    })
                    showSuccessfulMessage("Item was deleted")
                    refreshPage();
                } else {
                    showErrorMessage("Couldn't delete item")
                }
            })
    }
}

export const allItemAction = (id) => {
    const url = `${configure.apiUrl}${bucklistItemApi.update_item}/${id}/items`
    return (dispatch) => {
        axios.get(url, {
            headers: { 'Authorization': `Bearer ${AuthServices.getToken()}` }
        })
            .then(res => {
                dispatch({
                    type: bucketlistItemConstants.GET_ITEMS,
                    payload: res.data.data
                })
                return res
            })
    }
}
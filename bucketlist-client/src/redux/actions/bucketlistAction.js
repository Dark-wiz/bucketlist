import axios from 'axios'
import { configure, bucklistApi, bucketlistConstants } from '../../constants/allConstants'
import { showSuccessfulMessage, showErrorMessage, refreshPage } from '../../utils'
import AuthServices from '../../utils/authorization'


export const addBucketlistAction = (state) => {

    const url = `${configure.apiUrl}${bucklistApi.add_list}`

    return (dispatch) => {
        dispatch({
            type: bucketlistConstants.ADD_LIST,
            payload: true
        })
        axios.post(url, state, {
            headers: { 'Authorization': `Bearer ${AuthServices.getToken()}` }
        })
            .then(res => {
                if (res.data.isSuccessful) {
                    dispatch({
                        type: bucketlistConstants.ADD_LIST,
                        payload: false
                    })
                    showSuccessfulMessage("Added new bucket list")
                    refreshPage();
                }
            })
            .catch(err => {
                dispatch({
                    type: bucketlistConstants.ADD_LIST,
                    payload: false
                })
                showErrorMessage("Couldn't add")
            })
    }

}

export const allBucketlistAction = () => {
    const allBucketlists = `${configure.apiUrl}${bucklistApi.get_all_list}`
    return (dispatch) => {
        axios.get(allBucketlists, {
            headers: { 'Authorization': `Bearer ${AuthServices.getToken()}` }
        })
            .then(res => {
                dispatch({
                    type: bucketlistConstants.GET_LIST,
                    payload: res.data.data
                })
                return res
            })
    }
}

export const editBucketlistAction = (state) => {

    const url = `${configure.apiUrl}${bucklistApi.update_list}/${state.id}`

    return (dispatch) => {
        dispatch({
            type: bucketlistConstants.UPDATE_LIST,
            payload: true
        })
        axios.put(url, state, {
            headers: { 'Authorization': `Bearer ${AuthServices.getToken()}` }
        })
            .then(res => {
                if (res.data.isSuccessful) {
                    dispatch({
                        type: bucketlistConstants.UPDATE_LIST,
                        payload: false
                    })
                    showSuccessfulMessage("Updated bucket list")
                    refreshPage();
                }
            })
            .catch(err => {
                dispatch({
                    type: bucketlistConstants.UPDATE_LIST,
                    payload: false
                })
                showErrorMessage("Couldn't update")
            })
    }

}

export const getBucketlistAction = (bucket) => {
    return (dispatch) => {
        dispatch({
            type: bucketlistConstants.GET_SINGLE_LIST,
            payload: bucket
        })
    }
}

export const deleteBucketlistAction = (id) => {
    const url = `${configure.apiUrl}${bucklistApi.delete_list}/${id}`
    return (dispatch) => {
        axios.delete(url, {
            headers: { 'Authorization': `Bearer ${AuthServices.getToken()}` }
        })
            .then(res => {
                if (res.data.isSuccessful) {
                    dispatch({
                        type: bucketlistConstants.DELETE_LIST,
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
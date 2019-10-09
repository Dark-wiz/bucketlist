import axios from 'axios'
import { configure, AccountConstants, accountApi } from '../../constants/allConstants'
import { createBrowserHistory } from 'history';
import { showErrorMessage } from '../../utils';
import AuthServices from '../../utils/authorization';


export const loginAction = (state) => {
    const url = `${configure.apiUrl}${accountApi.login}`
    return (dispatch) => {
        dispatch({
            type: AccountConstants.LOGIN_USER,
            payload: true
        })
        axios.post(url, state)
            .then(res => {
                dispatch({
                    type: AccountConstants.LOGIN_USER,
                    payload: false
                })
                if (res.data.isSuccessful) {
                    let response = res.data.data
                    let loginToken = {
                        userId: response.id,
                        token: response.auth_token,
                        expires: response.expires_in,
                    }
                    localStorage.setItem('_bucketlist_key_', JSON.stringify(loginToken))
                    createBrowserHistory().push('/dashboard')
                    createBrowserHistory().go()
                } else {
                    showErrorMessage("Login failed");
                }
                return res
            })
            .catch(err => {
                dispatch({
                    type: AccountConstants.LOGIN_USER,
                    payload: false
                })
                showErrorMessage("Incorrect username or password details")
            })
    }

}


export const registerAction = (state) => {
    const url = `${configure.apiUrl}${accountApi.register}`
    return (dispatch) => {
        dispatch({
            type: AccountConstants.ADD_USER,
            payload: true
        })
        axios.post(url, state)
            .then(res => {
                dispatch({
                    type: AccountConstants.ADD_USER,
                    payload: false
                })
                if (res.data.isSuccessful) {
                    createBrowserHistory().push('/login')
                    createBrowserHistory().go()
                } else {
                    showErrorMessage("Login failed");
                }
                return res
            })
            .catch(err => {
                dispatch({
                    type: AccountConstants.ADD_USER,
                    payload: false
                })
                showErrorMessage("Check details")
            })
    }


}


export const getUserAction = (username, password) => {

}
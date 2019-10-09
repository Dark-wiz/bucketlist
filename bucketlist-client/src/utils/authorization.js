
import { createBrowserHistory } from 'history';

export default class AuthServices {
    static getToken() {
        let token = JSON.parse(localStorage.getItem('_bucketlist_key_'));
        console.log(token, '_bucketlist_key_')
        if (token === null) {
            return '';
        } else if (token === undefined) {
            return '';
        } else {
            return token.token;
        }
    }

    static isUserAlreadyLoggedIn() {
        let token = JSON.parse(localStorage.getItem('_bucketlist_key_'));
        let timeInHours = new Date().getHours();

        if (localStorage.getItem('_bucketlist_key_') === null || localStorage.getItem('_bucketlist_key_') === undefined || timeInHours <= token) {
            return false;
        } else {
            return true;
        }
    }

    static handleUserLogout() {
        if (localStorage.getItem('_bucketlist_key_') === null || localStorage.getItem('_bucketlist_key_') === undefined) {
            //
        } else {
            localStorage.removeItem('_bucketlist_key_');
            createBrowserHistory().push('/login');
            createBrowserHistory().go();
        }
    }
    //changed

    static getAuthUserEmail() {
        //
        if (localStorage.getItem('_bucketlist_key_') === null || localStorage.getItem('_bucketlist_key_') === undefined) {
            //
            return null;
        } else {
            let token = JSON.parse(localStorage.getItem('_bucketlist_key_'));
            return token.userEmail;
        }
    }

    static getPersonType() {
        if (localStorage.getItem('_bucketlist_key_') === null || localStorage.getItem('_bucketlist_key_') === undefined) {
            return null;
        } else {
            let token = JSON.parse(localStorage.getItem('_bucketlist_key_'));
            return token.personType;
        }
    }

    static getFullName() {
        if (localStorage.getItem('_bucketlist_key_') === null || localStorage.getItem('_bucketlist_key_') === undefined) {
            return null;
        } else {
            let token = JSON.parse(localStorage.getItem('_bucketlist_key_'));
            return token.fullname;
        }
    }

    static getUserId() {
        if (localStorage.getItem('_bucketlist_key_') === null || localStorage.getItem('_bucketlist_key_') === undefined) {
            return null;
        } else {
            let token = JSON.parse(localStorage.getItem('_bucketlist_key_'));
            return token.userId;
        }
    }
}

import React from 'react';
import AuthServices from '../../utils/authorization';
import { createBrowserHistory } from 'history';
import { AdminType } from '../../constants/allConstants';

function ProtectionHOC(ProtectedRoute) {
    return class ProtectedHOC extends React.Component {


        render() {
            //check admin priviledgr
            //|| AuthServices.getPersonType() !== AdminType
            if (AuthServices.isUserAlreadyLoggedIn() === false) {
                createBrowserHistory().push('/login');
                createBrowserHistory().go();
            } else {
                return <ProtectedRoute {...this.props} />
            }
        }
    }
}

export default ProtectionHOC;
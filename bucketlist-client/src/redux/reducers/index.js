import { combineReducers } from 'redux'
import { bucketlistReducer } from './bucklistReducer';
import { accountReducer } from './accountReducer';
import { bucketlistItemReducer } from './bucklistitemReducer';

export default combineReducers({
    bucketlist: bucketlistReducer,
    item: bucketlistItemReducer,
    account: accountReducer
})
import axios from 'axios'
import {getRedirectPath} from '../util'
// types
const REGISTER_SUCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    redirectTo:'',
    msg: '',
    isAuth: '',
    user: '',
    pwd: '',
    type: ''
}


// reducer
export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCESS:
            return {
                ...state,
                msg: '',
                redirectTo:getRedirectPath(action.payload),
                isAuth: true,
                ...action.payload
            }
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        default:
            return state
    }

}

function registerSuccess(data) {
    return {type: REGISTER_SUCESS, payload: data}
}

function errorMsg(msg) {
    return {msg, type: ERROR_MSG}
}

// action
export function register({user, pwd, type, repwd}) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repwd) {
        return errorMsg('密码和确认密码不同')
    }
    return dispatch => {
        axios.post('/user/register', {user, pwd, type})
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(registerSuccess({user, pwd, type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
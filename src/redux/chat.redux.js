import io from 'socket.io-client'
import axios from 'axios'

const socket = io('ws://localhost:9000',{transports: ['websocket']})

// types
const MSG_LIST = 'MSG_LIST'
const MSG_RECV = 'MSG_RECV'
const MSG_READ = 'MSG_READ'


const initState = {
    chatmsg:[],
    unread:0
}

// reducer
export function chat(state=initState,action){
    switch (action.type) {
        case MSG_LIST:
            return {
                ...state,
                chatmsg: action.payload,
                unread: action.payload.filter(v=>!v.read).length
            }
        case MSG_RECV:
            return {...state,chatmsg:[...state.chatmsg,action.payload]}
        case MSG_READ:
        default:
            return state

    }
}

function msgList(msgs){
    return {type:MSG_LIST,payload:msgs}
}

function msgRecv(msg){
    return {type:MSG_RECV,payload: msg}
}

// action
export function recvMsg(){
    return dispatch=>{
        socket.on('recvmsg',function(data){
            dispatch(msgRecv(data))
        })
    }
}
export function sendMsg(from,to,msg){
    console.log(from,to,msg)
    return dispatch=>{
        socket.emit('sendMsg',{from,to,msg})
    }
}
export function getMsgList(){
    return dispatch=>{
        axios.get('/user/getmsglist')
            .then(res=>{
                if(res.state===200&&res.data.code===0){
                    dispatch(msgList(res.data.msgs))
                }
            })
    }
}
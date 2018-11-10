import React, {Component} from 'react'
// import io from 'socket.io-client'
import {List,InputItem} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsgList,sendMsg,recvMsg} from "../../redux/chat.redux"


// const socket = io('ws://localhost:9000',{transports: ['websocket']})

@connect(
    state => state,
    {getMsgList,sendMsg,recvMsg}
)
class Chat extends Component {
    constructor(props){
        super(props)
        this.state={
            text:'',
            msg:[]
        }
    }
    handleSubmit(){
        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        console.log(msg)
        this.props.sendMsg(from,to,msg)
        this.setState({text:''})
        // console.log(this.state)
        // socket.emit('sendMsg',this.state)
        // this.setState({text:''})
    }
    componentDidMount(){
        this.props.getMsgList()
        this.props.recvMsg()
        // socket.on('everyone',(data)=>{
        //     console.log(data)
        //     this.setState({
        //         msg:[...this.state.msg,data.text]
        //     })
        // })
    }
    render() {
        return (
            <div>
                {this.state.msg.map(v=>(
                    v?<div key={v}>{v}</div>:null
                ))}
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder="请输入信息"
                            value={this.state.text}
                            onChange={v=>{
                                this.setState({text:v})
                            }}
                            extra={<span onClick={()=>this.handleSubmit()}>发送</span> }
                        >信息</InputItem>
                    </List>
                </div>
            </div>

        )
    }
}

export default Chat
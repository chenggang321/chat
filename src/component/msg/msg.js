import React, {Component} from 'react'
import {connect} from 'react-redux'
import {List} from 'antd-mobile'

@connect(
    state => state
)
class Msg extends Component {
    getLast(arr){
        return arr[arr.length-1]
    }
    render() {
        const msgGroup = {}
        this.props.chat.chatmsg.forEach(v=>{
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v)
        })
        const chatList = Object.values(msgGroup)
        const Item = List.Item
        const Brief = Item.Brief
        const userid = this.props.user._id
        return (
            <div>
                {chatList.map(v=>{
                    const lastItem = this.getLast(v)
                    const targetId = v[0].from === userid ? v[0].to:v[0].from
                    const userinfo = this.props.chat.users[targetId]
                    const name = userinfo ? userinfo.name : ''
                    const avatar = userinfo ? userinfo.avatar : ''
                    return(
                        <List key={lastItem._id}>
                            <Item thumb={require(`../img/${avatar}.png`)}>
                                {lastItem.content}
                                <Brief>{name}</Brief>
                            </Item>
                        </List>)
                })}
            </div>
        )
    }
}

export default Msg
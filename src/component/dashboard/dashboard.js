import React, {Component} from 'react'
import {Route, Switch,Redirect} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import NavLinkBar from '../navLinkBar/navLinkBar'
import Boss from '../boss/boss'
import User from '../user/user'
import Home from '../home/home'
import {getMsgList,recvMsg} from "../../redux/chat.redux"
import Msg from '../msg/msg'


@connect(
    state => state,
    {getMsgList,recvMsg}

)
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            fullScreen: false,
        }
    }

    componentDidMount() {
        if(!this.props.chat.chatmsg.length){
            this.props.getMsgList()
            this.props.recvMsg()
        }
    }

    render() {
        const {pathname} = this.props.location
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'icon-UserSettings',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'user'
            },
            {
                path: '/user',
                text: 'boss',
                icon: 'icon-boss',
                title: 'Boss列表',
                component: User,
                hide: user.type === 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'icon-msg',
                title: '消息列表',
                component: Msg
            },
            {
                path: '/me',
                text: '我',
                icon: 'icon-home',
                title: '个人中心',
                component: Home
            }
        ]
        const currentNavList = navList.find(v => v.path === pathname)
        return currentNavList?(
            <div>
                <NavBar
                    mode="dark"
                    className="fixed-header"
                >{currentNavList.title}</NavBar>
                <div style={{marginTop:45}}>
                    <Switch>
                        {navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}/>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={navList}/>
            </div>
        ):<Redirect to={'/login'}/>
    }
}

export default Dashboard
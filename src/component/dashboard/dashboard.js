import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import NavLinkBar from '../navLinkBar/navLinkBar'


function Boss() {
    return <div style={{height:'400px'}}>Boss</div>
}

function User() {
    return <h2>User</h2>
}

function Msg() {
    return <h2>Msg</h2>
}

function Home() {
    return <h2>Home</h2>
}

@connect(
    state => state
)
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            fullScreen: false,
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
        return (
            <div>
                <NavBar
                    mode="dark"
                >{navList.find(v => v.path === pathname).title}</NavBar>
                <Switch>
                    <Route path='/boss' component={Boss}/>
                    <Route path='/user' component={User}/>
                    <Route path='/msg' component={Msg}/>
                    <Route path='/me' component={Home}/>
                </Switch>
                <NavLinkBar data={navList}/>
            </div>
        )
    }
}

export default Dashboard
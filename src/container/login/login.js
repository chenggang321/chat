import React, {Component} from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, Button, WingBlank, WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'
import ChatForm from '../../component/chatForm/chatForm'
// 高阶函数
// function hello(){
//     console.log('hello')
// }
//
// function WrapperHello(fn){
//     return function(){
//         console.log('before')
//         fn()
//         console.log('after')
//     }
// }
//
// hello = WrapperHello(hello)
//
// hello()

/*function WrapperHello(Comp){
    // 反向继承
    return class WrapComp extends Comp{
        componentDidMount(){
            console.log('高阶组件新增生命周期')
        }
        render(){
            return <Comp/>
        }
    }
    // 属性代理
    // return class WrapperComp extends Component{
    //     render(){
    //         return (<div>
    //             <p>这是高阶组件</p>
    //             <Comp {...this.props}/>
    //         </div>)
    //     }
    // }
}

@WrapperHello
class Hello extends Component{
    render(){
        return <h2>hello</h2>
    }
}*/



const Item = List.Item

@connect(
    state => state.user,
    {login}
)
@ChatForm
class Login extends Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin() {
        this.props.login(this.props.state)
    }

    register() {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                {this.props.redirectTo && this.props.redirectTo !== '/login'
                    ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <WingBlank>
                    <List>
                        {this.props.msg
                            ? <p className="err-msg">{this.props.msg}</p> : null}
                        <Item>
                            <InputItem
                                onChange={v => this.props.handleChange('user', v)}
                            >用户</InputItem>
                            <WhiteSpace/>
                            <InputItem
                                type="password"
                                onChange={v => this.props.handleChange('pwd', v)}
                            >密码</InputItem>
                        </Item>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleLogin}>登陆</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login
import React,{Component} from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,Button,WingBlank,WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'


const Item = List.Item

@connect(
    state => state.user,
    {login}
)
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(){
        this.props.login(this.state)
    }

    register(){
        this.props.history.push('/register')
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }
    render(){
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <List>
                    {this.props.msg ? <p className="err-msg">{this.props.msg}</p> : null}
                    <Item>
                        <InputItem
                            onChange={v => this.handleChange('user', v)}
                        >用户</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            type="password"
                            onChange={v => this.handleChange('pwd', v)}
                        >密码</InputItem>
                    </Item>
                </List>
                <WingBlank>
                    <Button type="primary" onClick={this.handleLogin}>登陆</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login
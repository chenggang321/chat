import React,{Component} from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,Button,WingBlank,WhiteSpace} from 'antd-mobile'


const Item = List.Item

class Login extends Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
    }
    register(){
        console.log(this.props)
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                <Logo/>
                <List>
                    <Item>
                        <InputItem>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
                    </Item>
                </List>
                <WingBlank>
                    <Button type="primary">登陆</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login
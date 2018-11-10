import React, {Component} from 'react'
import Logo from '../../component/logo/logo'
import {
    List,
    InputItem,
    Radio,
    Button,
    WingBlank,
    // WhiteSpace
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/user.redux'
import ChatForm from '../../component/chatForm/chatForm'


const Item = List.Item
const RadioItem = Radio.RadioItem

@connect(
    state => state.user,
    {register}
)
@ChatForm
class Register extends Component {
    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
    }

    componentDidMount(){
        this.props.handleChange('type','user')
    }

    handleRegister() {
        this.props.register(this.props.state)
    }

    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <List>
                    {this.props.msg ? <p className="err-msg">{this.props.msg}</p> : null}
                    <Item>
                        <InputItem
                            onChange={v => this.props.handleChange('user', v)}
                        >用户</InputItem>
                        <InputItem
                            type="password"
                            onChange={v => this.props.handleChange('pwd', v)}
                        >密码</InputItem>
                        <InputItem
                            type="password"
                            onChange={v => this.props.handleChange('repwd', v)}
                        >确认密码</InputItem>
                        <RadioItem
                            checked={this.props.state.type === 'user'}
                            onClick={() => this.props.handleChange('type', 'user')}
                        >
                            牛人
                        </RadioItem>
                        <RadioItem
                            checked={this.props.state.type === 'boss'}
                            onClick={() => this.props.handleChange('type', 'boss')}
                        >
                            BOSS
                        </RadioItem>
                    </Item>
                    <WingBlank>
                        <Button type="primary" onClick={this.handleRegister}>注册</Button>
                    </WingBlank>
                </List>
            </div>
        )
    }
}

export default Register
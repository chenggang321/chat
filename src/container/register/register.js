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


const Item = List.Item
const RadioItem = Radio.RadioItem

@connect(
    state => state.user,
    {register}
)
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repwd: '',
            type: 'user' // or boss
        }
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    handleRegister() {
        this.props.register(this.state)
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
                            onChange={v => this.handleChange('user', v)}
                        >用户</InputItem>
                        <InputItem
                            type="password"
                            onChange={v => this.handleChange('pwd', v)}
                        >密码</InputItem>
                        <InputItem
                            type="password"
                            onChange={v => this.handleChange('repwd', v)}
                        >确认密码</InputItem>
                        <RadioItem
                            checked={this.state.type === 'user'}
                            onClick={() => this.handleChange('type', 'user')}
                        >
                            牛人
                        </RadioItem>
                        <RadioItem
                            checked={this.state.type === 'boss'}
                            onClick={() => this.handleChange('type', 'boss')}
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
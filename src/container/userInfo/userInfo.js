import React, {Component} from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatarSelector/avatarSelector'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
    state => state.user,
    {update}
)
class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: ''
        }
    }

    onChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    render() {
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
                {redirect && redirect !== path
                    ? <Redirect to={this.props.redirectTo}/>
                    : null}
                <NavBar mode="dark">用户信息页</NavBar>
                <AvatarSelector
                    selectAvatar={(imgName) => {
                        this.setState({
                            avatar: imgName
                        })
                    }}
                />
                <InputItem onChange={v => this.onChange('title', v)}>求职职位</InputItem>
                <TextareaItem
                    title="个人简介"
                    onChange={v => this.onChange('desc', v)}
                    rows={3}
                    autoHeight={true}
                />
                <Button
                    type='primary'
                    onClick={() => {
                        this.props.update(this.state)
                    }}
                >保存</Button>
            </div>
        )
    }
}

export default UserInfo
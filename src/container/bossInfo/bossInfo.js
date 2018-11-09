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
class BossInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            company: '',
            money: '',
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
                <NavBar mode="dark">Boss信息页</NavBar>
                <AvatarSelector
                    selectAvatar={(imgName) => {
                        this.setState({
                            avatar: imgName
                        })
                    }}
                />
                <InputItem onChange={v => this.onChange('title', v)}>招聘职位</InputItem>
                <InputItem onChange={v => this.onChange('company', v)}>公司名称</InputItem>
                <InputItem onChange={v => this.onChange('money', v)}>职位薪资</InputItem>
                <TextareaItem
                    title="职位要求"
                    onChange={v => this.onChange('desc', v)}
                    rows={3}
                    autoHeight={true}
                >职位要求</TextareaItem>
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

export default BossInfo
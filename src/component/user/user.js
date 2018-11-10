import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserList} from "../../redux/chatuser.redux"
import UserCard from '../usercard/usercard'

@connect(
    state=>state.chatuser,
    {getUserList}
)
class User extends Component {
    componentDidMount() {
        this.props.getUserList('boss')
    }

    render() {
        return (
            <div>
                <UserCard userList={this.props.userList}/>
            </div>
        )
    }
}

export default User
import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from './Auth.redux'

@connect(
    state => state.auth,
    {login}
)
class Auth extends Component {
    render() {
        return (
            <div>
                {this.props.isAuth ? <Redirect to='/dashboard/'/> : null}
                <h2>你没有权限!</h2>
                <button onClick={this.props.login}>登陆</button>
            </div>
        )
    }
}

export default Auth
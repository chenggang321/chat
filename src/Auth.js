import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login,getUserData} from './Auth.redux'
// import axios from 'axios'

@connect(
    state => state.auth,
    {login,getUserData}
)
class Auth extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         data:{}
    //     }
    // }
    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return (
            <div>
                <h2>user:{this.props.user}---age:{this.props.age}</h2>
                {this.props.isAuth ? <Redirect to='/dashboard/'/> : null}
                <h2>你没有权限!</h2>
                <button onClick={this.props.login}>登陆</button>
            </div>
        )
    }
}

export default Auth
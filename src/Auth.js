import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from './Auth.redux'
import axios from 'axios'

@connect(
    state => state.auth,
    {login}
)
class Auth extends Component {
    componentDidMount(){
        axios.get('/data').then((res) => {
            console.log(res.data)
            if(res.status === 200){
                this.setState({data:res.data})
            }
        })
    }
    render() {
        return (
            <div>
                <h2>user{this.data.user}</h2>
                {this.props.isAuth ? <Redirect to='/dashboard/'/> : null}
                <h2>你没有权限</h2>
                <button onClick={this.props.login}>登陆</button>
            </div>
        )
    }
}

export default Auth
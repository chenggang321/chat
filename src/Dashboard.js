import React, {Component} from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import App from './App'
import TabOne from './TabOne'
import TabTwo from './TabTwo'
import {logout} from './Auth.redux'

@connect(
    state => state.auth,
    {logout}
)
class Dashboard extends Component {
    render() {
        const match = this.props.match
        const redirectToLogin = <Redirect to='/login'/>
        const app = (
            <div>
                {this.props.isAuth ?
                    <button onClick={this.props.logout}>注销</button> : null}
                <ul>
                    <li><Link to={`${match.url}`}>首页</Link></li>
                    <li><Link to={`${match.url}/tabOne`}>导航一</Link></li>
                    <li><Link to={`${match.url}/tabTwo`}>导航二</Link></li>
                </ul>
                <Route path={`${match.url}`} exact component={App}/>
                <Route path={`${match.url}/tabOne`} component={TabOne}/>
                <Route path={`${match.url}/tabTwo`} component={TabTwo}/>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
    BrowserRouter,
    Route,
    // Redirect,
    Switch
} from 'react-router-dom'

import reducers from './reducers'
import './config'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authRoute/authRoute'
import './index.css'
import BossInfo from './container/bossInfo/bossInfo'
import UserInfo from './container/userInfo/userInfo'
import Dashboard from './component/dashboard/dashboard'

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

// boss user me msg 4个页面
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute/>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/bossInfo" component={BossInfo}/>
                    <Route path="/userInfo" component={UserInfo}/>
                    <Route component={Dashboard}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);




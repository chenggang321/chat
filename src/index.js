import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
    BrowserRouter,
    Route,
    // Redirect,
    // Switch
} from 'react-router-dom'

import reducers from './reducers'
import './config'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authRoute/authRoute'
import './index.css'

const store = createStore(reducers, applyMiddleware(thunk))
function Boss(){
    return <h2>Boss页面</h2>
}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/boss" component={Boss}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);




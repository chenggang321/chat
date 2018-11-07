import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Auth}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Redirect to='/dashboard'/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);




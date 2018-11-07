import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {counter} from './index.redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import TabOne from './TabOne'
import TabTwo from './TabTwo'


const store = createStore(counter, applyMiddleware(thunk))

// class Test extends React.Component {
//     render() {
//         console.log(this.props)
//         return '<h2>测试组件</h2>'
//     }
// }

// class NotFound extends React.Component {
//     render() {
//         return '<h2>404</h2>'
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/tabOne'>标签一</Link></li>
                    <li><Link to='/tabTow'>标签二</Link></li>
                </ul>
                <Switch>
                    <Route path='/' exact component={App}/>
                    {/*<Route path='/:id' component={Test}/>*/}
                    <Route path='/tabOne' component={TabOne}/>
                    <Route path='/tabTow' component={TabTwo}/>
                    <Redirect to='/'  component={App}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);




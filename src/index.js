import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from 'redux'
import {counter} from './index.redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'


const store = createStore(counter,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);




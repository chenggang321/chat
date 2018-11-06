import React, {Component} from 'react';
import {increment, decrement} from './index.redux'

class App extends Component {
    render() {
        const store = this.props.store
        const num = store.getState()
        return (
            <div>
                <h1>Hello World! {num}</h1>
                <button onClick={() => store.dispatch(increment())}>增加</button>
                <button onClick={() => store.dispatch(decrement())}>减少</button>
            </div>
        );
    }
}

export default App;

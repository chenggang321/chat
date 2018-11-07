import React, {Component} from 'react';
import {connect} from 'react-redux'
import {increment, decrement, async} from './index.redux'


@connect(
    // 传入参数
    state=>({num: state.counter}),
    // 传入方法
    {increment, decrement, async}
)
class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World! {this.props.num}</h1>
                <button onClick={this.props.increment}>增加</button>
                <button onClick={this.props.decrement}>减少</button>
                <button onClick={this.props.async}>异步</button>
            </div>
        );
    }
}

export default App

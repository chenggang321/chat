import React, {Component} from 'react';
import {connect} from 'react-redux'
import {increment, decrement, async} from './index.redux'

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

const mapStateToProps = (state) => {
    return {
        num: state
    }
}

const mapDispatchToProps = {increment,decrement,async}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

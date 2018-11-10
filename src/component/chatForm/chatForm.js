import React, {Component} from 'react'

function ChatForm(Comp) {
    return class WrapperComp extends Component {
        constructor(props) {
            super(props)
            this.state = {}
            this.handleChange = this.handleChange.bind(this)
        }

        handleChange(key, value) {
            this.setState({
                [key]: value
            })
        }

        render() {
            return <Comp
                {...this.props}
                handleChange={this.handleChange}
                state={this.state}
            />
        }
    }
}

export default ChatForm
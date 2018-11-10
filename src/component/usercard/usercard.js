import React, {Component} from 'react'
import PropTypes from "prop-types"
import {Card, WingBlank, WhiteSpace} from 'antd-mobile'

class UserCard extends Component {
    static propTypes = {
        userList:PropTypes.array.isRequired
    }
    handleClick(v){
        console.log('click')
        this.props.history.push(`/chat/${v.user}`)
    }
    render() {
        return (
            <WingBlank>
                {this.props.userList.map(v => (
                    v.avatar
                        ? (<div key={v._id}>
                            <WhiteSpace/>
                            <Card
                                onClick={()=>this.handleClick}
                            >
                                <Card.Header
                                    title={v.user}
                                    thumb={require(`../img/${v.avatar}.png`)}
                                    extra={<span>{v.title}</span>}
                                />
                                <Card.Body>
                                    {v.type === 'boss'?<div>公司：{v.company}</div>:null}
                                    {v.desc.split('\n').map(d=>(
                                        <div key={d}>{d}</div>
                                    ))}
                                    {v.type === 'boss'?<div>薪资：{v.money}</div>:null}
                                </Card.Body>
                            </Card>
                        </div>)
                        : null
                ))}
            </WingBlank>
        )
    }
}

export default UserCard
import React, {Component} from 'react'
import PropTypes from "prop-types";
import {TabBar} from 'antd-mobile'
import '../font/iconfont.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

@withRouter
@connect(
    state => state.chat
)
class NavLinkBar extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }

    render() {
        const navList = this.props.data.filter(v => !v.hide)
        const {pathname} = this.props.location
        return (
            <TabBar>
                {navList.map(v => (
                    <TabBar.Item
                        badge={v.path === '/msg' ? this.props.unread : 0}
                        key={v.path}
                        title={v.text}
                        icon={<i
                            style={{fontSize: 25}}
                            className={`icon iconfont ${v.icon}`}
                        />}
                        selectedIcon={<i
                            style={{fontSize: 25, color: 'rgb(16, 142, 233)'}}
                            className={`icon iconfont ${v.icon}`}
                        />}
                        selected={pathname === v.path}
                        onPress={() => {
                            this.props.history.push(v.path)
                        }}
                    >
                    </TabBar.Item>
                ))}
            </TabBar>
        )
    }
}


export default NavLinkBar
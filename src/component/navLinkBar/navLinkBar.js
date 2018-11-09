import React, {Component} from 'react'
import PropTypes from "prop-types";
import {TabBar} from 'antd-mobile'
import '../font/iconfont.css'
import {withRouter} from 'react-router-dom'

@withRouter
class NavLinkBar extends Component {
    static propTypes = {
        data:PropTypes.array.isRequired
    }
    render() {
        const navList = this.props.data.filter(v=>!v.hide)
        const {pathname} = this.props.location
        return (
            <TabBar>
                {navList.map(v=>(
                    <TabBar.Item
                        key={v.path}
                        title={v.text}
                        icon={<i style={{fontSize:25}} className={`icon iconfont ${v.icon}`}></i>}
                        selectedIcon={<i style={{fontSize:25,color:'rgb(16, 142, 233)'}} className={`icon iconfont ${v.icon}`}></i>}
                        selected={pathname === v.path}
                        onPress={()=>{
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
import React, {Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import { NavBar,TabBar } from 'antd-mobile'



function Boss(){
    return <h2>Boss</h2>
}
function User(){
    return <h2>User</h2>
}
class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                >Head</NavBar>
                <Switch>
                    <Route path='/boss' component={Boss}/>
                    <Route path='/user' component={User}/>
                </Switch>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="top"
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        badge={1}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default Dashboard
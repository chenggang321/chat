import React, {Component} from 'react'
import { Grid,List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends Component {
    static propTypes = {
        selectAvatar:PropTypes.func.isRequired
    }

    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        const avatarList = `boy,girl,man,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,woman,zebra`
                .split(',')
                .map(v=>({
                    icon:require(`../img/${v}.png`),
                    text:v
                }))
        const gridHeader = this.state.icon ? (
            <div>
                <span>已选择头像</span>
                <img style={{width:20}} src={this.state.icon} alt="头像"/>
            </div>
        ):<div>请选择头像</div>
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid
                        data={avatarList}
                        activeStyle={false}
                        columnNum={5}
                        onClick={ele=>{
                            this.setState(ele)
                            this.props.selectAvatar(ele.text)
                        }}
                    />
                </List>
            </div>
        )
    }
}

export default AvatarSelector
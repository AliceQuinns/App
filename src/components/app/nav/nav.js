/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react';
import {Flex,Drawer} from 'antd-mobile';
import icon from '../../../images/nav_menu.png';
import './nav.css';
import icon_right from '../../../images/nav_user.png';

class Nav extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          open: false,
          z_index: '-1'
      }
      this.onOpenChange = this.onOpenChange.bind(this);
  }
  onOpenChange = () => {
      this.setState({open: !this.state.open,z_index: this.state.open ? -1: 1});
  }
  render() {
    return (
        <div className="nav">
          <Flex justify="end" align="stretch" >
            <Flex.Item onClick={this.onOpenChange}><img src={icon} className="icon-left" alt="icon"/></Flex.Item>
            <Flex.Item><p className="title animated">Alice</p></Flex.Item>
            <Flex.Item className="textRight"><img src={icon_right} className="icon-right" alt="icon"/></Flex.Item>
          </Flex>
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight - 200 ,position:'fixed',zIndex: this.state.z_index}}
                contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 100 }}
                sidebar={<p>哈哈哈哈发生的菊花还是快点发贺卡收到</p>}
                open={this.state.open}
                onOpenChange={this.onOpenChange}
            >
                Alice
            </Drawer>
        </div>
    )
  }
}

export default Nav;
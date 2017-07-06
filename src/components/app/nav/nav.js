/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react';
import {Flex} from 'antd-mobile';
import icon from '../../../images/nav_menu.png';
import './nav.css';
import icon_right from '../../../images/nav_user.png';

class Nav extends React.Component {
  render() {
    return (
        <div className="nav">
          <Flex justify="end" align="stretch" >
            <Flex.Item><img src={icon} className="icon-left" alt="icon"/></Flex.Item>
            <Flex.Item><p className="title animated">Alice</p></Flex.Item>
            <Flex.Item className="textRight"><img src={icon_right} className="icon-right" alt="icon"/></Flex.Item>
          </Flex>
        </div>
    )
  }
}

export default Nav;
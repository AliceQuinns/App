/**
 * Created by Administrator on 2017/7/6.
 */
import React from 'react';
import './Drawer.css';
import {Flex} from 'antd-mobile';
import {Link} from 'react-router-dom';
import nav_user from '../../../images/nav_user.png'
import menu_hu from '../../../images/menu_hu.png'
import icong from '../../../images/icong.png'
import xin from '../../../images/xin.png'
import list from '../../../images/list.png'

class Drawer extends React.Component {
  render() {
    return (
        <div className="Drawermenu">
          <Flex>
            <Flex.Item><img src={nav_user} className="HeadPortrait" alt="icon"/></Flex.Item>
            <Flex.Item><h3 className="username">alice</h3></Flex.Item>
          </Flex>
          <ul className="menu_ul">
            <Link to='/Carousel'><li><img src={menu_hu} alt="icon"/><span>植物</span></li></Link>
            <li><img src={nav_user} alt="icon"/><span>用户中心</span></li>
            <li><img src={icong} alt="icon"/><span>通知</span></li>
            <li><img src={xin} alt="icon"/><span>我的收藏</span></li>
            <li><img src={list} alt="icon"/><span>设置</span></li>
          </ul>
        </div>
    )
  }
};

export default Drawer;
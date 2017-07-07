/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react';
import {Flex,Drawer} from 'antd-mobile';
import icon from '../../../images/nav_menu.png';
import Drawers from '../Drawer/Drawer';
import {Link} from 'react-router-dom';
import './nav.css';
import {nav} from '../../../api/api';
import icon_right from '../../../images/nav_user.png';

class Nav extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          open: false,
          z_index: 'none',
          infinite: "infinite"
      }
      this.onOpenChange = this.onOpenChange.bind(this);
  }
  onOpenChange = () => {
      this.setState({open: !this.state.open,z_index: this.state.open ? 'none': 'block',infinite: " "});
  }

  componentDidMount() {
    nav({method: 'GET', cache: 'reload'}).then((response)=>{console.log(response);})
  }

  render() {
    return (
        <div className="nav">
          <Flex justify="end" align="stretch" >
            <Flex.Item onClick={this.onOpenChange}>
              <img src={icon} className={`icon-left animated wobble ${this.state.infinite}`} alt="icon"/>
            </Flex.Item>
            <Flex.Item>
              <p className="title animated bounceInDown">Alice</p>
            </Flex.Item>
            <Flex.Item className="textRight">
              <Link to='/Square'><img src={icon_right} className="icon-right" alt="icon"/></Link>
            </Flex.Item>
          </Flex>
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight - 200 ,position:'fixed',display: this.state.z_index}}/* 总样式 */
                contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 100 }}/* 文本样式 */
                sidebar={<Drawers/>}/* 内容 */
                sidebarStyle={{  }}/* 侧边栏样式 */
                overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}/* 遮罩层样式 */
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
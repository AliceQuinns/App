/**
 * Created by Administrator on 2017/7/4.
 */
import React from 'react';
import {Flex,Button} from 'antd-mobile';
import icon from '../../images/nav_menu.png';
import './nav.css';
import icon_right from '../../images/nav_user.png';

class Click extends React.Component {
  constructor (props){
    super(props);
    this.state={item: 0,val:'您还未输入用户名',classarrer: ['animated','bounce']};
    this.clickitem=this.clickitem.bind(this);
  }

  clickitem () {
    let username = this.refs.input.value;
    localStorage.user = username;
    let item = this.state.item;
    item++;
    this.setState({item:item,val:username});
    alert("登录成功");
  }

  render() {
    return(
        <div>
          <p>{this.props.value}{this.state.item}</p>
          <input type="text" placeholder="请输入您的用户名" ref="input" className={this.state.classarrer.join(' ')}/>
          <p>{this.state.val}</p>
          <Button onClick={this.clickitem}>登录</Button>
          <video id="video" autoplay=""></video>
          <div><button id='picture' >PICTURE</button></div>
          <canvas id="canvas" width="640" height="480"></canvas>
        </div>
    )
  }

  componentDidMount(){
    if (!localStorage.user){
      alert('请输入您的用户名');
      return
    }
    alert(`欢迎您"${localStorage.user}"`);
  }

}

class Nav extends React.Component {
  render() {
    return (
        <div className="nav">
          <Flex justify="end" align="stretch" >
            <Flex.Item><img src={icon} className="icon-left" alt="icon"/></Flex.Item>
            <Flex.Item><p className="title animated bounce">Alice</p></Flex.Item>
            <Flex.Item className="textRight"><img src={icon_right} className="icon-right" alt="icon"/></Flex.Item>
          </Flex>
          <Click value="点击计数工具"/>
        </div>
    )
  }
}

export default Nav;
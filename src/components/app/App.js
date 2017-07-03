import React, { Component } from 'react';
import {Button} from 'antd-mobile';

const List = (props) => (
  <ul>
      <li>哈哈哈<Button>点击</Button></li>
  </ul>
);

class App extends Component {
  render() {
    return (
        <div>
            <h3>代办列表</h3>
            <List/>
        </div>
    );
  }
}

export default App;

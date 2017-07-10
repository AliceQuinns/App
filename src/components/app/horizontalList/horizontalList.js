/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react';
import './horizontalList.css';
import {Flex} from 'antd-mobile';

class HorizontalList extends React.Component {
  constructor(props) {
    super(props)
    this.name = '';
  }
  render() {
    return (
        <div className="horizontalList">
          <Flex>
            <Flex.Item>1</Flex.Item>
            <Flex.Item>2</Flex.Item>
            <Flex.Item>3</Flex.Item>
            <Flex.Item>4</Flex.Item>
          </Flex>
        </div>
    )
  }
}

export default HorizontalList;
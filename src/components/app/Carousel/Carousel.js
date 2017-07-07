/**
 * Created by Administrator on 2017/7/7.
 */
import React from 'react';
import './Carousel.css';
import {Carousel} from 'antd-mobile';
import srcone from '../../../images/carent.jpg';
import srctwo from '../../../images/bizi1.jpg';

class Carousels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['', '', ''],
      initialHeight: 200,
    }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  };
  render() {
    return (
        <Carousel
            className="my-carousel"
            autoplay={true}
            dots={true}
            infinite
            selectedIndex={1}/* 当前索引 */
            swipeSpeed={35}
            dotStyle={{width: '8px', height: '8px', backgroundColor: '#FFF', margin: '4px', border: '1px solid #CCC',
              borderRadius: '8px'}}
            dotActiveStyle={{backgroundColor: '#fd9e20',width: '8px', height: '8px',margin: '4px',border: '1px solid #CCC', borderRadius: '8px'}}
        >
          <img src={srcone} alt="icon"/>
          <img src={srctwo} alt="icon"/>
        </Carousel>
    )
  }
}

export default Carousels;
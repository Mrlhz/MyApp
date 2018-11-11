import React, {Component} from 'react';
import './reset.css'
import './index.css';

import imgURL from '../../images/fl02.png'; // React 加载本地图片
import NewsItem from '../NewsItem/index';

import {data} from '../../mock/news';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '../../images/a1.png',
      data: data.items
    };
  }

  render() {
    console.log(this.state.data);
    const list = this.state.data.map( (item) =>
      <NewsItem item={item}  key={item.id}/>
    );
    return (
      <div className="index">
        <div className="slider">
          <img className="slider_img" src={imgURL} alt=""/>
        </div>
        {/* circle_nav */}
        <div className="circle_nav">
          <ul className="circle_nav_list">
            <li><a href="#" className="fresh"></a><span>新鲜事</span></li>
            <li><a href="#" className="anecdote"></a><span>趣闻</span></li>
            <li><a href="#" className="read"></a><span>阅读</span></li>
            <li><a href="#" className="subject"></a><span>专题</span></li>
            <li><a href="#" className="subscription"></a><span>订阅</span></li>
            <li><a href="#" className="column"></a><span>专栏</span></li>
            <li><a href="#" className="discuss"></a><span>讨论</span></li>
            <li><a href="javascript:void(0)" className="more"></a><span>更多</span></li>
          </ul>
        </div>
        {/* news_list */}
        <div className="content">
          <ul className="list">
            { list }
          </ul>
        </div>
      </div>
    )
  }
}

export default Index;

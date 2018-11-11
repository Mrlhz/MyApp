import React, {Component} from 'react';
import './reset.css'
import './index.css';

import imgURL from '../../images/fl02.png'; // React 加载本地图片

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '../../images/a1.png'
    };
  }

  render() {
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
            <li className="list-item-desc list-item-thumbed">
              <div className="list_info_nav">
                <div className="list_info">
                  <img src={require('../../images/a1.png')} alt=""/>
                  <span className="list_info_name">Super invincible 菁</span>
                </div>
                <div className="list_tag">新鲜事</div>
              </div>
              <div className="row">
                <div className="sm-8 list_main">
                  <h3 className="list-item-hd"><a href="#" className="list_link">十一长假哪也不去，宅在家里看电影！</a></h3>
                  <div
                    className="list-item-text">每逢长假，总有那么一群人选择远离人山人海，静静地呆在家，坐在电脑电视前。长时间的工作学习让他们感觉很疲惫，对什么都提不起劲，打开电脑却不知道干什么好
                  </div>
                </div>
                <div className="sm-4 list-thumb">
                  <a href="##" className="">
                    <img src={require('../../images/q1.png')} className="list_img" alt=""/>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Index;

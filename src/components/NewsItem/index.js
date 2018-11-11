import React, {Component} from 'react';

class NewsItem extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <li className="list-item-desc list-item-thumbed">
        <div className="list_info_nav">
          <div className="list_info">
            <img src={require('../../images/a1.png')} alt=""/>
            <span className="list_info_name">{this.props.item.info_name}</span>
          </div>
          <div className={this.props.item.tag}>{this.props.item.tag_name}</div>
        </div>
        <div className="row">
          <div className="sm-8 list_main">
            <h3 className="list-item-hd"><a href="#" className="list_link">{this.props.item.title}</a></h3>
            <div
              className="list-item-text">{this.props.item.text}
            </div>
          </div>
          <div className="sm-4 list-thumb">
            <a href="##" className="">
              <img src={require('../../images/q1.png')} className="list_img" alt=""/>
            </a>
          </div>
        </div>
      </li>
    )
  }
}

export default NewsItem;

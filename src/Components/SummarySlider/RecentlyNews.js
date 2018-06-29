import React, { Component } from 'react';


class RecentlyNews extends Component {
  render() {
    return (
        <div className="col-md-4">
        <a href="#" className="featured text-center animate-box" style={{backgroundImage: "url(images/img_bg_3.jpg)"}}>
            <div className="desc">
                <span className="date">Dec 25, 2016</span>
                <h3>Every Start has an End</h3>
                <span className="category">Inspirational</span>
            </div>
        </a>
        <a href="#" className="featured text-center animate-box" style={{backgroundImage: "url(images/img_bg_2.jpg)"}}>
            <div className="desc">
                <span className="date">Dec 25, 2016</span>
                <h3>Most Beautiful Website in 2016</h3>
                <span className="category">Inspirational</span>
            </div>
        </a>
    </div>
    );
  }
}

export default RecentlyNews;

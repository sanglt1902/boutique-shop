import React, { Component } from 'react';
import Social from './Social';

class TopMenu extends Component {
  render() {
    return (
        <div className="top-menu">
        <div className="container">
            <div className="row">
                <div className="col-sm-7 text-left menu-1">
                    <ul>
                        <li className="active">
                            <a href="index.html">Trang chủ</a>
                        </li>
                        <li className="has-dropdown">
                            <a href="blog.html">Blog</a>
                            <ul className="dropdown">
                                <li>
                                    <a href="#">Web Design</a>
                                </li>
                                <li>
                                    <a href="#">eCommerce</a>
                                </li>
                                <li>
                                    <a href="#">Branding</a>
                                </li>
                                <li>
                                    <a href="#">API</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="contact.html">Liên hệ</a>
                        </li>
                    </ul>
                </div>
                <Social/>
            </div>
        </div>
    </div>
    );
  }
}

export default TopMenu;

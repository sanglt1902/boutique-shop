import React, { Component } from 'react';


class Social extends Component {
  render() {
    return (
        <div className="col-sm-5">
        <ul className="fh5co-social-icons">
            <li>
                <a href="#">
                    <i className="icon-twitter-with-circle"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="icon-facebook-with-circle"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="icon-linkedin-with-circle"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="icon-dribbble-with-circle"></i>
                </a>
            </li>
        </ul>
    </div>
    );
  }
}

export default Social;

import React, { Component } from 'react';


class NewEventsSlider extends Component {
    render() {
        return (
            <div className="col-md-8">
                <div className="flexslider animate-box">
                    <ul className="slides">
                        <li style={{backgroundImage: "url(images/img_bg_1.jpg)"}}>
                            <div className="overlay-gradient"></div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1 slider-text">
                                        <div className="slider-text-inner">
                                            <h1>Bước</h1>
                                            <h2>Free html5 templates Made by
                                    <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a>
                                            </h2>
                                            <p className="ct">
                                                <a href="#">Learn More
                                        <i className="icon-arrow-right"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{backgroundImage: "url(images/img_bg_2.jpg)"}}>
                            <div className="overlay-gradient"></div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1 slider-text">
                                        <div className="slider-text-inner">
                                            <h1>Minimal &amp; Clean Blog WordPress</h1>
                                            <h2>Free html5 templates Made by
                                    <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a>
                                            </h2>
                                            <p className="ct">
                                                <a href="#">Learn More
                                        <i className="icon-arrow-right"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{backgroundImage: "url(images/img_bg_3.jpg)"}}>
                            <div className="overlay-gradient"></div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1 slider-text">
                                        <div className="slider-text-inner">
                                            <h1>What Would You Like To Learn?</h1>
                                            <h2>Free html5 templates Made by
                                    <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a>
                                            </h2>
                                            <p className="ct">
                                                <a href="#">Learn More
                                        <i className="icon-arrow-right"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NewEventsSlider;

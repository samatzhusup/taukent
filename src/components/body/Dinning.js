import React, {Component} from 'react';
import mainSlider from '../mainSlider';
import Contact from "./PriceList";


class Dinning extends React.Component {
    render() {
        return (
            <div id="page">
                <section className="image-head-wrapper" style={{backgroundImage: 'url("images/banner2.jpg")'}}>
                    <div className="inner-wrapper">
                        <h1>dinning</h1>
                    </div>
                </section>
                <div className="clearfix"/>
                {/*dinning*/}
                <section className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-8 col-xs-12">
                                <h2 className="blog-title-head">Lorem Ipsum Dolor Sit amet</h2>
                                <p className="user-info">Posted by <a>Admin</a> in <a>General</a> | <a>10 Comments</a>
                                </p>
                                <div className="blog-image-single margin-top-small">
                                    <img src="images/banner2.png" className="img-responsive"/>
                                </div>
                                <p className="blog-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do </p>
                                <div className="clearfix"/>
                                <div className="single-bottom comment-form">
                                    <h3>Leave your Comment</h3>
                                    <form action="#" method="post">
                                        <input type="text" className="form-control" name="Name" placeholder="Name"
                                               required/>
                                        <input type="email" className="form-control" name="Email" placeholder="Email"
                                               required/>
                                        <textarea className="form-control" name="Message" placeholder="Message Here...."
                                                  required defaultValue={""}/>
                                        <input type="submit" className="submit-btn" defaultValue="Send"/>
                                    </form>
                                </div>
                            </div>
                            <aside className="col-md-3 col-sm-4 col-xs-12">
                                <div className="blog-list">
                                    <h4>Categories</h4>
                                    <ul>
                                        <li><a><i className="fa fa-caret-right"> </i>Lorem Ipsum is simply</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>Contrary to popular belief</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>It is a long established</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>There are many variations</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>But I must explain to you</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>At vero eos et accusamus</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>On the other hand</a></li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="blog-list">
                                    <h4>Archives List</h4>
                                    <ul>
                                        <li><a><i className="fa fa-caret-right"> </i>July (15)</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>Oct (20)</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>November (8)</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>December (25)</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>August (9)</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>July (15)</a></li>
                                        <li><a><i className="fa fa-caret-right"> </i>Mar (25)</a></li>
                                    </ul>
                                </div>
                                <div className="blog-list1">
                                    <h4>Popular Posts</h4>
                                    <div className="blog-list-top">
                                        <div className="blog-img">
                                            <a><img className="img-responsive" src="images/Home/img1.jpg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <p><a>Lorem ipsum dolor sit amet, consectetuer</a></p>
                                            <span className="link">
                        Sep 14, 2016
                      </span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="blog-list-top">
                                        <div className="blog-img">
                                            <a><img className="img-responsive" src="images/Home/img3.jpg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <p><a>Lorem ipsum dolor sit amet, consectetuer</a></p>
                                            <span className="link">
                        Sep 14, 2016
                      </span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="blog-list-top">
                                        <div className="blog-img">
                                            <a><img className="img-responsive" src="images/Home/img4.jpg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <p><a>Lorem ipsum dolor sit amet, consectetuer</a></p>
                                            <span className="link">
                        Sep 14, 2016
                      </span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="blog-list-top">
                                        <div className="blog-img">
                                            <a><img className="img-responsive" src="images/Home/img5.jpg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <p><a>Lorem ipsum dolor sit amet, consectetuer</a></p>
                                            <span className="link">
                        Sep 14, 2016
                      </span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
                {/*back to top-*/}
                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
                   id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>Top</span>
                </a>
            </div>
        )
    }
}

export default Dinning;
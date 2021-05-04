import React, {Component} from 'react';
import mainSlider from '../mainSlider';
import WinterEnter from "./WinterEnter";


class News extends React.Component {
    render() {
        return (
            <div id="page">
                <section className="image-head-wrapper" style={{backgroundImage: 'url("images/ banner5.jpg")'}}>
                    <div className="inner-wrapper">
                        <h1>News</h1>
                    </div>
                </section>
                <div className="clearfix"/>
                <section className="resort-overview-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
                                <div className="side-A">
                                    <div className="product-thumb">
                                        <div className="image">
                                            <a href="single-blog.html"><img alt="image" className="img-responsive"
                                                                            src="images/category1.png"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-B">
                                    <div className="product-desc-side">
                                        <h3><a href="single-blog.html">luxury spa</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc lorem nulla, ornare
                                            eu felis luctus non maximus vitae, portt neque. ipsum dolor sit amet, consec
                                            adipiscing elit.</p>
                                        <div className="links"><a href="single-blog.html">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"/>
                            <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-left">
                                <div className="side-A">
                                    <div className="product-thumb">
                                        <div className="image">
                                            <a href="single-blog.html"><img src="images/category2.png"
                                                                            className="img-responsive" alt="image"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-B">
                                    <div className="product-desc-side">
                                        <h3><a href="single-blog.html">Beatusish ingl</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc lorem nulla, ornare
                                            eu felis luctus non maximus vitae, portt neque. ipsum dolor sit amet, consec
                                            adipiscing elit.</p>
                                        <div className="links"><a href="single-blog.html">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"/>
                            <div className="col-md-12 offspace-45"/>
                            <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
                                <div className="side-A">
                                    <div className="product-desc-side">
                                        <h3><a href="single-blog.html">luxury room</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc lorem nulla, ornare
                                            eu felis luctus non maximus vitae, portt neque. ipsum dolor sit amet, consec
                                            adipiscing elit.</p>
                                        <div className="links"><a href="single-blog.html">Read more</a></div>
                                    </div>
                                </div>
                                <div className="side-B">
                                    <div className="product-thumb">
                                        <div className="image txt-rgt">
                                            <a className="arrow-left" href="single-blog.html"><img alt="imaga"
                                                                                                   className="img-responsive"
                                                                                                   src="images/category3.png"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"/>
                            <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-left">
                                <div className="side-A">
                                    <div className="product-desc-side">
                                        <h3><a href="single-blog.html">heaven seanery</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc lorem nulla, ornare
                                            eu felis luctus non maximus vitae, portt neque. ipsum dolor sit amet, consec
                                            adipiscing elit.</p>
                                        <div className="links"><a href="single-blog.html">Read more</a></div>
                                    </div>
                                </div>
                                <div className="side-B">
                                    <div className="product-thumb txt-rgt">
                                        <div className="image">
                                            <a className="arrow-left" href="single-blog.html"><img alt="imaga"
                                                                                                   className="img-responsive"
                                                                                                   src="images/category4.png"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"/>
                        </div>
                    </div>
                </section>
                {/*back to top-*/}
                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
                   id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>Top</span>
                </a>
            </div>)
    }
}

export default News;
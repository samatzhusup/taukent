import React, {Component} from 'react';
import mainSlider from '../mainSlider';


class Services extends React.Component {
    render() {
        return (
            <div id="page">
                {/*end*/}
                <section className="image-head-wrapper"
                         style={{backgroundImage: 'url("assets/css/images/banner3.jpg")'}}>
                    <div className="inner-wrapper">
                        <h1>About us</h1>
                    </div>
                </section>
                <div className="clearfix"/>
                <section className="about-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 about-left">
                                <p>Lorem <label>ipsum</label> dol <span>-sitamet</span></p>
                            </div>
                            <div className="col-md-7 about-right">
                                <h3>Lorem ipsum dolor sit amet, consec</h3>
                                <p>Donec bibendum massa metus, vel aliquet nunc varius eu. Curabitur nec scelerisque
                                    dui. Quisque mattis libero et enim ultricies gravida. Nulla ut commodo massa, eget
                                    tincidunt ligula. Vivamus eu ante tincidunt, fermentum risus nec, pharetra turpis.
                                    Donec rhoncus eros sed felis aliquet tincidunt. In consectetur tempor quam</p>
                                <ul className="list-unstyled list-inline">
                                    <li>Sed vitae facilisis nisi, in finibus lacus. Duis vel nulla orci.</li>
                                    <li>fringilla, at ultrices felis dignissim. Integer ultricies posuere odio</li>
                                    <li>Sed vestibulum mattis laoreet. Donec sollicitudin justo luctus nulla
                                        consectetur
                                    </li>
                                    <li>Nam dolor tellus, dictum sit amet libero eu, semper placerat massa.</li>
                                    <li>consectetur tempor quam, aliquam dignissim diam hendrerit nec. Cras sodales at
                                        nisl
                                    </li>
                                </ul>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                            </div>
                        </div>
                        <div className="clearfix"></div>
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

export default Services;
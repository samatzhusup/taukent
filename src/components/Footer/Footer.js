import React, {Component} from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div id="page">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12 width-set-50">
                                <div className="footer-details">
                                    <h4>Информация</h4>
                                    <ul className="list-unstyled footer-contact-list">
                                        <li>
                                            <i className="fa fa-map-marker fa-lg"/>
                                            <p>Shymkent,Kazakhstan</p>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone fa-lg"/>
                                            <p><a href="tel:+1-202-555-0100">+7 747 541 98 77</a></p>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope-o fa-lg"/>
                                            <p><a href="mailto:demo@info.com"> muxammederaliev@gmail.com</a></p>
                                        </li>
                                    </ul>
                                    <div className="footer-social-icon">
                                        <a href="#"><i className="fa fa-facebook"/></a>
                                        <a href="#"><i className="fa fa-twitter"/></a>
                                        <a href="#"><i className="fa fa-instagram"/></a>
                                        <a href="#"><i className="fa fa-google-plus"/></a>
                                        <a href="#"><i className="fa fa-youtube-play"/></a>
                                    </div>
                                    <div className="input-group" id="subscribe">
                                        <input type="text" className="form-control subscribe-box" defaultValue
                                               name="subscribe" placeholder="EMAIL ID"/>
                                        <span className="input-group-btn">
                      <button type="button" className="btn subscribe-button"><i
                          className="fa fa-paper-plane fa-lg"/></button>
                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 width-50 width-set-50">
                                <div className="footer-details">
                                    <h4>Страницы</h4>
                                    <ul className="list-unstyled footer-links">
                                        <li><a href="index.html">Главный</a></li>
                                        <li><a href="about.html">Прайсы</a></li>
                                        <li><a href="rooms.html">Rooms</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                      
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-details">
                                    <h4>Погода</h4>
                                    <div className="row">
                                        <div className="instagram-images">
                                            <div id="instafeed"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            2021 All right reserved. GTI <a
                            target="_blank">GTI - Ganzy Technology Industries</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;

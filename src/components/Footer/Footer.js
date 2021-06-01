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
                                    <h4>Связаться</h4>
                                    <ul className="list-unstyled footer-contact-list">
                                        <li>
                                            <i className="fa fa-map-marker fa-lg"/>
                                            <p>Шымкент, Казахстан</p>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone fa-lg"/>
                                            <p><a href="tel:+7 747 541 98 77">+7 747 541 98 77</a></p>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope-o fa-lg"/>
                                            <p><a href="mailto:muxammederaliev@gmail.com">muxammederaliev@gmail.com</a>
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="footer-social-icon">
                                        <a href="#"><i className="fa fa-facebook"/></a>
                                        <a href="#"><i className="fa fa-twitter"/></a>
                                        <a href="#"><i className="fa fa-instagram"/></a>
                                        <a href="#"><i className="fa fa-google-plus"/></a>
                                        <a href="#"><i className="fa fa-youtube-play"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 width-50 width-set-50">
                                <div className="footer-details">
                                    {/*<h4>explore</h4>*/}
                                    {/*<ul className="list-unstyled footer-links">*/}
                                    {/*    <li><a href="index.html">Home</a></li>*/}
                                    {/*    <li><a href="about.html">About</a></li>*/}
                                    {/*    <li><a href="rooms.html">Rooms</a></li>*/}
                                    {/*    <li><a href="gallery.html">Gallery</a></li>*/}
                                    {/*    <li><a href="#">Dinning</a></li>*/}
                                    {/*    <li><a href="news.html">News</a></li>*/}
                                    {/*    <li><a href="contact.html">Contact</a></li>*/}
                                    {/*</ul>*/}
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-details">
                                    <h4>Погода</h4>
                                    <iframe
                                        src="https://www.meteoblue.com/ru/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0/widget/three/turkestan_%d0%9a%d0%b0%d0%b7%d0%b0%d1%85%d1%81%d1%82%d0%b0%d0%bd_11473959?geoloc=fixed&nocurrent=0&noforecast=0&noforecast=1&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=dark"
                                        frameBorder="0" scrolling="NO" allowTransparency="true"
                                        sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                                        style={{width: '460px', height: '250px'}}></iframe>

                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            2021 Все права защищены. <a
                            target="_blank">GTI Studio </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;

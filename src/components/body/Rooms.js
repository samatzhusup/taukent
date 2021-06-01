import React, {Component} from 'react';
 import './rooms.css';

class Rooms extends React.Component {
    render() {
        return (
            <div id="page">
                <section className="image-head-wrapper"
                         style={{backgroundImage: 'url("https://thumb.tildacdn.com/tild3435-3061-4638-b562-633330613263/-/format/webp/DSC_4176.jpg")'}}>
                    <div className="inner-wrapper">
                        <h1>Rooms</h1>
                    </div>
                </section>
                <div className="clearfix"/>
                {/*gallery block-*/}
                <div className="container-fluid contenedor text-center">
                    {/*<h1 className="text-center">CARDS BY Francisco Kataldo</h1>*/}
                    <div className=" container text-center">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
                            <article className="text-left">
                                <h2>Гостиница</h2>
                                <h4>Гостинные номера, ресепшен, Люкс номер 6 человек +3 спальни, бильярд.</h4>
                            </article>
                            <img
                                src="https://tausamaly.kz/wp-content/uploads/2020/11/%D0%93%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0.jpg"
                                alt=""/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
                            <div className="ver_mas text-center">
                                <span id="click" className="lnr lnr-eye"></span>
                            </div>
                            <article className="text-left">
                                <h2>Коттедж 2-х местный</h2>
                                <h4>Поселившись в 2-х местном коттедже, вы получаете завтрак на 2 персоны, а также доступ к бильярду, настольному теннису и бесплатному Wi-Fi. Также доступны детские развлечения. Вход со своими продуктами запрещен.</h4>
                            </article>
                            <img src="https://tausamaly.kz/wp-content/uploads/2020/11/IMG_59491-2048x2048.jpg"
                                 alt=""/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
                            <div className="ver_mas text-center">
                                <span className="lnr lnr-eye"></span>
                            </div>
                            <article className="text-left">
                                <h2>Коттедж 4-х местный</h2>
                                <h4>Поселившись в 4-х местном коттедже, вы получаете завтрак на 4 персоны, а также доступ к бильярду, настольному теннису и бесплатному Wi-Fi. Также доступны детские развлечения. Вход со своими продуктами запрещен.</h4>
                            </article>
                            <img
                                src="https://tausamaly.kz/wp-content/uploads/2020/11/IMG_59511-2048x2048.jpg"
                                alt=""/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
                            <div className="ver_mas text-center">
                                <span className="lnr lnr-eye"></span>
                            </div>
                            <article className="text-left">
                                <h2>Коттедж 6-ти местный</h2>
                                <h4>Поселившись в 6 местном коттедже, вы получаете завтрак на 6 персон, а также доступ к бильярду, настольному теннису и бесплатному Wi-Fi. Также доступны детские развлечения. Вход со своими продуктами запрещен.</h4>
                            </article>
                            <img
                                src="https://tausamaly.kz/wp-content/uploads/2020/11/IMG_61361-2048x2048.jpg"
                                alt=""/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
                            <div className="ver_mas text-center">
                                <span className="lnr lnr-eye"></span>
                            </div>
                            <article className="text-left">
                                <h2>Малый VIP коттедж</h2>
                                <h4></h4>
                            </article>
                            <img
                                src="https://tausamaly.kz/wp-content/uploads/2020/11/%D0%9C%D0%B0%D0%BB%D1%8B%D0%B9.jpg"
                                alt=""/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
                            <div className="ver_mas text-center">
                                <span className="lnr lnr-eye"></span>
                            </div>
                            <article className="text-left">
                                <h2>Большой VIP коттедж</h2>
                                <h4>Со своим бассейном, сауной, бильярдом, кухней, гостинная, 4 спальни</h4>
                            </article>
                            <img
                                src="https://tausamaly.kz/wp-content/uploads/2020/11/IMG_60771-2048x2048.jpg"
                                alt=""/>
                        </div>
                    </div>
                </div>

                {/*service block-*/}
                <section className="service-block">
                    <div className="bg-set-col">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-xs-6 width-50">
                                    <div className="service-details text-center">
                                        <div className="service-image">
                                            <img alt="image" className="img-responsive"
                                                 src="assets/css/images/icons/wifi.png"/>
                                        </div>
                                        <h4><a>Бесплатный wifi</a></h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-6 width-50">
                                    <div className="service-details text-center">
                                        <div className="service-image">
                                            <img alt="image" className="img-responsive"
                                                 src="assets/css/images/icons/key.png"/>
                                        </div>
                                        <h4><a>Обслуживание номеров</a></h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
                                    <div className="service-details text-center">
                                        <div className="service-image">
                                            <img alt="image" className="img-responsive"
                                                 src="assets/css/images/icons/car.png"/>
                                        </div>
                                        <h4><a>Бесплатная парковка</a></h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
                                    <div className="service-details text-center">
                                        <div className="service-image">
                                            <img alt="image" className="img-responsive"
                                                 src="assets/css/images/icons/user.png"/>
                                        </div>
                                        <h4><a>Служба поддержки</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*back to top-*/}
                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
                   id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>верх</span>
                </a>
            </div>
    )
    }
    }

    export default Rooms;
import React, {Component} from 'react';
import "./css/restaurant.css"

class Conf extends React.Component {
    render() {
        return (
            <div id="page">
                <section className="image-head-wrapper"
                         style={{backgroundImage: 'url("https://get.wallhere.com/photo/sunlight-forest-dark-night-nature-grass-sky-wood-branch-morning-atmosphere-midnight-light-tree-darkness-1920x1080-px-woodland-grove-computer-wallpaper-ecosystem-temperate-coniferous-forest-biome-trunk-old-growth-forest-deciduous-phenomenon-spruce-fir-forest-825510.jpg")'}}>
                    <div className="inner-wrapper"><h1>Конференц зал</h1>
                    </div>
                </section>
                <div className="body">
                    <h1 className="title justify-content-center text-center text-black">КОНФЕРЕНЦ ЗАЛ НА 60 ЧЕЛОВЕК</h1>
                    <div className="row res_photo_grid2">
                        <img className="img col-sm-12 col-md-12 col-lg-12 col-xl-4 center"
                             src="https://tausamaly.kz/wp-content/uploads/2020/10/IMG_4872-1280x960.jpg"/>
                        <img className="img col-sm-12 col-md-12 col-lg-12 col-xl-4 center"
                             src="https://tausamaly.kz/wp-content/uploads/2020/10/IMG_4871-1280x960.jpg"/>
                        <img className="img col-sm-12 col-md-12 col-lg-12 col-xl-4 center"
                             src="https://tausamaly.kz/wp-content/uploads/2020/10/IMG_4873-1280x960.jpg"/>
                    </div>
                    <h1 className="title justify-content-center text-center text-black">Цена</h1>
                    <div className="container">
                        <div className="col-centered">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 center">
                                    <div className="justify-content-center">
                                        <div className="d-flex justify-content-between">
                                            <h1 className="pricename">1 час</h1>
                                            <p></p>
                                            <p className="price">15 000₸</p>
                                            <p></p>
                                        </div>
                                        <hr className="divider"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aadd452e1367bf757e79ab69c7ed36f85899022cbc98ecaf4012a025f6b9224bd&amp;source=constructor"
                        width="973" height="400" frameBorder="0"></iframe>
                </div>
                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
                   id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>Top</span>
                </a>
            </div>)

    }

}

export default Conf;
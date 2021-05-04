import React, {Component} from 'react';


class PriceList extends React.Component {
    render() {
        return (<div id="page">
            <section className="image-head-wrapper"
                     style={{backgroundImage: 'url("https://get.wallhere.com/photo/sunlight-forest-dark-night-nature-grass-sky-wood-branch-morning-atmosphere-midnight-light-tree-darkness-1920x1080-px-woodland-grove-computer-wallpaper-ecosystem-temperate-coniferous-forest-biome-trunk-old-growth-forest-deciduous-phenomenon-spruce-fir-forest-825510.jpg")'}}>
                <div className="inner-wrapper"><h1>Прайс лист</h1>
                </div>
            </section>
            <h1 className="title justify-content-center text-center text-black">Зимние развлечения</h1>
            <div className="container">
                <div className="col-centered">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 center">
                            <div className="justify-content-center">
                                <div className="d-flex justify-content-between">
                                    <h1 className="pricename">СНОУТЮБИНГ С ПОДЪЕМНИКОМ</h1>
                                    <p></p>
                                    <p className="price">3 000₸</p>
                                    <p></p>
                                </div>
                                <hr className="divider"/>
                                <p className="desc flex-row-reverse">15 минут, с инструктором, с 18 лет</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 center">
                            <div className="justify-content-center">
                                <div className="d-flex justify-content-between">
                                    <h1 className="pricename">ПРОКАТ СНЕГОХОДА</h1>
                                    <p></p>
                                    <p className="price ">15 000₸</p>
                                    <p></p>
                                </div>
                                <hr className="divider"/>
                                <p className="desc ">15 минут, с инструктором, с 18 лет</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 center">
                            <div className="justify-content-center">
                                <div className="d-flex justify-content-between">
                                    <h1 className="pricename  ">ПРОДЛЕНИЕ СНОУТЮБИНГА</h1>
                                    <p></p>
                                    <p className="price">1 000₸</p>
                                    <p></p>
                                </div>
                                <hr className="divider"/>
                                <p className="desc flex-row-reverse">30 минут</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="title justify-content-center text-center text-black">Горка</h1>
            <div className="container">
                <div className="col-centered">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 center">
                            <div className="justify-content-center">
                                <div className="d-flex justify-content-between">
                                    <h1 className="pricename">СНОУТЮБИНГ С ПОДЪЕМНИКОМ</h1>
                                    <p></p>
                                    <p className="price">3 000₸</p>
                                    <p></p>
                                </div>
                                <hr className="divider"/>
                                <p className="desc flex-row-reverse">15 минут, с инструктором, с 18 лет</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 center">
                            <div className="justify-content-center">
                                <div className="d-flex justify-content-between">
                                    <h1 className="pricename">ПРОКАТ СНЕГОХОДА</h1>
                                    <p></p>
                                    <p className="price ">15 000₸</p>
                                    <p></p>
                                </div>
                                <hr className="divider"/>
                                <p className="desc ">15 минут, с инструктором, с 18 лет</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 center">
                            <div className="justify-content-center">
                                <div className="d-flex justify-content-between">
                                    <h1 className="pricename  ">ПРОДЛЕНИЕ СНОУТЮБИНГА</h1>
                                    <p></p>
                                    <p className="price">1 000₸</p>
                                    <p></p>
                                </div>
                                <hr className="divider"/>
                                <p className="desc flex-row-reverse">30 минут</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top" id="back-to-top">
                <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                <span>Top</span>
            </a>
        </div>)

    }

}

export default PriceList;
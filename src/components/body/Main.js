import React, {Component} from 'react';
import InfoCard from './main/InfoCard';
import EnterCard from "./main/EnterCard";
import UpNews from './main/UpNews';
import AdminPanel from '../adminPanel';

class Main extends React.Component {
    render() {
        return (


            <div classname="App" id="page">

                <div id="myCarousel1" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators" id="indiSlider">

                    </ol>
                    <div className="carousel-inner" id="mainSlider">

                    </div>
                    <a className="left carousel-control" href="#myCarousel1" data-slide="prev"> <img
                        src="assets/css/images/icons/left-arrow.png"
                        onmouseover="this.src = 'assets/css/images/icons/left-arrow-hover.png'"
                        onmouseout="this.src = 'assets/css/images/icons/left-arrow.png'" alt="left"/></a>
                    <a className="right carousel-control" href="#myCarousel1" data-slide="next"><img
                        src="assets/css/images/icons/right-arrow.png"
                        onmouseover="this.src = 'assets/css/images/icons/right-arrow-hover.png'"
                        onmouseout="this.src = 'assets/css/images/icons/right-arrow.png'" alt="left"/></a>
                </div>
                <div className="clearfix"/>
                <section className="resort-overview-block">

                    <div className="container">
                        <h1 className="text-center " style={{fontSize: '60px', paddingTop: '20px', color: "black"}}>Наши
                            Услуги</h1>
                        <h4 className="text-center"
                            style={{fontSize: '30px', paddingTop: '20px', paddingBottom: '35px'}}>Зона отдыха с
                            активными развлечениями, проживанием и рестораном.</h4>
                        <div className="row" id="forInfo">

                        </div>
                    </div>
                </section>
                <section className="service-block">
                    <div className="container">
                        <div className="row" id="forGood">

                        </div>
                    </div>
                </section>
                <section className="gallery-block gallery-front">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="gallery-image">
                                    <img className="img-responsive" src="assets/css/images/room1.png"/>
                                    <div className="overlay">
                                        <a className="info pop example-image-link img-responsive"
                                           href="assets/css/images/room1.png" data-lightbox="example-1"><i
                                            className="fa fa-search" aria-hidden="true"/></a>
                                        <p><a>delux room</a></p>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="gallery-image">
                                    <img className="img-responsive" src="assets/css/images/room2.png"/>
                                    <div className="overlay">
                                        <a className="info pop example-image-link img-responsive"
                                           href="assets/css/images/room2.png" data-lightbox="example-1"><i
                                            className="fa fa-search" aria-hidden="true"/></a>
                                        <p><a>super room</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="gallery-image">
                                    <img className="img-responsive" src="assets/css/images/room3.png"/>
                                    <div className="overlay">
                                        <a className="info pop example-image-link img-responsive"
                                           href="assets/css/images/room3.png" data-lightbox="example-1"><i
                                            className="fa fa-search" aria-hidden="true"/></a>
                                        <p><a>single room</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="gallery-image">
                                    <img className="img-responsive" src="assets/css/images/room4.png"/>
                                    <div className="overlay">
                                        <a className="info pop example-image-link img-responsive"
                                           href="assets/css/images/room4.png" data-lightbox="example-1"><i
                                            className="fa fa-search" aria-hidden="true"/></a>
                                        <p><a>double room</a></p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <div className="container">
                    <h1 className="text-center "
                        style={{fontSize: '60px', paddingTop: '20px', color: "black"}}>Проживание</h1>
                    <h4 className="text-center"
                        style={{fontSize: '30px', paddingTop: '20px', paddingBottom: '35px'}}>Зона отдыха с активными
                        развлечениями, проживанием и рестораном.</h4>

                    <div className="container text-center" id="forRoomPlace">

                    </div>
                </div>
                <div className="container">
                    <EnterCard/>
                </div>
                <section className="vacation-offer-block">
                    <div className="vacation-offer-bgbanner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <div className="vacation-offer-details">
                                        <h1>ПРЯМАЯ ТРАНСЛЯЦИЯ</h1>
                                        <h4>Предлагаем вам посмотреть в живую нашу трансляцию!</h4>
                                        <form action="/live">
                                            <button type="submit" className="btn btn-default">ТРАНСЛЯЦИЯ
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container text-center" id="forGallery">
                    <h1 className="text-center "
                        style={{fontSize: '60px', paddingTop: '100px', color: "black"}}>ФОТОГАЛЕРИЯ</h1>
                    <h4 className="text-center"
                        style={{fontSize: '30px', paddingTop: '20px', paddingBottom: '35px'}}>Посмотрите фото</h4>
                    <div class="row">
                        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img
                                src="https://tausamaly.kz/wp-content/uploads/2019/12/20151210_133014%D1%8E-scaled.jpg"
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt=""
                            />

                            <img
                                src="https://tausamaly.kz/wp-content/uploads/2019/12/20151108_180529%D1%81-scaled.jpg"
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt=""
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src="https://tausamaly.kz/wp-content/uploads/2019/12/IMG_4195-scaled.jpg"
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt=""
                            />

                            <img
                                src="https://tausamaly.kz/wp-content/uploads/2019/12/IMG_4424-scaled.jpg"
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt=""
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src="https://tausamaly.kz/wp-content/uploads/2019/12/IMG_4162-scaled.jpg"
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt=""
                            />

                            <img
                                src="https://static.chocolife.me/static/upload/images/deal/for_deal_page/46000/45139/660x305/9_201812261012411545797201304.jpg?1616412559"
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* <section className="blog-block-slider">
                    <div className="blog-block-slider-fix-image">
                        <div id="myCarousel2" className="carousel slide" data-ride="carousel">
                            <div className="container">
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel2" data-slide-to={0} className="active"/>
                                    <li data-target="#myCarousel2" data-slide-to={1}/>
                                    <li data-target="#myCarousel2" data-slide-to={2}/>
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <div className="blog-box">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only</p>
                                        </div>
                                        <div className="blog-view-box">
                                            <div className="media">
                                                <div className="media-left">
                                                    <img src="assets/css/images/client1.png" className="media-object"/>
                                                </div>
                                                <div className="media-body">
                                                    <h3 className="media-heading blog-title">Walter Hucko</h3>
                                                    <h5 className="blog-rev">Satisfied Customer</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="blog-box">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only</p>
                                        </div>
                                        <div className="blog-view-box">
                                            <div className="media">
                                                <div className="media-left">
                                                    <img src="assets/css/images/client2.png" className="media-object"/>
                                                </div>
                                                <div className="media-body">
                                                    <h3 className="media-heading blog-title">Jules Boutin</h3>
                                                    <h5 className="blog-rev">Satisfied Customer</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="blog-box">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only</p>
                                        </div>
                                        <div className="blog-view-box">
                                            <div className="media">
                                                <div className="media-left">
                                                    <img src="assets/css/images/client3.png" className="media-object"/>
                                                </div>
                                                <div className="media-body">
                                                    <h3 className="media-heading blog-title">Attilio Marzi</h3>
                                                    <h5 className="blog-rev">Satisfied Customer</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"/>
                </section> */}
                <section className="blog-block">
                    <h1 className="text-center "
                        style={{fontSize: '60px', paddingTop: '20px', color: "black"}}>Блог</h1>
                    <h4 className="text-center"
                        style={{fontSize: '30px', paddingTop: '20px', paddingBottom: '35px'}}>Посмотрите блоги</h4>
                    <div className="container" id='newsPlace'>
                        {/* <div className="row offspace-45">
                            <div className="view-set-block">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="event-blog-image">
                                        <img alt="image" className="img-responsive" src="assets/css/images/blog1.png"/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
                                    <div className="event-blog-details">
                                        <h4><a href="single-blog.html">Lorem ipsum dolor sit amet</a></h4>
                                        <h5>Post By Admin <a><i aria-hidden="true" className="fa fa-heart-o fa-lg"/>Likes</a><a><i
                                            aria-hidden="true" className="fa fa-comment-o fa-lg"/>comments</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla,
                                            ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non
                                            faucibus sem. Fusce ornare turpis neque, eu commodo sapien porta sed. Nam ut
                                            ante turpis. Nam arcu odio, scelerisque a vehicula vitae, auctor sit amet
                                            lectus. </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla,
                                            ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non
                                            faucibus sem. Fusce ornard hendrerit tortor vulputate id. Vestibulum mauris
                                            nibh, luctus non maximus vitae, porttitor eget neque. Donec tristique nunc
                                            facilisis, dapibus libero ac</p>
                                        <a className="btn btn-default" href="single-blog.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row offspace-45">
                            <div className="view-set-block">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="event-blog-image">
                                        <img alt="image" className="img-responsive" src="assets/css/images/blog2.png"/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
                                    <div className="event-blog-details">
                                        <h4><a href="single-blog.html">Lorem ipsum dolor sit amet</a></h4>
                                        <h5>Post By Admin <a><i aria-hidden="true" className="fa fa-heart-o fa-lg"/>Likes</a><a><i
                                            aria-hidden="true" className="fa fa-comment-o fa-lg"/>comments</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla,
                                            ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non
                                            faucibus sem. Fusce ornare turpis neque, eu commodo sapien porta sed. Nam ut
                                            ante turpis. Nam arcu odio, scelerisque a vehicula vitae, auctor sit amet
                                            lectus. </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla,
                                            ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non
                                            faucibus sem. Fusce ornard hendrerit tortor vulputate id. Vestibulum mauris
                                            nibh, luctus non maximus vitae, porttitor eget neque. Donec tristique nunc
                                            facilisis, dapibus libero ac</p>
                                        <a className="btn btn-default" href="single-blog.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </section>


                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
                   id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>Top</span>
                </a>
            </div>
        )
    }
}

export default Main;
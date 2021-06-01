import React, {Component} from 'react';
import InfoCard from './main/InfoCard';
import EnterCard from "./main/EnterCard";
import UpNews from './main/UpNews';
import AdminPanel from '../adminPanel';

class Main extends React.Component {
    render() {
        return (


            <div classname="App" id="page">


                <div id="myCarousel1" className="carousel slide"  data-ride="carousel">

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
                <div className="container ">
                <h1 className="text-center "
                style={{fontSize: '40px', paddingTop: '150px', color: "black"}}>Зима — это прекрасное время, чтобы взглянуть на природу по-новому</h1>
                <h4 className="text-center"
                style={{fontSize: '30px', paddingTop: '20px', paddingBottom: '35px'}}>Посетите зону отдыха Тау Самалы, чтобы прекрасно провести время!</h4>
                <div className="center1" id="forEnter">
                </div>
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

                <div className="container mt-5">
                    <h1 className="text-center"
                        style={{fontSize: '60px', paddingTop: '20px', color: "black"}}>Фотогалерея</h1>
                    <h4 className="text-center"
                        style={{fontSize: '30px', paddingTop: '20px', paddingBottom: '35px'}}>Вы можете увидеть это у нас!</h4>

                    <div className="container text-center" id="forGallery">
                            
                    </div>
                </div>
                <section className="blog-block">
                    <h1 className="text-center "
                        style={{fontSize: '60px', paddingTop: '20px', color: "black"}}>Блог</h1>
                    <h4 className="text-center"
                        style={{fontSize: '30px', paddingTop: '20px', paddingBottom: '35px'}}>Посмотрите блоги</h4>
                    <div className="container" id='newsPlace'>
                    </div>
                </section>


                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
                   id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>верх</span>
                </a>
            </div>
            </div>
        )
    }
}


export default Main;
import React, {Component} from 'react';
import '../livecamera.css';

class LiveCamera extends React.Component {
    render() {
        return (
            <div id="page">
                <section className="image-head-wrapper"
                         style={{backgroundImage: 'url("https://get.wallhere.com/photo/Canada-mountain-Alberta-Banff-National-Park-snow-winter-997414.jpg")'}}>
                    <div className="inner-wrapper">
                        <h1>Камера</h1>
                    </div>
                </section>
                <h1 className="title justify-content-center text-center text-black">НИЖНЯЯ ТРАССА</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 text-center">
                            <div className="justify-content-center">
                                <iframe
                                    src="https://open.ivideon.com/embed/v2/?server=100-wxUPF7g32DkSw2xqp9OO5q&camera=131072&width=&height=&lang=ru"
                                    className="live_img"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="title justify-content-center text-center text-black">БУГЕЛЬНАЯ КАНАТКА</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 text-center">
                            <div className="justify-content-center">
                                <iframe
                                    src="https://open.ivideon.com/embed/v2/?server=100-wxUPF7g32DkSw2xqp9OO5q&camera=65536&width=&height=&lang=ru"
                                    className="live_img"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
                   id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>Top</span>
                </a>
            </div>
        )
    }
}

export default LiveCamera;
import React, {Component} from 'react';
import '../livecamera.css';

class LiveCamera extends React.Component {
    render() {
        return (
            <div id="page">
                <div className="image-head-wrapper" >
                    <img src="https://tausamaly.kz/wp-content/uploads/2019/12/IMG_4363-scaled.jpg"/>
                    <h1>ПРЯМАЯ ТРАНСЛЯЦИЯ</h1>
                </div>
                <h1 className="title justify-content-center text-center text-black">НИЖНЯЯ ТРАССА</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
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
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
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
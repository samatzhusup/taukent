import React, {Component} from 'react';
import './gallery.css';

class Gallery extends React.Component {
    render() {
        return (
            <div id="page">
                <section className="image-head-wrapper"
                         style={{backgroundImage: 'url("https://get.wallhere.com/photo/Canada-mountain-Alberta-Banff-National-Park-snow-winter-997414.jpg")'}}>
                    <div className="inner-wrapper">
                        <h1>Галерея</h1>
                    </div>
                </section>

                <div className="photoset">
                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/12/IMG_4195-scaled.jpg")'}}></div>
                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/12/ORK_0015-scaled.jpg")'}}></div>

                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/12/20140213-DSC_0919-scaled.jpg")'}}></div>
                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/09/l0ez0hBNNg.jpg")'}}></div>

                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/09/photo_2018-12-21_01-40-58.jpg")'}}></div>
                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2020/09/kvadrocikly_otdyh.jpg")'}}></div>

                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/12/46929905-686e-4228-913d-da2e6a094b3c.jpg")'}}></div>
                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/12/20170520-DSC_2428.jpg")'}}></div>



                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/09/57558563_1549322025201729_9105365332044535194_n.jpg")'}}></div>
                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/12/DSCF7902-scaled.jpg")'}}></div>

                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/12/DSC_1639-scaled.jpg")'}}></div>
                    <div className="photo"
                         style={{backgroundImage: 'url("https://tausamaly.kz/wp-content/uploads/2019/12/20170520-DSC_2428.jpg")'}}></div>

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

export default Gallery;
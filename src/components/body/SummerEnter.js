import React, {Component} from 'react';

class WinterEnter extends React.Component {
    render() {
        return (
            <div id="page">
                <section className="image-head-wrapper"
                         style={{backgroundImage: 'url("https://get.wallhere.com/photo/Canada-mountain-Alberta-Banff-National-Park-snow-winter-997414.jpg")'}}>
                    <div className="inner-wrapper">
                        <h1>Летние Развлечение</h1>
                    </div>
                </section>
                <h1 className="title justify-content-center text-center text-black">Квадроциклы ждут своих гостей!</h1>
                <div className="container">
                    <div className="row">
                        {/*//f1111*/}
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 text-center">
                            <div className="justify-content-center">
                                <img
                                    src="https://tausamaly.kz/wp-content/uploads/2019/12/46929905-686e-4228-913d-da2e6a094b3c.jpg"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="col-sm-12 col-md-12 col-lg-12 col-xl-6 justify-content-center  d-flex align-items-center min-vh-100">
                            <div className="text-center">
                                <h2 className="title">Квадроциклы</h2>
                                <p className="desc">Мы предоставляем возможность воспользоваться услугами по прокату
                                    квадроцикла. Вас ждет огромная порция адреналина, море захватывающих ощущений и
                                    гарантированное хорошее настроение.</p>
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

export default WinterEnter;
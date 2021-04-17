import React, { Component } from 'react';
import MainSliderThing from './MainSliderThing';

const MainSliderContainer = (props) => {

    return (<div id="myCarousel1" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel1" data-slide-to={0} className="active" />
            <li data-target="#myCarousel1" data-slide-to={1} />
            <li data-target="#myCarousel1" data-slide-to={2} />
            <div className="item active"><img src='assets/css/images/banner2.png'
                style={{ width: '100%', height: '500px' }} alt="Third slide" />
                <div className="carousel-caption">
                    <h1>Тау Самалы</h1>
                    <h2>Всесезонный горный курорт в Казахстане</h2>
                </div>
            </div>
            <MainSliderThing image='assets/css/images/banner2.png' text1='Тау Самалы' text2='Всесезонный горный курорт в Казахстане' />
        </ol>
    </div>
    )
}

export default MainSliderContainer;


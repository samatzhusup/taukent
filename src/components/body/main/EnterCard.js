import React, {Component} from 'react';

const EnterCard = (props) => {
    return (

        <div className="container ">
            <h1 className="text-center "
                style={{fontSize: '40px', paddingTop: '150px', color: "black"}}>Зима — это прекрасное время, чтобы взглянуть на природу по-новому</h1>
            <h4 className="text-center"
                style={{fontSize: '30px', paddingTop: '20px', paddingBottom: '35px'}}>Посетите зону отдыха Тау Самалы, чтобы прекрасно провести время!</h4>
            <div className="center1">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 container_foto1 ">
                    <article className="text-left">
                        <h2>Горка с подъемником</h2>
                        <h4>Прокатитесь с ветерком по лесу и полям, вокруг зоны отдыха. Адреналин вам обеспечен!</h4>
                    </article>
                    <img
                        src='https://poiskputi.ru/assets/images/2838/routes/1008/gallery/feaea040ce57adcbeffd3a398c6a65c5.jpg'
                        alt=""/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 container_foto1 ">
                    <article className="text-left">
                        <h2>Сноутьюбинг</h2>
                        <h4>Большая горка с подъемником
                            для супервеселья на ватрушках!</h4>
                    </article>
                    <img
                        src='http://inya-club.ru/wp-content/uploads/2020/11/jungfrau-muerren-winteregg-snowtubing.jpg'
                        alt=""/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 container_foto1 ">
                    <article className="text-left">
                        <h2>Сауны</h2>
                        <h4>Попарьтесь в жаркой сауне или посетите хамам</h4>
                    </article>
                    <img
                        src='https://i.pinimg.com/originals/6d/c9/1b/6dc91b99f1b85e75fffe567d2ca27e57.jpg'
                        alt=""/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 container_foto1 ">
                    <article className="text-left">
                        <h2>Квадроциклы</h2>
                        <h4>Прокатитесь с ветерком по лесу и полям, вокруг зоны отдыха. Адреналин вам обеспечен!</h4>
                    </article>
                    <img
                        src='http://dirtwheelsmag.com/wp-content/uploads/2015/10/DSC_9345.jpg'
                        alt=""/>
                </div>
            </div>
        </div>
    )
}

export default EnterCard;
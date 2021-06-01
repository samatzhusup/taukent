// import {render} from '@testing-library/react';
// import React, {Component} from 'react';
// import {db} from "../firebase";
// import WinterRight from './winter/WinterRight';
// import WinterLeft from './winter/WinterLeft';
// import ReactDOM from 'react-dom';
//
// class WinterEnter extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             headerImage: '',
//             headerText: '',
//             showTitle: '',
//             data: [],
//             allCard: [],
//         };
//     }
//
//     componentDidMount() {
//         db.collection("Razvlechenie")
//             .doc('zima')
//             .get()
//             .then(doc => {
//                     var data = doc.data();
//                     // data['slider1'].image
//
//                     this.setState({headerImage: data.headerImage})
//                     this.setState({headerText: data.headerText})
//                     this.setState({showTitle: data.showTitle})
//
//
//                 }
//             )
//         db.collection("Razvlechenie")
//             .doc('zimaArr')
//             .get()
//             .then(doc => {
//                     var data = doc.data();
//                     var len = 0;
//                     for (var count in data) {
//                         len++;
//                     }
//
//                     var card = [];
//                     card.push(<WinterLeft image={data['col0'].image} title={data['col0'].title} text={data['col0'].text}/>);
//
//
//                     for (var i = 1; i < len; i++) {
//                         console.log('adding' + i)
//                         var name = 'col' + i.toString();
//                         if (i % 2 == 0) {
//                             card.push(<WinterRight image={data[name].image} title={data[name].title}
//                                                    text={data[name].text}/>);
//
//                         } else {
//                             card.push(<WinterLeft image={data[name].image} title={data[name].title}
//                                                   text={data[name].text}/>);
//
//                         }
//
//                     }
//                     ReactDOM.render(card, document.getElementById('malay'));
//                 }
//             )
//
//     }
//
//
//     render() {
//         return (
//             <div id="page">
//                 <div className="image-head-wrapper">
//                     <img src={this.state.headerImage}/>
//                     <h1>{this.state.headerText}</h1>
//                 </div>
//
//                 <h1 className="title justify-content-center text-center text-black">{this.state.showTitle}</h1>
//                 <div className="container">
//                     <div className="row">
//                         <div id='malay'></div>
//                     </div>
//                 </div>
//                 <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
//                    id="back-to-top">
//                     <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
//                     <span>Top</span>
//                 </a>
//             </div>
//         )
//
//
//     }
// }
//
// export default WinterEnter;

import React, {Component} from 'react';

class WinterEnter extends React.Component {
    render() {
        return (
            <div id="page">
                <div className="image-head-wrapper">
                    <img src="https://tausamaly.kz/wp-content/uploads/2019/12/IMG_4027-scaled.jpg"/>
                    <h1>Зимние Развлечение</h1>
                </div>


                <h1 className="title justify-content-center text-center text-black">Снег, лыжи и сноуборд ждут своих
                    гостей!</h1>
                <div className="container">
                    <div className="row">
                        {/*//f1111*/}
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 text-center">
                            <div className="justify-content-center">
                                <img
                                    src="https://www.skisport.ru/upload/iblock/b75/b751444c030d46c28c2a16b462fb7d3b.jpg"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="col-sm-12 col-md-12 col-lg-12 col-xl-6 justify-content-center  align-items-center min-vh-100">
                            <div className="text-center">
                                <h2 className="title">Лыжи
                                    (Лыжи+обувь)</h2>
                                <p className="desc">Хотите открыть для себя горы с другой стороны, кататься по
                                    скоростным трассам и
                                    нетронутым полям свежего снега? Вы можете это сделать у нас, воспользовавшись
                                    прокатом лыж.</p>
                            </div>
                        </div>
                        {/*//222222*/}
                        <div
                            className="col-sm-12 col-md-12 col-lg-12 col-xl-6 justify-content-center align-items-center min-vh-100">
                            <div className="text-center">
                                <h2 className="title">Сноуборд
                                    (Сноуборд+обувь)</h2>
                                <p className="desc">Хотите открыть для себя горы с другой стороны, кататься по
                                    скоростным трассам и нетронутым полям свежего снега? Мы предоставляем возможность
                                    воспользоваться услугами по прокату сноубордов.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 text-center">
                            <div className="justify-content-center">
                                <img
                                    src="https://www.piratesofpowder.com/wp-content/uploads/2016/01/Best-Snowboard-Bindings.jpg"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />
                            </div>
                        </div>
                        {/*//333333333*/}
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 text-center">
                            <div className="justify-content-center">
                                <img
                                    src="https://www.skialm-lofer.com/images/AL_Start.jpg"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="col-sm-12 col-md-12 col-lg-12 col-xl-6 justify-content-center  d-flex align-items-center min-vh-100">
                            <div className="text-center">
                                <h2 className="title">Бэйби лифт</h2>
                                <p className="desc">Бэйби лифт — это подъемник предназначенный для организации катания
                                    на тюбинге (ватрушках) протяженностью 250 метров и перепадом высоты 25 метров это
                                    отличная альтернатива санкам, ледянкам и прочим самодельным приспособлениям.</p>
                            </div>
                        </div>
                        {/*//44444444444*/}
                        <div
                            className="col-sm-12 col-md-12 col-lg-12 col-xl-6 justify-content-center  d-flex align-items-center min-vh-100">
                            <div className="text-center">
                                <h2 className="title">Снегоход
                                    (Круг)</h2>
                                <p className="desc">Мы предоставляем возможность воспользоваться услугами по прокату
                                    снегохода. Вас ждет огромная порция адреналина, море захватывающих ощущений и
                                    гарантированное хорошее настроение.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 text-center">
                            <div className="justify-content-center">
                                <img
                                    src="https://www.brandtpolaris.ru/images/articles/gorniki/gornik4.jpg"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
                   id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>верх</span>
                </a>
            </div>
        )
    }
}

export default WinterEnter;
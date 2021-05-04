import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from "./Router/Router";
import {db} from "./components/firebase";
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import MainSliderThing from './components/mainSlider';
import MainSliderInd from './components/mainSliderInd';
import UpNews from './components/body/main/UpNews';
import InfoCardA from './components/body/main/InfoCard';
import InfoCardC from './components/body/main/infoCard3';
import RoomsCard from './components/body/main/RoomCard';
import GoodThings from './components/body/main/GoodThings';
import Ggallery  from './components/body/main/Gallery';
import RazCard from './components/body/main/Razvlechenie';
function App() {
    function getMapSize(x) {
        var len = 0;
        for (var count in x) {
            len++;
        }

        return len;
    }

    function getSlider() {
        db.collection("Things")
            .doc('MainSlider')
            .get()
            .then(doc => {
                const data = doc.data();
                // data['slider1'].image
                var count = getMapSize(data);

                let indicard = [];
                let card = [];
                card.push(<MainSliderThing active="item active" image={data['slider0'].image}
                                           text1={data['slider0'].text1} text2={data['slider0'].text2}/>);
                indicard.push(<MainSliderInd id="0" active="active"/>)
                for (var i = 1; i < count; i++) {
                    console.log('adding' + i)
                    var name = 'slider' + i.toString();
                    indicard.push(<MainSliderInd ids={i}/>)

                    card.push(<MainSliderThing active="item" image={data[name].image} text1={data[name].text1}
                                               text2={data[name].text2}/>);


                }
                ReactDOM.render(card, document.getElementById('mainSlider'));
                ReactDOM.render(indicard, document.getElementById('indiSlider'));


                console.log(getMapSize(data));
            });
    }


    function getNews() {
        db.collection("Things")
            .doc('News')
            .get()
            .then(doc => {
                const data = doc.data();
                // data['slider1'].image
                var count = getMapSize(data);


                let card = [];
                card.push(<UpNews image={data['news0'].image} title={data['news0'].title}
                                  paragraph={data['news0'].text}/>);


                for (var i = 1; i < count; i++) {
                    console.log('adding' + i)
                    var name = 'news' + i.toString();
                    card.push(<UpNews image={data[name].image} title={data[name].title} paragraph={data[name].text}/>);


                }
                ReactDOM.render(card, document.getElementById('newsPlace'));


                console.log(getMapSize(data));
            });
    }
    function getGallery() {
        db.collection("Things")
            .doc('Gallery')
            .get()
            .then(doc => {
                const data = doc.data();
                // data['slider1'].image
                var count = getMapSize(data);


                let card = [];
                card.push(<Ggallery image1={data['gallery0'].image1} image2={data['gallery0'].image2} />);


                for (var i = 1; i < count; i++) {
                    console.log('adding' + i)
                    var name = 'gallery' + i.toString();
                    card.push(<Ggallery image1={data[name].image1} image2={data[name].image2} />);


                }
                ReactDOM.render(card, document.getElementById('forGallery'));


                console.log(getMapSize(data));
            });
    }
    function getRaz() {
        db.collection("Things")
            .doc('EnterCard')
            .get()
            .then(doc => {
                const data = doc.data();
                // data['slider1'].image
                var count = getMapSize(data);


                let card = [];
                card.push(<RazCard title={data['enter0'].title} text={data['enter0'].text} image={data['enter0'].image}/>);


                for (var i = 1; i < count; i++) {
                    console.log('adding' + i)
                    var name = 'enter' + i.toString();
                    card.push(<RazCard title={data[name].title} text={data[name].text} image={data[name].image} />);


                }
                ReactDOM.render(card, document.getElementById('forEnter'));


                console.log(getMapSize(data));
            });
    }

    function infoCard() {
        db.collection("Things")
            .doc('InfoCard')
            .get()
            .then(doc => {
                const data = doc.data();
                // data['slider1'].image
                var count = getMapSize(data);


                let card = [];
                card.push(<InfoCardA image={data['info0'].image} title={data['info0'].title}
                                     text={data['info0'].text}/>);


                for (var i = 1; i < count; i++) {
                    console.log('adding' + i)
                    var name = 'info' + i.toString();
                    var sum = 2;
                    if(window.innerWidth<800){
                       
                        card.push(<InfoCardA image={data[name].image} title={data[name].title}
                            text={data[name].text}/>);
                    }
                    else{
                        
                        if (i % 2 == 1 && i != 3 || i % 2 == 0 && i / 2 == sum) {
                            card.push(<InfoCardA image={data[name].image} title={data[name].title}
                                                 text={data[name].text}/>);
    
                        } else if (i % 2 == 0 || i > 2 && i % 2 == 1) {
                            card.push(<InfoCardC image={data[name].image} title={data[name].title}
                                                 text={data[name].text}/>);
    
                        }
                    }
                  


                }
                ReactDOM.render(card, document.getElementById('forInfo'));


            });
    }


    function RoomCard() {
        db.collection("Things")
            .doc("RoomCard")
            .get()
            .then(doc => {
                const data = doc.data();
                // data['slider1'].image
    
                var count = getMapSize(data);
    
    
                let card = [];
                card.push(<RoomsCard image={data['room0'].image} title={data['room0'].title}/>);
    
                for (var i = 1; i < count; i++) {
                    console.log('adding' + i)
                    var name = 'room' + i.toString();
                    card.push(<RoomsCard image={data[name].image} title={data[name].title}/>);
    
    
                }
                ReactDOM.render(card, document.getElementById('forRoomPlace'));
    
    
                console.log(getMapSize(data));
            });
    }


    function goodThings() {
        db.collection("Things")
            .doc('GoodThings')
            .get()
            .then(doc => {
                const data = doc.data();
                // data['slider1'].image
                var count = getMapSize(data);

                let indicard = [];
                let card = [];
                card.push(<GoodThings image={data['good0'].image} text={data['good0'].text}
                                      title={data['good0'].title}/>);
                indicard.push(<MainSliderInd id="0" active="active"/>)
                for (var i = 1; i < count; i++) {
                    console.log('adding' + i)
                    var name = 'slider' + i.toString();

                    card.push(<GoodThings image={data[name].image} text={data[name].text} title={data[name].title}/>);


                }
                ReactDOM.render(card, document.getElementById('forGood'));


                console.log(getMapSize(data));
            });
    }

 



    var siteUrl = 'http://localhost:3000/';
    var mobUrl = 'http://192.168.1.101:3000/'
    // moburl = must ur local ip and port
    const windowWidth = window.innerHeight;
    const windowHeight = window.innerWidth;
    if (window.location.pathname=='/') {
        console.log(window.location.pathname);
        getSlider();
        getNews();
        infoCard();
        // for3d();
        getGallery();
        RoomCard();
        getRaz();
        // goodThings();
    } else {
        console.log(window.location.pathname);
    }

    return (
        <div>
            {/* <AdminPanel/> */}
            <Header/>
            {/* <Three3D/> */}
            <Router/>
            <Footer/>
        </div>
    );
}

export default App;

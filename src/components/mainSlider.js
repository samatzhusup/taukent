import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {db} from "./firebase";
import MainSliderInd from './mainSliderInd';

const MainSliderThing = (props) => {

    return (<div className={props.active}><img src={props.image}
                                               style={{width: '100%', height: '600px',objectFit: 'cover'}} alt="Fourth slide"/>
            <div className="carousel-caption">
                <h1>{props.text1}</h1>
                <h2>{props.text2}</h2>
            </div>
        </div>
    )

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

    getSlider();


}

export default MainSliderThing;

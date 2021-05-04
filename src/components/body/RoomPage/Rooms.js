import React, {Component} from 'react';
 import '../rooms.css';
 import ReactDOM from 'react-dom'
 import {db} from "../../firebase";
 import RoomsCard from '../main/RoomCard';
 import ImageAdd from './imageAdd';
 import RoomFull from './RoomFull';
import $ from 'jquery';
import TextAdd from './textAdd';
 function getMapSize(x) {
    var len = 0;
    for (var count in x) {
        len++;
    }

    return len;
}
let thumbnails = document.getElementsByClassName('thumbnail')

		let activeImages = document.getElementsByClassName('active')

		for (var i=0; i < thumbnails.length; i++){

			thumbnails[i].addEventListener('mouseover', function(){
				console.log(activeImages)
				
				if (activeImages.length > 0){
					activeImages[0].classList.remove('active')
				}
				

				this.classList.add('active')
				document.getElementById('featured').src = this.src
			})
		}


		let buttonRight = document.getElementById('slideRight');
		let buttonLeft = document.getElementById('slideLeft');
        $('#slideRight').click(function(){
            document.getElementById('slider').scrollLeft += 180
          });
          $('#slideLeft').click(function(){
            document.getElementById('slider').scrollLeft -= 180
          });
		// buttonLeft.addEventListener('click', function(){
		// 	document.getElementById('slider').scrollLeft -= 180
		// })
        if(buttonRight){
            buttonRight.addEventListener('click', document.getElementById('slider').scrollLeft += 180, false);
        }
        if(buttonLeft){
            buttonRight.addEventListener('click', document.getElementById('slider').scrollLeft -= 180, false);
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
                card.push(<RoomsCard image={data[name].image} title={data[name].title} text={data[name].text}/>);


            }
            ReactDOM.render(card, document.getElementById('forRoomStay'));
            FullRoom();  
            
            console.log(getMapSize(data));
        });
}
if(window.location.href.includes('room')){
    
RoomCard();

}

function FullRoom() {
    db.collection("Things")
        .doc("RoomCard")
        .get()
        .then(doc => {
            const data = doc.data();
            // data['slider1'].image

            var count = getMapSize(data);
            
            let card = [];
            card.push(<RoomFull image={data['room0'].image} realId={'sliderside0'} title={data['room0'].title} text={data['room0'].text} price={data['room0'].price}/>);

            for (var i = 1; i < count; i++) {
                console.log('adding' + i)
                var name = 'room' + i.toString();
                card.push(<RoomFull image={data[name].image}  realId={'sliderside'+i} title={data[name].title} text={data[name].text} price={data[name].price}/>);


            }
            ReactDOM.render(card, document.getElementById('forFullRooms'));
            Dopy();

            console.log(getMapSize(data));
        });
}


function Dopy() {
    db.collection("Things")
        .doc("RoomCard")
        .get()
        .then(doc => {
            const data = doc.data();
            // data['slider1'].image
            let card = [];
            let card2=[];
            var count = getMapSize(data);
            var allImageCount = data['room0'].scrollImage;
            var allImageC=getMapSize(allImageCount);
            var allTextC = data['room0'].fullText;
            var allTextCount=getMapSize(allTextC);
            for(var  i =0; i<allImageC;i++){
                
                card.push(<ImageAdd image={data['room0'].scrollImage[i]}/>);

            }
            for(var  i =0; i<allTextCount;i++){
                
                card2.push(<TextAdd text={data['room0'].fullText[i]}/>);

            }
            // ReactDOM.render(card, document.getElementsByClassName('sliderside0')[0]);
            // ReactDOM.render(card, document.getElementById('slider'));
            // ReactDOM.render(card2, document.getElementById('textSides'));
           
           
            

            console.log(getMapSize(data));
        });
}
  



class Rooms extends React.Component {
    render() {
        return (
            <div id="page">
                <section className="image-head-wrapper"
                         style={{backgroundImage: 'url("https://thumb.tildacdn.com/tild3435-3061-4638-b562-633330613263/-/format/webp/DSC_4176.jpg")'}}>
                    <div className="inner-wrapper">
                        <h1>Rooms</h1>
                    </div>
                </section>
                <div className="clearfix"/>
                {/*gallery block-*/}
                <div className="container-fluid contenedor text-center">
                    {/*<h1 className="text-center">CARDS BY Francisco Kataldo</h1>*/}
                    <div className=" container text-center">
                        <div id="forRoomStay">

                        </div>
                    </div>
                </div>

                {/*service block-*/}
                <section className="service-block">
                    <div className="bg-set-col">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-xs-6 width-50">
                                    <div className="service-details text-center">
                                        <div className="service-image">
                                            <img alt="image" className="img-responsive"
                                                 src="assets/css/images/icons/wifi.png"/>
                                        </div>
                                        <h4><a>free wifi</a></h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-6 width-50">
                                    <div className="service-details text-center">
                                        <div className="service-image">
                                            <img alt="image" className="img-responsive"
                                                 src="assets/css/images/icons/key.png"/>
                                        </div>
                                        <h4><a>room service</a></h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
                                    <div className="service-details text-center">
                                        <div className="service-image">
                                            <img alt="image" className="img-responsive"
                                                 src="assets/css/images/icons/car.png"/>
                                        </div>
                                        <h4><a>free parking</a></h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
                                    <div className="service-details text-center">
                                        <div className="service-image">
                                            <img alt="image" className="img-responsive"
                                                 src="assets/css/images/icons/user.png"/>
                                        </div>
                                        <h4><a>customer support</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id='forFullRooms'>

                </div>
                {/*back to top-*/}
                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
                   id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>Top</span>
                </a>
            </div>
    )
    }
    }

    export default Rooms;
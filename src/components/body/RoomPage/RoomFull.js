import React,{Component} from 'react';
import './forRoom.css';
import ReactDOM from 'react-dom'
import {db} from "../../firebase";
import ImageAdd from './imageAdd';
import TextAdd from './textAdd';
import $ from 'jquery';
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
        // if(buttonRight){
        //     buttonRight.addEventListener('click', document.getElementById('slider').scrollLeft += 180, false);
        // }
		// buttonRight.addEventListener('click', function(){
		// 	document.getElementById('slider').scrollLeft += 180
		// })
function getMapSize(x) {
    var len = 0;
    for (var count in x) {
        len++;
    }

    return len;
}
function FullRoom() {
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
            <img className="thumbnail active" src={data['room0'.image]} /> 
            for(var i = 0 ; i < count; i++){

            }
            for(var  i =0; i<allImageC;i++){
                
                card.push(<ImageAdd   image={data['room0'].scrollImage[i]}  />);

            }
            for(var  i =0; i<allTextCount;i++){
                
                card2.push(<TextAdd text={data['room0'].fullText[i]}/>);

            }
            // ReactDOM.render(card, document.getElementsByClassName('sliderside0')[0]);
            // ReactDOM.render(card, document.getElementById('sliders'));
            // ReactDOM.render(card2, document.getElementById('textSides'));
           
           
            

            console.log(getMapSize(data));
        });
}
FullRoom();  

const RoomFull  = (props) =>{
        return(
            <div id="content-wrapper">
            <div className="column">
              <img id="featured" src={props.image} />
              <div id="slide-wrapper">
                <img id="slideLeft" className="arrow" src="https://raw.githubusercontent.com/divanov11/image_slider_frontend/master/images/arrow-left.png" />
                <div id="sliders" className={props.realId}>
                  {/* <img className="thumbnail active" src={props.image} /> */}
                    
                </div>
                <img id="slideRight" className="arrow" src="https://raw.githubusercontent.com/divanov11/image_slider_frontend/master/images/arrow-right.png" />
              </div>
            </div>
            <div className="column" >
              <h1 style={{color:"black"}}>{props.title}</h1>
              <hr/>

              <h3>Цена: {props.price}</h3>
              <div id="textSides">

              </div>
             
            </div>
          </div>
          )
        
    }

export default RoomFull;

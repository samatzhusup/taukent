import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import RoomFull from '../RoomPage/RoomFull';
import {db} from "../../firebase";
import ReactDOM from 'react-dom'
import $ from 'jquery';
const RoomsCard  = (props) =>{
   
   

        var card = [];
        var data;
        
        function showRoom(id,check){
            if(check!=0){
                db.collection("Things")
                .doc("RoomCard")
                .get()
                .then(doc => {
                    data = doc.data();
                    var date = data[id];
                   card.push( <RoomFull  data={date}/>);
    
                      // ReactDOM.render(card, document.getElementsByClassName('sliderside0')[0]);
                   
                      ReactDOM.render(card, document.getElementById('forFullRooms'));
                    //   $(document).scrollTop($(document).height()); 
                    let imgId = 1;
        
                    const imgs = document.querySelectorAll('.img-select a');
                   
                   const imgBtns = [...imgs];
                     imgBtns.forEach((imgItem) => {
                     
                       imgItem.addEventListener('click', (event) => {
                         
                         event.preventDefault();
                           imgId = imgItem.dataset.id;
                           slideImage();
                       });
                   
                   
                   
                   
                   
                   function slideImage(){
                       const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
                       
                       document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
                   }
                   
                   window.addEventListener('resize', slideImage);
                   });
                    if($(document).width()<1000){
                        $("html, body").animate({scrollTop: 2800}, 600);
     
                    }
                    else{
                        $("html, body").animate({scrollTop: 1700}, 600);
     
                    }
                    
                });
            }
            else{
                window.location.href = "/rooms";
            }
          
            
        }
        return(    
        <div  onClick={() => showRoom(props.name,props.check)} name={props.name}  className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">    
        <article className="text-left">
            <h2>{props.title}</h2>
            <h4>{props.text}</h4>
        </article>
        <img
            src={props.image}
            alt=""/>
        </div>
        )
     
    }

export default RoomsCard;

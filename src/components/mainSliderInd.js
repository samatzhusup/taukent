import React,{Component} from 'react';
import ReactDOM from 'react-dom'; 
import {db} from "./firebase";
// function toListCour(){
//         const name = 'John';
//         var count = document.querySelectorAll(".carousel-indicators").length

//         const element = <li data-target="#myCarousel1" data-slide-to={count+1}/>
//         ReactDOM.render(
//         element,
//         document.getElementsByClassName('carousel-indicators')[0]
//         );
// }
// toListCour();
const MainSliderInd  = (props) =>{
    
        return( <li data-target="#myCarousel1" data-slide-to={props.ids} className={props.active} />)


    }
  
export default MainSliderInd;

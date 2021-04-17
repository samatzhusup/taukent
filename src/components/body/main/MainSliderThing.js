import React,{Component} from 'react';
import MainSliderContainer from './MainSliderContainer';

const MainSliderThing  = (props) =>{
   
        return(<div className="item active"><img src={props.image}
        style={{width: '100%', height: '500px'}} alt="Third slide"/>
<div className="carousel-caption">
<h1>{props.text1}</h1>
<h2>{props.text2}</h2>
</div>
</div>
            )
    }
  
export default MainSliderThing;

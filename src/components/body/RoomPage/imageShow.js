import React,{Component} from 'react';
import './forRoom.css';


const ImageShow  = (props) =>{
        return(
            <div class = "img-item">
            <a href = "#" data-id = {props.id}>
              <img className="imageRoom" src = {props.image} alt = "shoe image"/>
            </a>
          </div>
          )
        
    }

export default ImageShow;

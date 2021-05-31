import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import {db} from "../firebase";
import resAddImage from './resAddImage';
const resAdd = (props) =>{
    
        return(
            <div >
        <h1 className="text-center pt-4 h1">{props.title}</h1>
        <div className="row res_photo_grid2">
            {props.gallContent}
        </div> 
        </div>
        )
        
        }
        export default resAdd;


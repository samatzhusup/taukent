import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import {db} from "../firebase";
import resAddImage from './resAddImage';
const resPrice = (props) =>{
    
        return(
            <div id={props.id}>
            <h1 className="title justify-content-center text-center text-black">Цена</h1>
            <div className="container">
                <div className="col-centered">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 center">
                            <div className="justify-content-center">
                                <div className="d-flex justify-content-between">
                                    <h1 className="pricename">{props.text}</h1>
                                    <p></p>
                                    <p className="price">{props.price}</p>
                                    <p></p>
                                </div>
                                <hr className="divider"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
        
        }
        export default resPrice;


import React, {Component, useState} from 'react';
// import {db} from "../firebase";


const WinterRight = (props) => {

    return (
        <div>
            <div
                classname="col-sm-12 col-md-12 col-lg-12 col-xl-6 justify-content-center  d-flex align-items-center min-vh-100">
                <div classname="text-center">
                    <h2 classname="title">{props.title}</h2>
                    <p classname="desc">{props.text}</p>
                </div>
            </div>
            <div classname="col-sm-12 col-md-12 col-lg-12 col-xl-6 text-center">
                <div classname="justify-content-center">
                    <img src={props.image} classname="w-100 shadow-1-strong rounded mb-4" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default WinterRight;
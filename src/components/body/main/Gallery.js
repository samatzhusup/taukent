// import { getAllByRole } from '@testing-library/dom';
import React, {Component} from 'react';


const Gallery = (props) => {

    return (


        <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
            src={props.image1}
            class="w-100 shadow-1-strong rounded mb-4"
            />

            <img
            src={props.image2}
            class="w-100 shadow-1-strong rounded mb-4"/>
        </div>                    
    </div>

    )
};

export default Gallery;
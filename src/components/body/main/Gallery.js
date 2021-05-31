import React from 'react';


const Ggallery = (props) => {

    return (
        
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
            src={props.image1}
            class="w-100 shadow-1-strong rounded mb-4"
            />

            <img
            src={props.image2}
            class="w-100 shadow-1-strong rounded mb-4"/>
        </div>                    


    )
}

export default Ggallery;
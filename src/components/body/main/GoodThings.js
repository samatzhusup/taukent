import React,{Component} from 'react';


const GoodThings  = (props) =>{
   
        return(<div className="col-md-3 col-sm-3 col-xs-6 width-50">
        <div className="service-details text-center">
            <div className="service-image">
                <img alt="image" className="img-responsive"
                     src={props.image}/>
            </div>
            <h4><a>{props.title}</a></h4>
            <p>{props.text}</p>

        </div>
    </div>)
    }
   
export default GoodThings;
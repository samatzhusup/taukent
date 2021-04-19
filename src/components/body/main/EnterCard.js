
import React,{Component} from 'react';

const EnterCard = (props) => {
    return (
<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 container_foto1 ">
                    <article className="text-left">
                        <h2>{props.title}</h2>
                        <h4>{props.text}</h4>
                    </article>
                    <img
                        src={props.image}
                        alt=""/>
                </div>
               
    )
};

export default EnterCard;
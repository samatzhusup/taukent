import React,{Component} from 'react';



const RoomsCard  = (props) =>{
        return(
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
            <article className="text-left">
                <h2>{props.title}</h2>
                <h4>{props.text}</h4>
            </article>
            <img
                src={props.image}
                alt=""/>
        </div>
        )
        // return(<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        // <div className="gallery-image">
        //     <img className="img-responsive" src={props.image}/>
        //     <div className="overlay">
        //         <a className="info pop example-image-link img-responsive"
        //            href={props.image} data-lightbox="example-1"><i
        //             className="fa fa-search" aria-hidden="true"/></a>
        //         <p><a>{props.title}</a></p>
        //     </div>
        // </div>
        // </div> )
    }

export default RoomsCard;

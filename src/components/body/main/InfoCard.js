import React, {Component} from 'react';


const InfoCardA = (props) => {

    return (


        <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
            <div className="test1">
                <div className="side-A">
                    <div className="product-thumb">
                        <div className="image-box">
                            <img alt="image" className="img-responsive"
                                 width="278px" height="280px" src={props.image}/>
                        </div>
                    </div>
                </div>
                <div className="side-B">
                    <div className="product-desc-side">
                        <h3><a>{props.title}</a></h3>
                        <p>{props.text}</p>
                        <div className="links"><a href="single-blog.html">Читать</a></div>
                    </div>
                </div>
            </div>
            <div className='clearfix'></div>
        </div>

    )
}

export default InfoCardA;
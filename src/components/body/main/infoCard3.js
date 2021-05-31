import React, {Component} from 'react';


const InfoCardC = (props) => {

    return (


        <div class="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
            <div className="test1">
                <div class="side-A">
                    <div class="product-desc-side">
                        <h3><a>{props.title}</a></h3>
                        <p>{props.text}</p>
                        <div class="links"><a href={props.href}>Смотреть</a></div>
                    </div>
                </div>

                <div class="side-B">
                    <div class="product-thumb">
                        <div class="image-box">
                            <a><img alt="image" className="img-responsive"
                                    width="278px" height="280px" src={props.image}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InfoCardC;
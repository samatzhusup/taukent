import React,{Component} from 'react';


const UpNews  = (props) =>{
   
        return(
          <div className="row offspace-45">
            <div className="view-set-block">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="event-blog-image">
                  <img alt="image" style={{width: "100%"}} className="img-responsive" src={props.image} />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
                <div className="event-blog-details">
                  <h4><a href="single-blog.html">{props.title}</a></h4>
                  <p>{props.paragraph}</p>
                </div>
              </div>
            </div>
          </div>
          
        )
    }
  
export default UpNews;
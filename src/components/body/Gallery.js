import React, {Component} from 'react';
import './gallery.css';
import {db} from "../firebase";
class Gallery extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
          dict:[], 
            headerImage:'',
              headerText: '',
            showTitle: '',
            headerAddText:'',
            gallery:[],
          //   add:[],
          //   price:[],
          //   data: [],
          //   allCard:[],
          };
        }
        
        componentDidMount() {
          db.collection("Things")
          .doc('GalleryMain')
          .get()
          .then(doc => {
               var data = doc.data();
               this.setState({ headerImage: data.headerImage})
               this.setState({ headerText: data.headerText})
               this.setState({ showTitle: data.headerTitle})
   
               this.setState({ headerAddText: data.headerAddText})
               
               data =  data['gallery'];
               
               var len = 0;
               for (var count in data) {
                   len++;
               }
               var galArr=[];
               console.log(data)
               for(var i = 0 ; i<len;i++){
                   var toGo =   <div class="photo" style={{backgroundImage:`url(${data[i]})`}}></div>
                   galArr.push(toGo)
               
               }
               this.setState({ gallery: galArr})
              
           
              
  
  
          } 
          )
          
        }
    render() {
        return (
            <div id="page">
                <div className="image-head-wrapper" >
                    <img src={this.state.headerImage}/>
                    <h1>{this.state.headerText}</h1>
                </div>
                <div className="photoset">
                  {this.state.gallery}
                </div>
                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top"
                   id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>Top</span>
                </a>
            </div>
        )
    }
}

export default Gallery;
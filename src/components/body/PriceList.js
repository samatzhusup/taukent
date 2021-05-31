import React, {Component} from 'react';
 import {db} from "../firebase"; 
 import PriceListMain from './mainPrice';
 import ReactDOM from 'react-dom' 
 const  PriceList  = (props) => 
 { 
     
    db.collection("Things")
    .doc('PriceList')
    .get()
    .then(doc => {
        var data = doc.data();
        let card = [];
    
        card.push(<PriceListMain data={data}/>);
        ReactDOM.render(card, document.getElementById('stayMal'));

   
        // var len = 0;
        // for (var count in data) {
        //     len++;
        // }
        // for(var i=0;i<len;i++){
        //     var name = 'price'+i;
        //     var title = data[name].title;
        //     var getPrices = data[name].price;
        //     var lens = 0;
        //     for (var count in getPrices) {
        //         lens++;
        //     }
        //     for(var s = 0 ; s <lens;s++){
        //         var goName = 'title'+i;
        //         var goPriceName = 'arr'+i;
        //         var goPrice =[];
        //         goPrice.push(getPrices[s]) 
        //         this.state.dict.push({goName:title,goPriceName:goPrice})                    
        //     }
        // }
     
        
    })
        
     return( 
     <div className='page'> <div className="image-head-wrapper" > 
     <img src="https://tausamaly.kz/wp-content/uploads/2019/12/IMG_4165-scaled.jpg"/> 
     <h1>Прайс лист</h1> 
     </div> 
     <div id='stayMal'>

     </div>


     <a style={{display: 'none'}}
      href="javascript:void(0);" className="scrollTop back-to-top" id="back-to-top"> 
      <span>
          <i aria-hidden="true" className="fa fa-angle-up fa-lg"/>
          </span> 
          <span>Top</span>
           </a> 
           </div>
       ) } 
export default PriceList;
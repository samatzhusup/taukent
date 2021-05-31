import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {db} from "../firebase";
import WinterRight from './winter/WinterRight';
import WinterLeft from './winter/WinterLeft';
import ReactDOM from 'react-dom';
class SummerEnter extends React.Component  {
    
    constructor(props) {
        super(props);
        this.state = {
          headerImage:'',
            headerText: '',
          showTitle: '',
          data: [],
          allCard:[],
        };
      }
      componentDidMount() {
        db.collection("Razvlechenie")
        .doc('leto')
        .get()
        .then(doc => {
            var data = doc.data();
            // data['slider1'].image
           
            this.setState({ headerImage: data.headerImage})
            this.setState({ headerText: data.headerText})
            this.setState({ showTitle: data.showTitle})

            
        } 
        )
        db.collection("Razvlechenie")
        .doc('letoArr')
        .get()
        .then(doc => {
            var data = doc.data();
            var len = 0;
            for (var count in data) {
                len++;
            }
            
            var card=[];
            card.push(<WinterLeft image={data['col0'].image} title={data['col0'].title} text={data['col0'].text }/>);
            
            
                for (var i = 1; i < len; i++) {
                    console.log('adding' + i)
                    var name = 'col' + i.toString();
                    if(i%2==0){                        
                    card.push(<WinterRight image={data[name].image} title={data[name].title} text={data[name].text }/>);

                    }
                    else{
                        card.push(<WinterLeft image={data[name].image} title={data[name].title} text={data[name].text } />);
                        
                    }

                }
            ReactDOM.render(card,document.getElementById('malay'));
        } 
        )
        
      }
  

    render(){
        return (
            <div id="page">
                <div className="image-head-wrapper" >
                    <img src={this.state.headerImage}/>
                    <h1>{this.state.headerText}</h1>
                </div>
                <h1 className="title justify-content-center text-center text-black">{this.state.showTitle}</h1>
                <div className="container">
                    <div className="row" id='malay'>
                        {/* <GetThings data={this.state.data}/> */}
                        
                    </div>
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

export default SummerEnter;
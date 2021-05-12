
const RoomFull  = (props) => {
    console.log("Properties: ", props);
    const { data } = props
  
    
    return Object.keys(data).map(roomKey => {
      const { image, scrollImage, fullText, title, text: roomText, price } = data[roomKey];
  
      return(
        <div className="card-wrapper">
        <div className="cardRoom">
          {/* card left */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
              {scrollImage && scrollImage.map(scrollImg => {
                
                  return <ImageAdd image={scrollImg} />
                })}
              </div>
            </div>
            <div className="img-select">
            {scrollImage && scrollImage.map((scrollImg,index) => {
                  index=index+1;
                  return <ImageShow id={index} image={scrollImg} />
                })}
            </div>
          </div>
          {/* card right */}
          <div className="product-content">
            <h2 className="product-title">{title}</h2>
            <div className="product-price">
              <h3 className="new-price">Цена: <span>{price}</span></h3>
            </div>
            <div className="product-detail">
              <h2>Информация : </h2>
              {fullText && fullText.map(text => {
                
                return (
                  <div>{text} </div>
                )
              })}
  
            </div>
          </div>
        </div>
      </div>
      );
  
    }
    
    )
    
  
    
  
      // console.log('hello1');
  
      // return [room0, room1, room2].map(room => {
      //   const { image, scrollImage, fullText, title, text: roomText, price } = room;
  
      //   return(
      //     <div id="content-wrapper">
      //     <div className="column">
      //       <img id="featured" src={image} />
      //       <div id="slide-wrapper">
      //         <img id="slideLeft" className="arrow" src="https://raw.githubusercontent.com/divanov11/image_slider_frontend/master/images/arrow-left.png" />
      //         <div id='sliderside2' >
      //           {scrollImage && scrollImage.map(scrollImg => {
      //             return <ImageAdd image={scrollImg} />
      //           })}
      //           {/* <img className="thumbnail active" src={props.image} /> */}
                  
      //         </div>
      //         <img id="slideRight" className="arrow" src="https://raw.githubusercontent.com/divanov11/image_slider_frontend/master/images/arrow-right.png" />
      //       </div>
      //     </div>
      //     <div className="column" >
      //       <h1 style={{color:"black"}}>{title}</h1>
      //       <hr/>
  
      //       <h3>Цена: {price}</h3>
      //       <div id='textside2'>
      //           {fullText.map(text => {
      //             return (
      //               <div>{text} </div>
      //             )
      //           })}
      //       </div>
           
      //     </div>
      //   </div>
      //   )
  
        
      // })
  
          // return(
          //     <div id="content-wrapper">
          //     <div className="column">
          //       <img id="featured" src={image} />
          //       <div id="slide-wrapper">
          //         <img id="slideLeft" className="arrow" src="https://raw.githubusercontent.com/divanov11/image_slider_frontend/master/images/arrow-left.png" />
          //         <div id='sliderside2' >
          //           {scrollImage.map(scrollImg => {
          //             return <ImageAdd image={scrollImg} />
          //           })}
          //           {/* <img className="thumbnail active" src={props.image} /> */}
                      
          //         </div>
          //         <img id="slideRight" className="arrow" src="https://raw.githubusercontent.com/divanov11/image_slider_frontend/master/images/arrow-right.png" />
          //       </div>
          //     </div>
          //     <div className="column" >
          //       <h1 style={{color:"black"}}>{title}</h1>
          //       <hr/>
  
          //       <h3>Цена: {price}</h3>
          //       <div id='textside2'>
          //           {fullText.map(text => {
          //             return (
          //               <div>{text} </div>
          //             )
          //           })}
          //       </div>
               
          //     </div>
          //   </div>
          //   )
          
      }
  
  export default RoomFull;
  
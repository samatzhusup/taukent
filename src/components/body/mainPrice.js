
const  PriceListMain  = (props) => {
    console.log("Properties: ", props);
      const {data} = props
      Object.keys(data)
      .map( (key) => {
         
        const {title,price} = data[key];
        
            
          

      })
   
        
    return Object.keys(data)
    .map( (key) => {
        const {title,price} = data[key];
        
        
        
        return (
  
            <div>
            <h1 className="title justify-content-center text-center text-black"> 
            {title}
            </h1>
            <div className="container">
                <div className="col-centered">
                    <div className="row">
                    {price && price.map(text => {
                    var mal = text.split('|');
                    console.log(mal[1])
                    return (
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 center">
                        <div className="justify-content-center">
                            <div className="d-flex justify-content-between">
                                <h1 className="pricename">{mal[0]}</h1>
                                <p></p>
                                <p className="price">{mal[1]}</p>
                                <p></p>
                            </div>
                            <hr className="divider"/>
                            <p className="desc flex-row-reverse">{mal[2]}</p>
                        </div>
                    </div>
                    )
                    })}
                        
                        
                    </div>
                </div>
            </div>
          
         
         </div>
        )})
        
            
        
        
}



export default PriceListMain;
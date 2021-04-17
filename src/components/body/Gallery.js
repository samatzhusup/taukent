import React, {Component} from 'react';
import './relax.css';



class Gallery extends React.Component {
    render() {
        return (<div>
            <div class="py-5">
                <div className="row">
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <div className="hover hover-1 text-white rounded">
                            <img src="https://res.cloudinary.com/mhmd/image/upload/v1570786258/hoverSet-2_lt7geh.jpg" alt=""/>
                            <div className="hover-overlay"></div>
                            <div className="hover-1-content px-5 py-4">
                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"><span
                                    className="font-weight-light">Image </span>Caption</h3>
                                <p className="hover-1-description text-uppercase mb-0">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <div className="hover hover-1 text-white rounded">
                            <img src="https://res.cloudinary.com/mhmd/image/upload/v1570786258/hoverSet-2_lt7geh.jpg" alt=""/>
                            <div className="hover-overlay"></div>
                            <div className="hover-1-content px-5 py-4">
                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"><span
                                    className="font-weight-light">Image </span>Caption</h3>
                                <p className="hover-1-description text-uppercase mb-0">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <div className="hover hover-1 text-white rounded">
                            <img src="https://res.cloudinary.com/mhmd/image/upload/v1570786258/hoverSet-2_lt7geh.jpg" alt=""/>
                            <div className="hover-overlay"></div>
                            <div className="hover-1-content px-5 py-4">
                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"><span
                                    className="font-weight-light">Image </span>Caption</h3>
                                <p className="hover-1-description text-uppercase mb-0">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Gallery;
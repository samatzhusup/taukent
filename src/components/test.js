import React, {Component} from 'react';

class BookNow extends React.Component {
    render() {
        return (
            <div id="page">
                <div className="clearfix"/>
                <section className="contact-block">
                    <div className="container">
                        <div className="col-md-6 contact-form">
                            <h3>Book<span>Now</span></h3>
                            <form action="#" method="post">
                                <input type="email" className="form-control" name="Email" placeholder="Email" required/>
                                <input type="text" className="form-control" name="Name" placeholder="Name" required/>
                                <input type="text" className="form-control" name="Phone" placeholder="Phone" required/>
                                <input type="submit" className="submit-btn" defaultValue="Submit"/>
                            </form>
                        </div>
                        <div className="clearfix"/>
                    </div>
                </section>
                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top" id="back-to-top">
                    <span><i aria-hidden="true" className="fa fa-angle-up fa-lg"/></span>
                    <span>Top</span>
                </a>
            </div>
        )

    }

}

export default BookNow;
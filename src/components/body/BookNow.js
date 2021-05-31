import React, {useState} from "react";
import "./booknoew.css";
import {db} from "../firebase";

const BookNow = () => {
    function getMapSize(x) {
        var len = 0;
        for (var count in x) {
            len++;
        }

        return len;
    }
    var count;
    var lc;

    function addNew(){
        var ed= document.getElementsByTagName('getter');
        
        db.collection("Things")
        .doc('EnterCard')
        .get()
        .then(doc => {
        const data = doc.data();
        // data['slider1'].image
        count =getMapSize(data);
        alert(count)
        var lc = 'bron'+count;
        db.collection("Things").doc('Bron')
        .update({
           [lc]:
           {
            name: ed[0].value,
            email: ed[1].value,
            phone: ed[2].value,
        
           } 
        })
        .then(() => {
            alert("Your message has been submitted👍");
        })
        }
        )
       
       

    };

    return (
        <div className="container">
            <div className="col-md-3 contact-form"></div>
            <div className="col-md-6 contact-form">
                <form className="form">
                    <h1>Book Now 🤳</h1>
                    <label>Name</label>
                    <input placeholder="Name"  name="getter"/>
                    <label>Email</label>
                    <input placeholder="Email"  name="getter"/>
                    <label>Phone</label>
                    <input placeholder="Phone"  name="getter"/>
                    <button type="подтвердить" onClick={addNew}>Submit</button>
                </form>
            </div>
            <div className="col-md-3 contact-form"></div>
        </div>
    );
};

export default BookNow;
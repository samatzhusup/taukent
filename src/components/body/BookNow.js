import React, {useState} from "react";
import "./booknoew.css";
import {db} from "../firebase";

const BookNow = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("booknow")
            .add({
                name: name,
                email: email,
                phone: phone,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <div className="container">
            <div className="col-md-3 contact-form"></div>
            <div className="col-md-6 contact-form">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Book Now 🤳</h1>
                    <label>Name</label>
                    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label>Email</label>
                    <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label>Phone</label>
                    <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <button type="подтвердить" style={{background: loader ? "#ccc" : " rgb(2, 2, 110)"}}>Submit</button>
                </form>
            </div>
            <div className="col-md-3 contact-form"></div>
        </div>
    );
};

export default BookNow;
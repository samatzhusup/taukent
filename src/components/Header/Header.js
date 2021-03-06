import React, {Component, useState} from 'react';
import {db} from "../firebase";

const Header = () => {
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
        <>
            <header className="header">
                <div className="header-inner">
                    <div className="container-fluid px-lg-5">
                        <nav className="navbar navbar-expand-lg my-navbar ">
                            <a className="navbar-brand" href="/"><span className="logo"><img
                                className="img-fluid" style={{width: 120, margin: '-20px 0px 0px 0px'}}/></span></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><i className="fa fa-bars"
                                                                         style={{margin: '5px 0px 0px 0px'}}/></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">??????????????<span
                                            className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/rooms">????????????????????</a>
                                    </li>
                                    <li className="nav-item dropdown" id="dropper">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            ??????????????????????
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/winter">???????????? ??????????????????????</a>
                                            <div className="dropdown-divider"/>
                                            <a className="dropdown-item" href="/summer">???????????? ??????????????????????</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown" id="dropperr">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            ????????????
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/restaurant">????????????????</a>
                                            <div className="dropdown-divider"/>
                                            <a className="dropdown-item" href="/banya">?????????????? ???????? ???? ??????????</a>
                                            <div className="dropdown-divider"/>
                                            <a className="dropdown-item" href="/sayna">?????????????? ??????????</a>
                                            <div className="dropdown-divider"/>
                                            <a className="dropdown-item" href="/bassein">????????????????</a>
                                            <div className="dropdown-divider"/>
                                            <a className="dropdown-item" href="/??onf">?????????????????? ??????</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/price">????????????</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/gallery">??????????????</a>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0 d-flex justify-content-between">
                                    {/*<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Launch demo modal</button>*/}
                                    <button className="header-btn my-2 " data-toggle="modal"
                                            data-target="#exampleModalCenter" type="button"><a
                                        style={{color: "white"}}>??????????????????????</a></button>
                                    <div className="footer-social-icon-header">
                                        <a href="https://www.instagram.com"><i className="fa fa-instagram"/></a>
                                        <a href="#"><i className="fa fa-whatsapp"/></a>
                                        <i></i>
                                        <i className="phone">+7 (701) 930-66-99</i>
                                        {/*<a href="#">+7 (701) 930-66-99</a>*/}
                                    </div>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title font-weight-bold text-xl-center text-dark"
                                id="exampleModalLongTitle">???????????? ???????????? ???? ???????????????????????? ???????????????????? </h1>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form" onSubmit={handleSubmit}>
                                <label>??????</label>
                                <input placeholder="??????" value={name}  type='text' onChange={(e) => setName(e.target.value)}/>
                                <label >??????????</label>
                                <input placeholder="??????????" value={email} type='email' onChange={(e) => setEmail(e.target.value)}/>
                                <label>??????????????</label>
                                <input placeholder="??????????????" value={phone} type='number' onChange={(e) => setPhone(e.target.value)}/>
                                <button type="submit" style={{background: loader ? "#ccc" : "#ffdb00"}}>??????????????????????</button>
                            </form>
                        </div>
                        {/*<div className="modal-footer">*/}
                        {/*    /!*<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*!/*/}
                        {/*    <button type="button" className="btn btn-primary">??????????????????????</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
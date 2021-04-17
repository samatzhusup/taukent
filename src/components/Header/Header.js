import React, {Component} from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

class Header extends React.Component {
    render() {
        return (
            <>
               <header className="header">
  <div className="header-inner">
    <div className="container-fluid px-lg-5">
      <nav className="navbar navbar-expand-lg my-navbar">
        <a className="navbar-brand" href="#"><span className="logo">
            <img width="400px" src="https://tausamaly.kz/wp-content/uploads/2021/01/%D0%9B%D0%BE%D0%B3%D0%BE122.png" className="img-fluid" style={{width: 100, margin: '-3px 0px 0px 0px'}} /></span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{margin: '5px 0px 0px 0px'}} /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Проживание</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Развлечения
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Зимние Развлечения</a>
                <a className="dropdown-item" href="#">Летние Развлечения</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Услуги
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Ресторан</a>
                <a className="dropdown-item" href="#">Русская баня</a>
                <a className="dropdown-item" href="#">Бассейны</a>
                <a className="dropdown-item" href="#">Конференц зал</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Прайсы</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Галерея</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="header-btn my-2 my-sm-0" type="submit">Subscribe free</button>
          </form>
        </div>
      </nav>
    </div>
  </div>
</header>



            </>
        )
    }
}

export default Header;
import React from 'react';
import LogoNav from '../src/img/logonav.png'
import "../styles/styles.scss"

const Nav = () => (
  <div className="bg-white mb-3 shadow-sm">
    <nav className="container navbar navbar-expand-md">
      <a className="navbar-brand col-9 col-md-3 col-lg-3" href="/index">
        <img src={LogoNav} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon col-3"></span>
      </button>

      <div className="collapse navbar-collapse text col-md-9 col-lg-6" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mx-auto">
          <li className="nav-item">
            <a className="nav-link logo-text rounded btn-outline-light" href="/index">INÍCIO <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link logo-text rounded btn-outline-light" href="/sobre">SOBRE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link logo-text rounded btn-outline-light" href="/fotos">FOTOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link logo-text rounded btn-outline-light" href="/contato">CONTATO</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3">
        <a className="logo-fa mx-auto" href="/index"><i className="fab fa-instagram-square"></i></a>
        <a className="logo-fa mx-auto" href="/index"><i class="fab fa-facebook-square"></i></a>
      </div>
    </nav>
  </div>
);

export default Nav;
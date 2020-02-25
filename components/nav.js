import React from 'react';
import LogoNav from '../src/img/logonav.png'
import "../styles/styles.scss"

const Nav = () => (
  <div className="container bg-white mb-3 shadow-sm">
    <nav className=" navbar navbar-expand-lg">
      <a className="navbar-brand col-6 col-lg-3" href="/index">
        <img src={LogoNav} />
      </a>

      <div className="collapse navbar-collapse col-lg-6 row align-items-center" id="navbarSupportedContent">
        <ul className="mx-auto navbar-nav">
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

      <div className="row col-4 col-lg-3 text-right align-items-center">
        <a className="logo-rs col-4" href="https://www.facebook.com/espacocuidardesi/" target="_blank"><i class="fab fa-facebook-square"></i></a>
        <a className="logo-rs col-4" href="https://www.instagram.com/espacocuidardesi/" target="_blank"><i className="fab fa-instagram-square"></i></a>
        <a className="logo-rs col-4" href="https://api.whatsapp.com/send?1=pt_BR&phone=5532991757257" target="_blank"><i class="fab fa-whatsapp-square"></i></a>
      </div>
      
      <button className="navbar-toggler navbar-light col-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
);

export default Nav;
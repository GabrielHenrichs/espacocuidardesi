import React from 'react';
import LogoNav from '../src/img/logonav.png'

const Nav = () => (
  <div className="bg-white mb-3 shadow-sm">
    <nav className="container navbar navbar-expand-md navbar-light">
      <a className="navbar-brand col-9 col-md-3 col-lg-3" href="/index">
        <img src={LogoNav} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon col-3"></span>
      </button>

      <div className="collapse navbar-collapse text col-md-9 col-lg-6" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mx-auto">
          <li className="nav-item mr-2">
            <a className="nav-link text-warning rounded btn-outline-light" href="/index">Início <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item ml-2 mr-2">
            <a className="nav-link text-warning rounded btn-outline-light" href="/sobre">Sobre</a>
          </li>
          <li className="nav-item ml-2 mr-2">
            <a className="nav-link text-warning rounded btn-outline-light" href="/fotos">Fotos</a>
          </li>
          <li className="nav-item ml-2">
            <a className="nav-link text-warning rounded btn-outline-light" href="/contato">Contato</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 text-secondary">
        
      </div>
    </nav>
    <style jsx>{`
        .text {
          font-size: 20px;
          color: red;
        }
      `}</style>
  </div>
);

export default Nav;
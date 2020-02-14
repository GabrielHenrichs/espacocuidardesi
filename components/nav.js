import React from 'react';
import LogoNav from '../src/img/logonav.png'

const Nav = () => (
  <div className="container mb-3">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand col-3" href="#">
        <img src={LogoNav} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse text col-6" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mx-auto">
          <li className="nav-item active mr-4">
            <a className="nav-link text-secondary" href="#">Início <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-secondary" href="#">Sobre</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-secondary" href="#">Fotos</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-secondary" href="#">Contato</a>
          </li>
        </ul>
      </div>

      <div className="col-3 text-secondary">
        
      </div>
    </nav>
    <style jsx>{`
        .text {
          font-size: 20px;
        }
      `}</style>
  </div>
);

export default Nav;
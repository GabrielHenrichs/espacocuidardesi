import React from 'react';
import LogoNav from '../src/img/logonav.png'

const Nav = () => (
  <div className="bg-light mb-3">
    <nav className="container navbar navbar-expand-md navbar-light">
      <a className="navbar-brand col-9 col-md-3 col-lg-3" href="/index">
        <img src={LogoNav} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon col-3"></span>
      </button>

      <div className="collapse navbar-collapse text col-md-9 col-lg-6" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mx-auto">
          <li className="nav-item active mr-4">
            <a className="nav-link text-secondary" href="/index">Início <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-secondary" href="/sobre">Sobre</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-secondary" href="/fotos">Fotos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="/contato">Contato</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 text-secondary">
        
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
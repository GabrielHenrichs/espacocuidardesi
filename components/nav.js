import React from 'react';
import LogoNav from '../src/img/logonav.png'

const Nav = () => (
  <div className="container mb-3">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src={LogoNav} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse text" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ml-5">
          <li className="nav-item active mr-4">
            <a className="nav-link text-secondary" href="#">Início <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-secondary" href="#">Séries</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-secondary" href="#">Filmes</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-secondary" href="#">Favoritos</a>
          </li>
        </ul>
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
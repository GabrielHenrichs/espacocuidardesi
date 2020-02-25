import React from 'react'   
import Img1 from '../src/img/img2.jpeg'
// import Img2 from '../src/img/img2.jpeg'
// import Img3 from '../src/img/img3.jpeg'

export default props =>
    <div className="container">
        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner bg-white carousel-top container">
                <div className="carousel-item active" data-interval="5000">
                    <img src={Img1} className="d-block w-100 img-thumbnail" alt="Imagem 1" />
                </div>
                {/* <div className="carousel-item" data-interval="5000">
                    <img src={Img2} className="d-block w-100" alt="Imagem 2" />
                </div>
                <div className="carousel-item" data-interval="5000">
                    <img src={Img3} className="d-block w-100" alt="Imagem 3" />
                </div> */}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
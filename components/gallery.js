import React from 'react'
import "../styles/styles.scss"
import Img01 from '../src/img/gallery/01.jpeg'
import Img02 from '../src/img/gallery/02.jpeg'
import Img03 from '../src/img/gallery/03.jpeg'
import Img04 from '../src/img/gallery/04.jpeg'
import Img05 from '../src/img/gallery/05.jpeg'
import Img06 from '../src/img/gallery/06.jpeg'
import Img07 from '../src/img/gallery/07.jpeg'
import Img08 from '../src/img/gallery/08.jpeg'
import Img09 from '../src/img/gallery/09.jpeg'
import Img10 from '../src/img/gallery/10.jpeg'
import Img11 from '../src/img/gallery/11.jpeg'
import Img12 from '../src/img/gallery/12.jpeg'
import Img13 from '../src/img/gallery/13.jpeg'
import Img14 from '../src/img/gallery/14.jpeg'
import Img15 from '../src/img/gallery/15.jpeg'
import Img16 from '../src/img/gallery/16.jpeg'
import Img17 from '../src/img/gallery/17.jpeg'
import Img18 from '../src/img/gallery/18.jpeg'
import Img19 from '../src/img/gallery/19.jpeg'
import Img20 from '../src/img/gallery/20.jpeg'
import Img21 from '../src/img/gallery/21.jpeg'
import Img22 from '../src/img/gallery/22.jpeg'
import Img23 from '../src/img/gallery/23.jpeg'
import Img24 from '../src/img/gallery/24.jpeg'

export default props =>
    <div className="container mt-5">
        <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img01} className="img-fluid img-thumbnail mb-4" data-toggle="modal" data-target="#modalExemplo" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img02} className="img-fluid mb-4 img-thumbnail" data-toggle="modal" data-target="#modalExemplo" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img03} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img04} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img05} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img06} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img07} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img08} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img09} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img10} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img11} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img12} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img13} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img14} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img15} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img16} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img17} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img18} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img19} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img20} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img21} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img22} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img23} className="img-fluid mb-4 img-thumbnail" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 cursor">
                <img src={Img24} className="img-fluid mb-4 img-thumbnail" />
            </div>
        </div>

        {/* <!-- Modal --> */}
        <div className="modal fade bd-example-modal-lg" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content bg-transparent">
                    <div className="modal-header p-1 border-0">
                        <button type="button" className="close text-white" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-1">
                        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-keyboard="true"  data-interval="false">
                            <div className="carousel-inner carousel-top container">
                                <div className="carousel-item active">
                                    <img src={Img01} className="img-fluid mb-4 img-thumbnail" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Img02} className="img-fluid mb-4 img-thumbnail" id="foto02" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Img03} className="img-fluid mb-4 img-thumbnail" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" data-ride="carousel">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" data-ride="carousel">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
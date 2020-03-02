import React, { useEffect, useState } from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Row from '../components/row'
import "../styles/styles.scss"

const Contact = () => {
  return (
    <div className="bg-white">
      <Head title="Contato - Cuidar de Si" />

      <header>
        <Row />
        <Nav />
      </header>

      <main className="container">
        <section className="jumbotron text-center p-2 mb-3">
          <div className="container">
            <h1 className="jumbotron-heading jumbotron-text">Contato</h1>
            <p className="lead text-muted">Venha nos fazer uma visita!</p>
          </div>
        </section>

        <section className="container col-5 my-3 px-4 pt-2 img-thumbnail bg-light ">
          <div className="border-bottom py-2">
            <h4 className="font-weight-normal"><i className="fas fa-phone"></i> Telefone:</h4>
            <p className="text-center">(32)3321-0619 | (32)99175-7257</p>
          </div>
          <div className="border-bottom py-2">
            <h4 className="font-weight-normal"><i className="fas fa-map-marker-alt"></i> Endereço:</h4>
            <p className="mb-1 text-center">Rua Machado Sobrinho, 277 - Alto dos Passos</p>
            <p className="text-center">Juiz de Fora, MG</p>
          </div>
          <div className="border-bottom py-2">
            <h4 className="font-weight-normal"><i className="fas fa-at"></i> Email:</h4>
            <p className="text-center">cuidardesi.jf@gmail.com</p>
          </div>
          <div className="py-2">
            <h4 className="font-weight-normal"><i className="fas fa-hashtag"></i> Redes Sociais:</h4>
            <p className="text-center"><a href="facebook.com/espacocuidardesi" className="text-dark"><i className="fab fa-facebook-square"></i> facebook.com/espacocuidardesi</a></p>
            <p className="text-center"><a href="instagram.com/espacocuidardesi" className="text-dark"><i className="fab fa-instagram-square"></i> instagram.com/espacocuidardesi</a></p>
            <p className="text-center"><a href="https://api.whatsapp.com/send?1=pt_BR&phone=5532991757257" className="text-dark"><i class="fab fa-whatsapp-square"></i> Whatsapp: (32)99175-7257</a></p>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </div>
  );
};

export default Contact;
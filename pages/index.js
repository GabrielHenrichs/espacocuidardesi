import React, { useEffect, useState } from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Carousel from '../components/carousel'
import Footer from '../components/footer'
import Row from '../components/row'

const Home = () => {
  return (
    <div className="bg-white">
      <Head title="Cuidar de Si | Centro de convivência diurno para idosos" />

      <header>
        <Row />
        <Nav />
      </header>

      <main>
        <section className="jumbotron text-center p-2 mb-3">
          <div className="container">
            <h1 className="jumbotron-heading">Cuidar de Si</h1>
            <p className="lead text-muted">Centro de convivência diurno para idosos</p>
          </div>
        </section>

        <div className="container row d-flex mx-auto">
          <div className="col-lg-6 my-auto">
            <Carousel />
          </div>
          <div className="col-lg-6 img-thumbnail my-2">
            <p>O Espaço Cuidar de Si foi criado com o intuito de suscitar a valorização da autonomia e o empoderamento da população idosa, ao proporcionar um ambiente aconchegante, acolhedor e que prima, principalmente, pela promoção do cuidado e do bem-estar de todos aqueles que confiam em nosso trabalho.
            A partir disto, serão desenvolvidas atividades dinâmicas e interativas com o objetivo de estimular os aspectos cognitivos, psicomotores e sensoriais dos idosos, contando com o  acompanhamento técnico-profissional especializado e altamente qualificado. Entre os exercícios já propostos, temos: oficinas de artesanato, aulas de ginástica, memorização, dança, musicalização, fisioterapia e psicologia.
            O horário de funcionamento deste espaço é de segunda à sexta-feira de 8h as 18h na Rua Machado Sobrinho, nº 277 no bairro Alto dos Passos em Juiz de Fora.
            Esperamos recebê-lo(s) em breve!</p>
          </div>
        </div>
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

export default Home;

import React, { useEffect, useState } from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const About = () => {
  return (
    <div className="bg-white">
      <Head title="Sobre - Cuidar de Si" />

      <Nav />

      <section className="jumbotron text-center p-2">
        <div className="container">
          <h1 className="jumbotron-heading">Sobre a Cuidar de Si</h1>
          <p className="lead text-muted">Conheça o nosso trabalho!</p>
        </div>
      </section>

      <Footer />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </div>
  );
};

export default About;
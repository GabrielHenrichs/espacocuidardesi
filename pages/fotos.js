import React from 'react'
import CustomGallery from '../components/custom-gallery/custom-gallery'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Row from '../components/row'

const Photos = () => {
  return (
    <div className="bg-white">
      <Head title="Fotos - Cuidar de Si" />

      <header>
        <Row />
        <Nav />
      </header>

      <main className="container">
        <section className="jumbotron text-center p-2 mb-3">
          <div className="container">
            <h1 className="jumbotron-heading jumbotron-text">Galeria de Fotos</h1>
            <p className="lead text-muted">Conheça um pouco da nossa casa!</p>
          </div>
        </section>

        <CustomGallery />
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

export default Photos;
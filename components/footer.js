import React from 'react';

const Footer = () => (
    <div className="footer mt-auto py-3 bg-light">
        <div className="container">
            <span className="text-muted align-middle">
                &copy; Copyright 2020 Cuidar de Si - Todos os direitos reservados
            </span>
        </div>

        <style jsx>{`
            .text {
                 font-size: 20px;
            }
        `}</style>
    </div>
);

export default Footer;
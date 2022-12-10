import React from 'react';

function Banner(props) {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="container text-center text-md-left" data-aos="fade-up">
                <h1>Welcome to <span>Aashika LTD</span></h1>
                <h2>We are team of talented developers building web applications and making a difference in digital space.</h2>
            </div>
        </section>
    );
}

export default Banner;
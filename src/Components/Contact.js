import React from 'react';

function Contact(props) {
    return (
        <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact us for Business Enquires</p>
        </div>

        <div className="row mt-5 justify-content-center">

          <div className="col-lg-10">

            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-4 info">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>55 Portland Street<br />Aberdeen<br />Ab11 6LN<br />Scotland, United Kingdom</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p><a href="mailTo:info@aashikaltd.com">info@aashikaltd.com</a></p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+44 7850865802</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    );
}

export default Contact;
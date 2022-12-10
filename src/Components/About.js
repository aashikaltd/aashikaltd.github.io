import React from 'react';

function About(props) {
    return (
        <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>About Us</h3>
            <p>
            We are a leading global technology consultancy that integrates strategy, design and software engineering to enable enterprises and technology disruptors across the globe to thrive as modern digital businesses.
            </p>
            <ul>
              <li><i className="bx bx-check-double"></i> We leverage our vast experience to improve our clients’ ability to respond to change; utilize data assets to unlock new sources of value</li>
              <li><i className="bx bx-check-double"></i> Create adaptable technology platforms that move with business strategies</li>
              <li><i className="bx bx-check-double"></i> Rapidly design, deliver and evolve exceptional digital products and experiences at scale.</li>
            </ul>
            <div className="row icon-boxes">
              {/* <div className="col-md-6">
                <i className="bx bx-receipt"></i>
                <h4>Corporis voluptates sit</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <i className="bx bx-cube-alt"></i>
                <h4>Ullamco laboris nisi</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </section>
    );
}

export default About;
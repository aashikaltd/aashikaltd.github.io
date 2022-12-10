import React from 'react';

function Services(props) {
    return (
    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box">
              <i className="bi bi-briefcase"></i>
              <h4><a href="#">Customer Experience, Product and Design</a></h4>
              <p>Drive value through extraordinary customer experiences powered by integrated technology and design.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-card-checklist"></i>
              <h4><a href="#">Data and Artificial Intelligence</a></h4>
              <p>Maximize the business value and enable better decision making with pragmatic data strategies, governance and unrivalled skill sets in predictive AI and ML programming.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-bar-chart"></i>
              <h4><a href="#">Digital Transformation and Operations</a></h4>
              <p>pragmatic strategies for organizational change that increase your agility, resilience and ability to compete.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-binoculars"></i>
              <h4><a href="#">Enterprise Modernization, Platforms and Cloud</a></h4>
              <p>Modernize your operations, platforms, development and delivery practices to deliver business value faster.</p>
            </div>
          </div>
          {/* <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-brightness-high"></i>
              <h4><a href="#">Magni Dolore</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-calendar4-week"></i>
              <h4><a href="#">Eiusmod Tempor</a></h4>
              <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> */}
        </div>

      </div>
    </section>
    );
}

export default Services;
import React from 'react';

function WhatWeDo(props) {
    return (
        <section id="what-we-do" className="what-we-do">
      <div className="container">

        <div className="section-title">
          <h2>What We Do</h2>
          <p>We are a leading technology consultancy that integrates design and software engineering to enable and help enterprises and technology providers to thrive as modern digital businesses.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a href="">Engineering</a></h4>
              <p>When change is constant it demands new levels of business agility. We modernize your operations, platforms, development and delivery practices to improve customer experience and deliver business value faster.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="">Design</a></h4>
              <p>We align product thinking with platform expertise and digital execution to deliver exceptional customer experiences powered by integrated technology and design.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="">Strategy</a></h4>
              <p>We'll work with you on pragmatic strategies for organizational change that increase your agility, resilience and ability to compete.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    );
}

export default WhatWeDo;
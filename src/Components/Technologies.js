import React from 'react';

function Technologies(props) {
    return (
        <section id="technologies" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Technologies</h2>
          <p>Digital Technologies We Touch Upon</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box">
              <i className="bi bi-briefcase"></i>
              <h4><a href="#">Cloud Migration/ Implementation</a></h4>
              <p>Modernize your operations, platforms, development and delivery practices to deliver business value faster.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-card-checklist"></i>
              <h4><a href="#">Cutting Edge Web Technologies</a></h4>
              <p>For Rapid Prototyping and app development</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-bar-chart"></i>
              <h4><a href="#">Devops</a></h4>
              <p>For CI/CD in the applications we build for speey delivery</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-binoculars"></i>
              <h4><a href="#">Testing Tool</a></h4>
              <p>We use various testing tools accross industry for prviding test strategies</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-brightness-high"></i>
              <h4><a href="#">Database Migration Services</a></h4>
              <p>Either from SQL to NO-SQL or any database of your choice</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-calendar4-week"></i>
              <h4><a href="#">Site Maintenance Services</a></h4>
              <p>Using web Technologies to either uplift the existing applications or maintain them</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
}

export default Technologies;
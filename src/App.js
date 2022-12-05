import './App.css';

function App() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">

      <div className="logo me-auto">
        <h1><a href="index.html">AASHIKA LTD</a></h1>
      </div>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#testimonials">Testimonials</a></li> */}
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div className="header-social-links d-flex align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>

  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="container text-center text-md-left" data-aos="fade-up">
      <h1>Welcome to <span>Aashika LTD</span></h1>
      <h2>We are team of talented developers building web applications and making a difference in digital space.</h2>
      <a href="#about" className="btn-get-started scrollto">Get Started</a>
    </div>
  </section>

  <main id="main">

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

    {/* <section id="counts" className="counts">
      <div className="container">

        <div className="row">

          <div className="col-lg-3 col-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hard Workers</p>
            </div>
          </div>

        </div>

      </div>
    </section> */}

    <section id="services" className="services section-bg">
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

    {/* <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="link-preview portfolio-lightbox" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">App 1</a></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/portfolio-2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Web 3</a></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/portfolio-3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">App 2</a></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/portfolio-4.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Card 2</a></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/portfolio-5.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Web 2</a></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/portfolio-6.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">App 3</a></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/portfolio-7.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Card 1</a></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/portfolio-8.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Card 3</a></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/portfolio-9.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bx bx-link"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Web 1</a></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> */}

    {/* <section id="testimonials" className="testimonials section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section> */}

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

  </main>

  <footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>AASHIKA LTD</h3>
            <p>
              55 Portland Street<br />
              Aberdeen<br />
              Ab11 6LN<br />
              Scotland, United Kingdom<br /><br />
              <strong>Phone:</strong>+44 7850865802<br />
              <strong>Company Email:</strong><a href="mailTo:info@aashikaltd.com">info@aashikaltd.com</a><br />
              <strong>Hr Email:</strong><a href="mailTo:hr@aashikaltd.com">hr@aashikaltd.com</a><br />
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>AASHIKA LTD</span></strong>. All Rights Reserved
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
    </>
  );
}

export default App;

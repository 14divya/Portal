import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <React.Fragment>
      <div>
        <div className="logo">
          <img src="assets/images/EAPL.png" height="30px" className="eapllogo" alt="..." />
          <img src="assets/images/kruger.png" className="partner" alt="..." />
          <br />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" style={{color: '#fff'}}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" tabIndex="-1" aria-disabled="true" style={{color: '#fff'}}>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products" tabIndex="-1" aria-disabled="true" style={{color: '#fff'}}>Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" tabIndex="-1" aria-disabled="true" style={{color: '#fff'}}>Contact</Link>
                </li>
              </ul>
              <form className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to="/login"><button className="btn btn-primary " style={{ width: '150px' }} type="button">Login</button></Link>
              </form>
            </div>
          </div>
        </nav>
      
      <div className="sliding">
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/images/bg-1a.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="assets/images/bg-2.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="assets/images/bg-3.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="assets/images/bg-4.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="assets/images/bg-5.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="assets/images/bg-6.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="assets/images/bg-7.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row desc">
          <div className="col-sm-6 ">
            <h2>Ahead of change</h2>
            <p>Rising above the ever-evolving challenges in the world of electronic automation,
              EAPL's differentiated innovations have changed the paradigms across a wide-spectrum
              of industries. The EAPL products are designed as a universal automation applications
              to capacitate high performance in a secure environment.</p>
          </div>
          <div className="col-sm-6">
            <h2>Our 'inventives'</h2>
            <p>Imagine any world in electronic automation between 'from' and 'to'. Our innovations
              are there to keep it stretching. Timers, Annunciators, Sequence Timers, Protection
              Relays, Multifunction Meters, temperature controllers, tachometers, switches and
              whatever! Unmatched performance of products, for us is only a beginning. Redefining
              the very notion of performance is where we arrive at.</p>
          </div>
        </div>


        <div className="row desc">
          <div className="col-sm-4">
            <h2>Why count on us?</h2>

            <pre>
              {`Pioneering since 1985
Affably priced products
Conforming to global parameters
Adhering to international standards
Global recognitions`}
            </pre>

          </div>
          <div className="col-sm-4">
            <h2>Product feature highlights</h2>

            <pre>
              {`Leading-edge technology
Sleek, compact & Elegant enclosures
UL graded plastics
Designed as per DIN standard
Indigenous & innovative designs
Ease of programming & Operations
Compliance IS5834/IEC guidelines`}
            </pre>

          </div>
          <div className="col-sm-4">
            <img src="assets/images/group-products.png" className="group-products" alt="group-products" />
          </div>
        </div>
        <div className="infra desc">
          <h2>EAPL infrastructure</h2>
          <img src="assets/images/eapl-infra.png" width="100%" alt="..." />
          <p>EAPL's facility is equipped with the latest machinery and devices that meet international
            standards of performance and safety. Highly scalable and suited to fulfil demands of
            any range and capacity, EAPL is on the way of augmenting its production further
            through new additions that raise the benchmark to the next high.</p>
        </div>
        <div className="row desc">
          <div className="col-sm-6 ">
            <img src="assets/images/RDCenter.png" width="100%" alt="..." />
            <p>A highly resourceful R&D centre approved by
              Dept. of Electronics Govt. of India. </p>
          </div>
          <div className="col-sm-6">
            <img src="assets/images/ISIEC.png" width="100%" alt="..." />
            <p>Quality infrastructure to meet IS and IEC standard</p>
          </div>
        </div>
        <div className="row desc cardClass">
          <div className="col-sm-4  articles">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Make In India Award-2016</h5>
                <img src="assets/images/make in india.jpg" width="100%" alt="..." />
                <p className="card-text">Selected as the winner in the category of Electronic system in the
                  prestigious event, Make in India - the challenges and opportunities held on 01/07/2016 in
                  New Delhi.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 articles">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Quality in policy and practice</h5>
                <p className="card-text">As an innovation driven, people first organization, EAPL is distinguished
                  for its
                  stringent adherence to quality, not just in processes or products, but in the
                  ensuing customer satisfaction that results from quality in practice. A blend of
                  quality products and happy people is all that takes to ensure a satisfied customer.
                  At EAPL, we resort to every possible and even impossible way to keep the quality
                  quotient intact.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 articles">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">An association to facilitate innovation</h5>
                <img src="assets/images/Lahari.jpg" width="100%" alt="..." />
                <p className="card-text">Proud to be a part of Lahari a Make in India initiative under the aegis of
                  Govt. of
                  India to facilitate the manufacturing of quality electronic products. Now EAPL will
                  benefit from the privileged access to testing, inspection and certification. More
                  heights to conquer.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="content">
                  <h5 style={{ color: 'white' }}>Subscribe to our newsletter for receiving latest updates on
                    products</h5>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                    <span className="input-group-btn">
                      <button className="btn" type="submit">Subscribe</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className="container-fluid">EAPL&copy;Electronics Automation Private Limited</div>
      </footer>
      

    </div>
    </React.Fragment >
  )
}
export default Home;
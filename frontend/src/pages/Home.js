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
                  <Link className="nav-link active" aria-current="page" to="/" style={{ color: '#fff' }}>Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href= "#about" tabIndex="-1" aria-disabled="true" style={{ color: '#fff' }}>About</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products" tabIndex="-1" aria-disabled="true" style={{ color: '#fff' }}>Products</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" tabIndex="-1" aria-disabled="true" style={{ color: '#fff' }}>Contact</a>
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
          <div class="section-title" id="about">
            <br />
            <h2>About Us</h2>
            <p style={{ color: 'black', fontSize: '20px', textAlign: 'justify' }}>A humble beginning in 1985, a breakthrough launch of A1D1- X and a giant leap resulting in a
              towering presence in the Electronic Automation sector- the success story of EAPL has more to it than
              all these. Synonymous with quality and high performance products for varied industry requirements,
              the goodwill the organization has gained over the years provides the best testimony for innovation
              at par with global standards. The organization has received several recognitions and has been
              approved by CSA and UL for complying with safety regulatory norms. An extensive production capacity,
              an unmatched customer base across 50 cities and even GCC countries, an innovation spree that knows
              no limits–all these make EAPL carve a niche in the highly competitive electronic automation sector.</p>
          </div>
          <div className="infra desc">
            <h4>EAPL infrastructure</h4>
            <img src="assets/images/eapl-infra.png" width="100%" alt="..." />
            <p>EAPL's facility is equipped with the latest machinery and devices that meet international
              standards of performance and safety. Highly scalable and suited to fulfil demands of
              any range and capacity, EAPL is on the way of augmenting its production further
              through new additions that raise the benchmark to the next high.</p>
          </div>
          <h2 id="contact">Contact</h2>


          <div>
            <iframe style={{ border: '0', width: '100%', height: '270px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.904107385562!2d77.57517361482341!3d13.10526099076828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18d75e9de9d9%3A0x4442a2c32041f8ec!2sElectronic%20Automation%20Private%20Limited.%20(EAPL)!5e0!3m2!1sen!2sin!4v1690758247119!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0" allowfullscreen></iframe>
          </div>
          <br />
          <div class="row">

            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>ELECTRONIC AUTOMATION PVT LTD.
                    # 20, K.H.B Industrial Area, Yelahanka, Bangalore-560 064</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@eaplindiamail.com
                </p>
              </div>
            </div>
            <div class="col-lg-4">

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p> +91- 80 - 4280 2345.</p>
              </div>

            </div>

          </div>






        </div>
        <footer>
          <div className="container-fluid">EAPL&copy;Electronics Automation Private Limited</div>
        </footer>


      </div>
    </React.Fragment >
  )
}
export default Home;
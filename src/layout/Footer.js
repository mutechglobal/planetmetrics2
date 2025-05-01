import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("../components/Counter"), {
  ssr: false,
});

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
  

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const ScrollTopBtn = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      style={{ display: "inline-block" }}
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => scrollTop()}
    >
      <span className="fas fa-angle-double-up" />
    </button>
  );
};

const DefaultFooter = () => (
  <footer className="main-footer bg-green text-white">
    <div className="container">
      <div className="footer-top-newsletter py-80 mb-75">
        <div className="section-title">
          <h2>Newsletter Subscribe</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <input type="email" placeholder="Email Address" required="" />
          <button className="theme-btn">
            subscribe now <i className="fas fa-angle-double-right" />
          </button>
        </form>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget about-widget text-center">
            <div className="footer-logo mb-30">
              <Link href="/">
                <a>
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
              Planetmetrics focuses on Earth observation, specializing in the advancement, utilization, 
              and integration of geospatial data and cutting-edge intelligent technologies
            </p>
            <div className="social-style-two pt-10">
              <Link href="/contact">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-linkedin-in" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-youtube" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget two-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
             
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
            
              <li>
                <Link href="/portfolio-grid">
                  <a>Our Projects</a>
                </Link>
              </li>
          
              <li>
                <Link href="/team">
                  <a>Meet Team</a>
                </Link>
              </li>
        
              <li>
                <Link href="/blog-grid">
                  <a>Latest News</a>
                </Link>
              </li>
              <li>
                <Link href="/faqs">
              <a>Faqs</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
           
             
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title">Contact Us</h4>
            <p>
            To receive appropriate answers to your queries, Please contact here.{" "}
            </p>
            <ul>
              <li>
                <i className="fal fa-map-marker-alt" />
                Planetmetrics LLC<br></br>418 Broadway, Albany<br></br> New York 12207 
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:info@planetmetrics.us">info@planetmetrics.us</a>
              </li>
              <li>
                <i className="far fa-phone" />
                <a href="calto:+012(345)67899">+1 (518)730-8922</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-10">
        <p>Copyright © 2025 Planetmetrics LLC. All Rights Reserved.</p>
        <ul className="footer-menu">
          <li>
            <Link href="/contact">Setting &amp; Privacy</Link>
          </li>

        </ul>
        {/* Scroll Top Button */}
        <ScrollTopBtn />
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      {/* <img
        className="shape-one"
        src="assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="assets/images/shapes/footer4.png"
        alt="Shape"
      /> */}
    </div>
  </footer>
);


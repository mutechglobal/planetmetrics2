import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import { HomeSlider1 } from "../src/components/HomeSlider";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
import { productActive } from "../src/sliderProps";
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout header={1}>
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSlider1 />
        </div>
        {/* <img
          className="bg-leaf"
          src="assets/images/slider/slider-bg-leaf.png"
          alt="Shape"
        />
        <img
          className="bg-shape"
          src="assets/images/slider/slider-bg-shape.png"
          alt="Shape"
        /> */}
      </section>
      {/* Slider Section End */}
      {/* Category Section Start */}
      <section className="category-section pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-end pb-35">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div className="section-title mb-20">
                <span className="sub-title mb-20">
                  What We Do
                </span>
                <h2>Smart Solutions for Sustainable Future</h2>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div className="text mb-20">
                <p>
                Welcome to Planetmetrics, where our commitment lies in the promotion of sustainability and protection of the environment. 
                Our mission is to provide innovative and effective solutions to address the pressing environmental challenges facing the world today
                </p>
              </div>
            </div>
          </div>
          <div className="category-wrap">
            <div className="category-item wow fadeInUp delay-0-3s">
              <div className="icon">
                <img src="assets/images/category/icon1.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Sustainability Modeling</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <img src="assets/images/category/icon2.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Data Analysis & Mitigation</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-5s">
              <div className="icon">
                <img src="assets/images/category/icon3.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Change Detection</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <img src="assets/images/category/icon4.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">GHG Accounting</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-7s">
              <div className="icon">
                <img src="assets/images/category/icon5.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Remote Sensing</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
          </div>
        </div>
      </section>
      {/* Category Section End */}
      {/* About Section Start */}
      <section className="about-section pt-85 rpt-55 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-images wow fadeInLeft delay-0-2s">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src="assets/images/about/about1.jpg" alt="About" />
                  </div>
                  <div className="col-6">
                    <img src="assets/images/about/about2.jpg" alt="About" />
                    <img src="assets/images/about/about3.jpg" alt="About" />
                  </div>
                </div>
                <div className="offer">
                  <img src="assets/images/shapes/organic.png" alt="Offer" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content rpt-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Who We Are</span>
                  <h2>Experience a New Age of Intelligence</h2>
                </div>
                <Tab.Container defaultActiveKey={"agriculture"}>
                  <Nav className="nav jusctify-content-between">
                    <li>
                      <Nav.Link
                        eventKey="agriculture"
                        className="nav-link"
                        data-toggle="tab"
                        href="#agriculture"
                      >
                        <i className="flaticon-spa" />
                        <h4>
                        Our Mission
                        </h4>
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        eventKey="vegetables"
                        className="nav-link"
                        data-toggle="tab"
                        href="#vegetables"
                      >
                        <i className="flaticon-spa" />
                        <h4>
                        Our Vision
                        </h4>
                      </Nav.Link>
                    </li>
                  </Nav>
                  <Tab.Content className="tab-content pt-25">
                    <Tab.Pane className="tab-pane fade" eventKey="agriculture">
                      <p>
                      
                        We Drive with the purpose of producing ideas and recommendations to address the objectives of sustainable development
                      </p>
                      <div className="author-wrap">
                        <img
                          src="assets/images/about/author.jpg"
                          alt="Authro"
                        />
                        <div className="title">
                          <h4>Ujjwal Tripathi</h4>
                          <span>CEO &amp; Co-Founder</span>
                        </div>
                        <img
                          src="assets/images/about/signature.png"
                          alt="Signature"
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="vegetables">
                      <p>
                      To create connections and efforts aimed at attaining the sustainable development goals
                      </p>
                      <div className="author-wrap">
                        <img
                          src="assets/images/about/author.jpg"
                          alt="Authro"
                        />
                        <div className="title">
                          <h4>S P Tiwari</h4>
                          <span>COO &amp; Co-Founder</span>
                        </div>
                        <img
                          src="assets/images/about/signature.png"
                          alt="Signature"
                        />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
    
      {/* Product Section Start */}
      <section className="product-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container-fluid">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">
              Our Services
            </span>
            <h2>Analysis  &amp; Mitigation</h2>
          </div>
          <Slider {...productActive} className="product-active">
            <div className="product-item wow fadeInUp delay-0-2s">
              
              <div className="image">
                <img src="assets/images/products/product1.png" alt="Product" />
              </div>
              <div className="content">
                
                <h5>
                  <Link href="/product-details">Earth observations</Link>
                </h5>
                <span className="price">
                  
                  <span>xxx</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              
              <div className="image">
                <img src="assets/images/products/product1.png" alt="Product" />
              </div>
              <div className="content">
                
                <h5>
                  <Link href="/product-details">Satellite Remote Sensing</Link>
                </h5>
                <span className="price">
                  
                  <span>xxx</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              
              <div className="image">
                <img src="assets/images/products/product1.png" alt="Product" />
              </div>
              <div className="content">
                
                <h5>
                  <Link href="/product-details">Environmental Impact Assessments</Link>
                </h5>
                <span className="price">
                  
                  <span>xxx</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              
              <div className="image">
                <img src="assets/images/products/product1.png" alt="Product" />
              </div>
              <div className="content">
                
                <h5>
                  <Link href="/product-details">Sustainable Agriculture and Forestry</Link>
                </h5>
                <span className="price">
                  
                  <span>xxx</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              
              <div className="image">
                <img src="assets/images/products/product1.png" alt="Product" />
              </div>
              <div className="content">
                
                <h5>
                  <Link href="/product-details">Climate Change Mitigation</Link>
                </h5>
                <span className="price">
                  
                  <span>18</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              
              <div className="image">
                <img src="assets/images/products/product1.png" alt="Product" />
              </div>
              <div className="content">
                
                <h5>
                  <Link href="/product-details">Water Resource Management</Link>
                </h5>
                <span className="price">
                  
                  <span>18</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              
              <div className="image">
                <img src="assets/images/products/product1.png" alt="Product" />
              </div>
              <div className="content">
                
                <h5>
                  <Link href="/product-details">Machine Learning</Link>
                </h5>
                <span className="price">
                  
                  <span>18</span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Product Section End */}

      {/* Video Area Start */}
      {/* <div className="video-area">
        <div className="container">
          <div
            className="video-inner wow fadeInUp delay-0-2s"
            style={{ backgroundImage: "url(assets/images/video/video-bg.jpg)" }}
          >
            <i className="flaticon-leaf-1" />
            <span className="video-text">Watch Videos</span>
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div> */}
      {/* Video Area End */}

      {/* Special Offer Start */}
      {/* <section className="special-offer bg-lighter pt-250 pb-80">
        <div className="special-offer-content text-center py-130 rpy-100 wow fadeInUp delay-0-2s">
          <div className="section-title mb-30">
            <span className="sub-title mb-20">35% Off for Fruits</span>
            <h2>Special Deal Of This Week</h2>
          </div>
          <p>
            On the other hand we denounce with righteous indignation and dislike
            men who are beguiled and demoralized by the charms
          </p>
          <MunfimCountdown />
          <div className="count-down-btns mt-10">
            <Link href="/shop-grid">
              <a className="theme-btn">
                Shop Now <i className="fas fa-angle-double-right" />
              </a>
            </Link>
            <Link href="/about">
              <a className="theme-btn style-two">
                use code <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
        <img
          className="offer-bg"
          src="assets/images/offers/special-offer-bg.png"
          alt="Offer BG"
        />
        <img
          className="munakoiso"
          src="assets/images/shapes/munakoiso.png"
          alt="Munakoiso"
        />
        <img
          className="litchi"
          src="assets/images/shapes/litchi.png"
          alt="Litchi"
        />
        <img
          className="special-offer-left"
          src="assets/images/offers/offer-left.png"
          alt="Offer"
        />
        <img
          className="special-offer-right"
          src="assets/images/offers/offer-right.png"
          alt="Offer"
        />
      </section> */}
      {/* Special Offer End */}
      {/* Call To Action Area Start */}
      <section className="cta-area">
        <div className="container">
          <div
            className="cta-inner overlay text-white wow fadeInUp delay-0-2s"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title mt-20 mb-15">
                  <span className="sub-title mb-15">Need Any Support</span>
                  <h3>Get In Touch With an Expert</h3>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <Link href="/contact">
                  <a className="theme-btn btn-white my-15">
                    Contact Us <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action Area End */}

      {/* Gallery Area Start */}
      {/* <section className="gallery-area pt-130 rpt-100">
        <PhotoGallery />
      </section> */}
      {/* Gallery Area End */}

      {/* Feedback Section Start */}
      {/* <section className="feedback-section pt-50 rpt-20">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6">
              <CustomerReviews />
            </div>
            <div className="col-lg-6">
              <div className="feedback-images wow fadeInRight delay-0-2s">
                <img
                  className="first-image"
                  src="assets/images/reviews/feedback-right.jpg"
                  alt="Feedback"
                />
                <img
                  className="last-image"
                  src="assets/images/reviews/feedback-right.png"
                  alt="Feedback"
                />
                <img
                  className="bg-image"
                  src="assets/images/shapes/feedback-bg.png"
                  alt="Feedback"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Feedback Section End */}

      {/* News Section Start */}
      <section className="news-section pt-130 rpt-100 pb-70 rpb-40">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Latest Articles</span>
            <h2>News &amp; Blog</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news1.jpg" alt="News" />
                  <span className="date">
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news2.jpg" alt="News" />
                  <span className="date">
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link href="/blog-details">
                      Quality Foods Requirments For Every Human Body’s
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news3.jpg" alt="News" />
                  <span className="date">
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link href="/blog-details">
                      Choose Awesome Vegetables For Your Daily Life Routine
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      {/* News Section End */}

      {/* Client Logo Section Start */}
      {/* <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div> */}
    </Layout>
  );
};
export default Index;

import Link from "next/link";
import { Fragment } from "react";
import munfirmSlider from "../munfirmSlider";

export const HomeSlider1 = () => {
  const { active, setActive } = munfirmSlider();

  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active === 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item slide-one ${
          active === 1 ? "slick-active" : ""
        }`}
        style={{ backgroundImage: `url(assets/images/slider/slider-image1.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <div className="sub-title mb-20">Welcome to Planetmetrics</div>
                <h1>Innovation &amp; Sustainability </h1>
                <h6>Smart Solutions for Sustainable Future</h6>
                <div className="slider-btns mt-30">
               
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`slider-single-item slide-two ${
          active === 2 ? "slick-active" : ""
        }`}
        style={{ backgroundImage: `url(assets/images/slider/slider-image2.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <div className="sub-title mb-20">Welcome to Planetmetrics</div>
                <h1>Innovation &amp; Sustainability </h1>
                <h6>Smart Solutions for Sustainable Future</h6>
                <div className="slider-btns mt-30">
                  
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active === 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};

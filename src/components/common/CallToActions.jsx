import { Link } from "react-router-dom";

const CallToActions = () => {
  return (
    <section className="our-cta pt0">
      <div className="cta-banner bgc-f7 mx-auto maxw1600 pt120 pt60-md pb120 pb60-md bdrs12 position-relative mx20-lg">
        <div className="img-box-5">
          <img
            className="img-1 spin-right"
            src="/images/about/element-1.png"
            alt="spinner"
          />
        </div>
        <div className="img-box-6">
          <img
            className="img-1 spin-left"
            src="/images/about/element-1.png"
            alt="spinner"
          />
        </div>
        {/* End image spinner */}

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6 " data-aos="fade-right">
              <div className="cta-style1">
                <h2 className="cta-title">PROMPT CONSULTATION</h2>
                <p className="cta-text mb-0">
                  Fill in the form and our agent will contact you shortly.
                </p>
              </div>
            </div>
            {/* End .col-lg-7 */}

            <div className="col-lg-5 col-xl-6 " data-aos="fade-left">
              <div className="cta-btns-style1 d-block d-sm-flex align-items-center justify-content-lg-end">
                <Link
                  to="/contact"
                  className="ud-btn btn-transparent mr30 mr0-xs"
                >
                  Enquire now
                  <i className="fal fa-arrow-right-long" />
                </Link>

                {/* <Link to="tel:+9710564065672" className="ud-btn btn-dark">
                  <span className="flaticon-call vam pe-2" />
                  +971 (56) 406 5672
                </Link> */}
              </div>
            </div>
            {/* End col-lg-5 */}
          </div>
          {/* End .row */}
        </div>
      </div>
    </section>
  );
};

export default CallToActions;

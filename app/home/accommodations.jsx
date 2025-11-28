import Link from "next/link";

const Accommodations = () => {
  return (
    <div className="accommodations__two section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-5 order-last order-lg-first">
            <div className="accommodations__two-left">
              <img src="/img/custom/accommodation-lamp.jpg" alt="Executive guest room with warm lighting" />
              <div className="accommodations__two-left-roll">
                
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 lg-mb-30">
            <div className="accommodations__two-title">
              <span className="subtitle__one">Accommodations</span>
              <h2>Traveling with your Company deal</h2>
              <p>
                Perfect for corporate travelers and business groups visiting Greater Noida! Hestia Hotel and Restaurant offers exceptional corporate accommodation packages designed to meet all your company's travel needs. Located strategically in Knowledge Park III, we provide convenient access to major business hubs, conference facilities, and meeting rooms. Our corporate deals include group discounts, complimentary meeting spaces, high-speed WiFi for seamless business connectivity, and flexible check-in/check-out options. Experience comfort, convenience, and value when traveling for business in Greater Noida.
              </p>
              <Link className="theme-border-btn" href="/about">
                Read More<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-7 md-mb-30">
            <div className="accommodations__two-right">
              <img src="/img/custom/accommodation-terrace.jpg" alt="Boutique hotel terrace seating" />
              <div className="accommodations__two-right-bottom">
                <div className="accommodations__two-right-bottom-signature">
                  <img src="/img/bg/signature.png" alt="" />
                </div>
                <div className="accommodations__two-right-bottom-author">
                  <h5>David Beckham</h5>
                  <span>Founder CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;

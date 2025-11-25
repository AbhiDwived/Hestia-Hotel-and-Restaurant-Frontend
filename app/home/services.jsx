const Services = () => {
  return (
    <div className="services__two section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
            <div className="services__two-item">
              <span>01</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/cleaning-1.png" alt="" />
              </div>
              <div className="services__two-item-content">
                <h4>Room Cleaning</h4>
                <p>
                  Professional daily housekeeping service ensuring your room stays immaculate throughout your stay
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
            <div className="services__two-item">
              <span>02</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/car-parking.png" alt="" />
              </div>
              <div className="services__two-item-content">
                <h4>Car Parking</h4>
                <p>
                  Secure and convenient parking facilities available for all guests visiting our hotel
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
            <div className="services__two-item">
              <span>03</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/swimming-pool.png" alt="" />
              </div>
              <div className="services__two-item-content">
                <h4>Swimming pool</h4>
                <p>
                  Relax and unwind in our well-maintained swimming pool, perfect for leisure and fitness
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="services__two-item">
              <span>04</span>
              <div className="services__two-item-icon">
                <img src="/img/icon/location-1.png" alt="" />
              </div>
              <div className="services__two-item-content">
                <h4>PickUp & Drop</h4>
                <p>
                  Complimentary airport and railway station pickup and drop services for your convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

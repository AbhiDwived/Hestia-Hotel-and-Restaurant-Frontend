const Roomarea = () => {
  return (
    <div className="room__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="room__area-title">
              <span className="subtitle__one">Our Features</span>
              <h2>Single Room</h2>
              <p>
                Our single rooms at Hestia Hotel and Restaurant offer a perfect blend of comfort and functionality for solo travelers. Designed with modern aesthetics and thoughtful amenities, each room provides a peaceful retreat in the heart of Greater Noida. Whether you're visiting for business or leisure, our single rooms ensure a comfortable and productive stay.
              </p>
              <div className="room__area-title-contact">
                <div className="room__area-title-contact-icon">
                  <i className="fal fa-phone-alt"></i>
                </div>
                <div className="room__area-title-contact-content">
                  <span>
                    <a href="tel:+919990555740">+91 9211987979</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 order-last order-lg-second">
            <div className="room__area-image">
              <img src="/img/custom/room-single.jpg" alt="Premium single room interior" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 xl-mb-30">
            <div className="room__area-list">
              <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/key.png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                  <h5>Smart Key</h5>
                  <p>
                    Enjoy seamless access with our advanced smart key system for enhanced security and convenience
                  </p>
                </div>
              </div>
              <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/breakfast.png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                  <h5>Breakfast</h5>
                  <p>
                    Enjoy seamless access with our advanced smart key system for enhanced security and convenience
                  </p>
                </div>
              </div>
              <div className="room__area-list-item">
                <div className="room__area-list-item-icon">
                  <img src="/img/icon/wifi-1.png" alt="" />
                </div>
                <div className="room__area-list-item-content">
                  <h5>Home Wifi</h5>
                  <p>
                    Enjoy seamless access with our advanced smart key system for enhanced security and convenience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roomarea;

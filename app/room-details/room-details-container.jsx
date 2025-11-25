"use client";

import Sidebar from "./sidebar";

const faqData = {
  faqOne: [
    {
      id: "collapseOnePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Do you pay before or after booking a hotel ?",
      des: "At Hestia Hotel and Restaurant in Greater Noida, payment terms are flexible to accommodate your needs. Most reservations require a small deposit to secure your booking, with the remaining balance payable upon check-in or check-out. We offer various payment methods including credit cards, debit cards, UPI, and cash. For advance bookings, you can choose to pay the full amount upfront to take advantage of special discounts or pay a minimal deposit to confirm your reservation. Our flexible payment policy ensures a smooth and convenient booking experience.",
    },
    {
      id: "collapseTwoPage",
      class: "icon page",
      class2: "faq__area-item-body collapse show",
      title: "What documents are needed for hotel booking ?",
      des: "At Hestia Hotel and Restaurant in Greater Noida, payment terms are flexible to accommodate your needs. Most reservations require a small deposit to secure your booking, with the remaining balance payable upon check-in or check-out. We offer various payment methods including credit cards, debit cards, UPI, and cash. For advance bookings, you can choose to pay the full amount upfront to take advantage of special discounts or pay a minimal deposit to confirm your reservation. Our flexible payment policy ensures a smooth and convenient booking experience.",
    },
    {
      id: "collapseThreePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Do hotels charge your card before you check ?",
      des: "At Hestia Hotel and Restaurant in Greater Noida, payment terms are flexible to accommodate your needs. Most reservations require a small deposit to secure your booking, with the remaining balance payable upon check-in or check-out. We offer various payment methods including credit cards, debit cards, UPI, and cash. For advance bookings, you can choose to pay the full amount upfront to take advantage of special discounts or pay a minimal deposit to confirm your reservation. Our flexible payment policy ensures a smooth and convenient booking experience.",
    },
  ],
};
const { faqOne } = faqData;

const Roomdetailscontainer = () => {
  return (
    <>
      <div className="room__details section-padding">
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="col-xl-9 col-lg-8">
              <div className="room__details-right">
                <div className="room__details-right-content">
                  <h3 className="mb-25">
                    Luxury Room is the best online room for luxury hotels
                  </h3>
                  <p className="mb-25">
                    Experience unparalleled luxury in our exquisitely designed luxury rooms at Hestia Hotel and Restaurant, located in the heart of Greater Noida's Knowledge Park III. Each spacious room features elegant contemporary furnishings, premium bedding, and thoughtful amenities that ensure your utmost comfort. The rooms are thoughtfully designed with large windows offering abundant natural light and views of the surrounding area, creating a serene and inviting atmosphere for both business travelers and leisure guests. Our luxury rooms come equipped with modern conveniences including high-speed WiFi, smart LED television, minibar, safe deposit box, and a well-appointed ensuite bathroom with premium toiletries.
                  </p>
                  <p className="m-0">
                    Located near Pari Chowk in Knowledge Park III, our hotel offers easy access to major corporate offices, educational institutions, and shopping destinations. The luxury rooms feature climate control, blackout curtains for restful sleep, and a dedicated workspace for business needs. Wake up to a delicious breakfast served at our restaurant, and enjoy the convenience of 24-hour room service. Our dedicated housekeeping team ensures that your room remains immaculate throughout your stay, allowing you to relax and focus on what matters most during your visit to Greater Noida.
                  </p>
                  <div className="row mt-35 mb-35">
                    <div className="col-sm-6 sm-mb-30">
                      <img
                        className="img__full"
                        src="/img/hotel/hotel-24.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-sm-6">
                      <img
                        className="img__full"
                        src="/img/hotel/hotel-25.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <h3 className="mb-25">Special check-in instructions</h3>
                  <p className="mb-25">
                    For your convenience at Hestia Hotel and Restaurant, we offer seamless check-in and check-out processes. Our front desk team is available 24/7 to assist you with any special requirements or requests. Early check-in and late check-out options are available based on room availability, and we strive to accommodate all reasonable requests to make your stay more comfortable. Whether you're arriving late at night or need to extend your stay, our staff is ready to help.
                  </p>
                  <p className="m-0">
                    We recommend informing us in advance about your expected arrival time, especially for late-night arrivals or special occasions. Our hotel provides secure luggage storage facilities if you arrive before check-in time or need to store your belongings after check-out. Special arrangements can be made for business travelers, families with children, or guests requiring accessibility accommodations. Contact our reservation team to discuss your specific needs and ensure a personalized experience during your stay in Greater Noida.
                  </p>
                </div>
                <div className="room__details-right-list">
                  <h3>Amenities</h3>
                  <div className="row mt-35">
                    <div className="col-md-4 col-sm-6 mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-1.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Room Cleanig</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-2.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Car Parking</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-3.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Swimming pool</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-4.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Pick Up & Drop</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 md-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-5.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Spa Center</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-6.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Smart Key</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 md-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-7.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Home Wifi</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-8.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Beakfist</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-9.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Fitness Gym</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="room__details-right-faq mt-50">
                  <div id="accordionExamplePage">
                    {faqOne?.map((data, id) => (
                      <div className="faq__area-item" key={id}>
                        <h5
                          className={data.class}
                          data-bs-toggle="collapse"
                          data-bs-target={`#${data.id}`}
                        >
                          {data.title}
                        </h5>
                        <div
                          id={data.id}
                          className={data.class2}
                          data-bs-parent="#accordionExamplePage"
                        >
                          <p>{data.des}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roomdetailscontainer;

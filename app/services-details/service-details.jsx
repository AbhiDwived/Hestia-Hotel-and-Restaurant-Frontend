import Link from "next/link";
const faqData = {
    faqOne: [
        {id:'collapseOnePage',class: 'icon page collapsed',class2: 'faq__area-item-body collapse',title:'Do you pay before or after booking a hotel ?', des: 'At Hestia Hotel and Restaurant in Greater Noida, payment terms are flexible to accommodate your needs. Most reservations require a small deposit to secure your booking, with the remaining balance payable upon check-in or check-out. We offer various payment methods including credit cards, debit cards, UPI, and cash. For advance bookings, you can choose to pay the full amount upfront to take advantage of special discounts or pay a minimal deposit to confirm your reservation. Our flexible payment policy ensures a smooth and convenient booking experience.'},
        {id:'collapseTwoPage',class: 'icon page',class2: 'faq__area-item-body collapse show',title:'What documents are needed for hotel booking ?', des: 'To book your stay at Hestia Hotel and Restaurant in Greater Noida, you will need a valid government-issued photo identification such as Aadhaar card, driving license, passport, or PAN card. All guests above 18 years of age must provide valid ID proof at the time of check-in. For international guests, a valid passport and visa are required. If booking on behalf of someone else, you may need authorization documents. Our hotel maintains strict security protocols to ensure the safety and comfort of all our guests while complying with local regulations in Greater Noida.'},
        {id:'collapseThreePage',class: 'icon page collapsed',class2: 'faq__area-item-body collapse',title:'Do hotels charge your card before you check ?', des: 'Hestia Hotel and Restaurant typically authorizes your credit or debit card at the time of booking to ensure the card is valid and has sufficient funds. However, the actual charge depends on your booking terms. For prepaid bookings, the full amount is charged immediately. For standard reservations, we may hold an authorization amount equal to one night\'s stay plus taxes, but the actual payment is processed at check-in or check-out. This policy helps us manage reservations effectively while providing flexibility to our guests. Any authorization hold is released within 3-5 business days if no charges are made.'},
    ],
}
const { faqOne } = faqData;

const ServicesDetails = () => {
  return (
    <div className="services__details section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-4 lg-mb-30">
            <div className="all__sidebar">
              <div className="all__sidebar-item">
                <h5>Category</h5>
                <div className="all__sidebar-item-category">
                  <ul>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Small Suite
                        <span>(06)</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="active" href="/services-details">
                        <i className="far fa-angle-double-right"></i>Luxury Room
                        <span>(08)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Single
                        <span>(05)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Family
                        <span>(09)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Double Room
                        <span>(03)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="all__sidebar-item-help mt-30"
                style={{ backgroundImage: `url('/img/hotel/hotel-9.jpg')` }}
              >
                <div className="all__sidebar-item-help-icon">
                  <i className="fal fa-phone-alt"></i>
                </div>
                <h5> Easy solutions to your home beauty</h5>
                <div className="all__sidebar-item-help-contact">
                  <div className="all__sidebar-item-help-contact-content">
                    <span>Quick Help</span>
                    <h6>
                      <Link href="tel:+919990555740">+91 9211987979</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="services__details-left">
              <div className="services__details-left-image mb-30">
                <img src="/img/luxury/luxury-5.jpg" alt="" />
              </div>
              <div className="services__details-left-content">
                <h2 className="mb-30">Luxury Room</h2>
                <p className="mb-0">
                  Experience unparalleled luxury in our exquisitely designed luxury rooms at Hestia Hotel and Restaurant, located in the heart of Greater Noida's Knowledge Park III. Each spacious room features elegant contemporary furnishings, premium bedding, and thoughtful amenities that ensure your utmost comfort. The rooms are thoughtfully designed with large windows offering abundant natural light and views of the surrounding area, creating a serene and inviting atmosphere for both business travelers and leisure guests.
                </p>
                <span>
                  Our luxury rooms come equipped with modern conveniences including high-speed WiFi, smart LED television, minibar, safe deposit box, and a well-appointed ensuite bathroom with premium toiletries. The elegant decor combines contemporary design with warm, welcoming touches that make you feel at home. Whether you're visiting Greater Noida for business meetings or exploring the city's attractions, our luxury rooms provide the perfect retreat.
                </span>
                <p>
                  Located near Pari Chowk in Knowledge Park III, our hotel offers easy access to major corporate offices, educational institutions, and shopping destinations. The luxury rooms feature climate control, blackout curtains for restful sleep, and a dedicated workspace for business needs. Wake up to a delicious breakfast served at our restaurant, and enjoy the convenience of 24-hour room service. Our dedicated housekeeping team ensures that your room remains immaculate throughout your stay, allowing you to relax and focus on what matters most during your visit to Greater Noida.
                </p>
                <div className="row align-items-center mt-35 mb-35">
                  <div className="col-xl-6 col-lg-12 xl-mb-30">
                    <img
                      className="img__full"
                      src="/img/hotel/hotel-24.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <h3 className="mb-20">Customer Benefits</h3>
                    <p className="m-30">
                      At Hestia Hotel and Restaurant in Greater Noida, we are committed to providing exceptional service and value to all our guests. Whether you're traveling for business or leisure, our hotel offers numerous benefits that make your stay comfortable and memorable.
                    </p>
                    <div className="services__details-left-content-list">
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>Prime location in Knowledge Park III with easy access to major business hubs
                      </p>
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>Complimentary WiFi and modern amenities for business and leisure travelers
                      </p>
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>24-hour concierge service and room service for your convenience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
  );
};

export default ServicesDetails;

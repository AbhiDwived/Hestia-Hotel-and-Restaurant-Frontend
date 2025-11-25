"use client";
import Image from "next/image";
import Offers from "../../public/img/features/offers.jpg";

const Offerarea = () => {
  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">Company Offers</span>
                <h2>Book now and save up to 35% On hotel rooms</h2>
                <p>
                  Don't miss out on our exclusive hotel offers at Hestia Hotel and Restaurant in Greater Noida! Book your stay now and enjoy incredible savings of up to 35% on premium room bookings. This special promotion is available for a limited time and applies to advance reservations. Take advantage of our best rates for luxury accommodations, excellent dining, and world-class amenities in the heart of Knowledge Park III. Whether you're planning a business trip or a leisure getaway, now is the perfect time to reserve your perfect room at exceptional value.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src={Offers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerarea;

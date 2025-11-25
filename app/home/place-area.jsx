import Image from "next/image";
import Link from "next/link";

const Placearea = () => {
  return (
    <div className="place__area section-padding mt-35">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="place__area-image">
              <div className="row">
                <div className="col-6">
                  <div className="place__area-image-one">
                    {/* <img src="/img/custom/place-suite.jpg" alt="Luxury suite with city view" /> */}
                    <Image
                      src="/img/custom/place-suite.jpg"
                      alt="Luxury suite with city view"
                      width={520}
                      height={340}
                      className="w-100"
                      style={{ height: "240px", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="place__area-image-two">
                    <Image
                      src="/img/custom/place-pool.jpg"
                      alt="Resort pool deck at sunset"
                      width={520}
                      height={340}
                      className="w-100"
                      style={{ height: "240px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 lg-mt-30">
            <div className="place__area-title">
              <span className="subtitle__one">Awesome Place</span>
              <h2>We're a unique place to Spend time</h2>
              <p>
                Nestled in the heart of Greater Noida's Knowledge Park III, Hestia Hotel and Restaurant offers a unique and memorable experience for every guest. Our prime location near Pari Chowk provides easy access to major business centers, educational institutions, and cultural attractions. Whether you're here for a business conference, academic pursuits, or to explore the vibrant city, our hotel serves as your perfect base with modern amenities, exceptional dining, and warm hospitality that reflects the rich traditions of Uttar Pradesh.
              </p>
              <Link className="theme-btn" href="about">
                Read More<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placearea;

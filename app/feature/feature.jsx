import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Feature() {
  return (
    <div className="feature__area">
      <div className="container">
        <div className="row align-items-center bg-left mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                alt="Restaurant interior with gourmet setting"
                src="/img/custom/call-lobby.jpg"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Our Food</span>
                <h2>Restaurant Silo</h2>
                <p>
                  Experience exquisite dining at our restaurant, featuring authentic local cuisine and international dishes prepared by skilled chefs
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-right mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6  order-last order-lg-first">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Read Our Books</span>
                <h2>The Library</h2>
                <p>
                  A quiet and cozy library space with a curated collection of books for guests to enjoy during their leisure time
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/custom/accommodation-lamp.jpg"
                alt="Cozy library corner with bookshelves"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-left mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/custom/accommodation-terrace.jpg"
                alt="Modern fitness studio with equipment"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title p-4">
                <span className="subtitle__one">Fitness Equipment</span>
                <h2>Exercise equipment</h2>
                <p>
                  Stay fit and active with our fully equipped fitness center featuring modern exercise equipment and facilities
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-right flex justify-between">
          <div className="col-xl-6 col-lg-6 order-last order-lg-first">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Experiences</span>
                <h2>Swimming Pool</h2>
                <p>
                  Enjoy a refreshing dip in our beautiful swimming pool, perfect for relaxation and recreation during your stay
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/custom/place-pool.jpg"
                alt="Luxury infinity pool at sunset"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

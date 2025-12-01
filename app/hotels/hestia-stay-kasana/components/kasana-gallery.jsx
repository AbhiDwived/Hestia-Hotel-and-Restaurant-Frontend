import Link from "next/link";

const KasanaGallery = () => {
    return (
        <div className="accommodations__two section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-5 order-last order-lg-first">
                        <div className="accommodations__two-left">
                            <img src="/img/custom/accommodation-lamp.jpg" alt="Hestia Stay Interior" />
                            <div className="accommodations__two-left-roll"></div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 lg-mb-30">
                        <div className="accommodations__two-title">
                            <span className="subtitle__one">Gallery</span>
                            <h2>Experience Hestia Stay</h2>
                            <p>
                                Hotel Hestia Stay remains a high-value offering in the Greater Noida region, driving consistent occupancy and reinforcing DSY Hospitality’s commitment to operational excellence, guest satisfaction, and trusted service delivery.
                            </p>
                            <Link className="theme-border-btn" href="/contact">
                                Book Now<i className="fal fa-long-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 md-mb-30">
                        <div className="accommodations__two-right">
                            <img src="/img/custom/accommodation-terrace.jpg" alt="Hestia Stay Terrace" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KasanaGallery;

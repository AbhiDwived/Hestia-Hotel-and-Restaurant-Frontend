"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Link from "next/link";

const bannerData = {
    bannerItem: [
        {
            subtitle: "Knowledge Park III, Greater Noida",
            title: "Hestia Hotel & Restaurant",
            image: "/img/custom/booking-pool.jpg",
        },
        {
            subtitle: "Premium Hospitality",
            title: "Your Perfect Stay Awaits",
            image: "/img/custom/call-lobby.jpg",
        },
    ],
};
const { bannerItem } = bannerData;

const KP3Banner = () => {
    return (
        <div className="banner__two">
            <Swiper
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                }}
                effect={"fade"}
                loop={true}
                modules={[EffectFade, Pagination, Autoplay]}
            >
                {bannerItem?.map((data, id) => (
                    <SwiperSlide className="banner__two-area" key={id}>
                        <div
                            className="banner__two-area-image"
                            style={{ backgroundImage: `url(${data.image})` }}
                        ></div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="banner__two-content">
                                        <span>{data.subtitle}</span>
                                        <h1>{data.title}</h1>
                                        <div className="banner__two-content-button">
                                            <Link className="theme-btn" href="#rooms">
                                                View Rooms<i className="fal fa-long-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default KP3Banner;

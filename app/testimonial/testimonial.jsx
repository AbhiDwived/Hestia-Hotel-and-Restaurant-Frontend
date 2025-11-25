"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const testimonialData = [
    { image: "/img/avatar/testimonial-1.jpg", name: 'David Beckham', position: 'Business Executive', des: 'My stay at Hestia Hotel and Restaurant in Greater Noida was exceptional. The location in Knowledge Park III was perfect for my business meetings, and the rooms were spacious, clean, and well-appointed. The staff was attentive and professional, and the restaurant served delicious meals. I highly recommend this hotel for anyone visiting Greater Noida.' },
    { image: "/img/avatar/testimonial-2.jpg", name: 'David Fincher', position: 'Travel Enthusiast', des: 'What a wonderful experience at Hestia Hotel! The hotel exceeded my expectations with its modern amenities, comfortable accommodations, and excellent service. The proximity to major attractions in Greater Noida made my visit convenient, and the friendly staff made me feel truly welcome. I will definitely be staying here again on my next trip.' },
    { image: "/img/avatar/testimonial-3.jpg", name: 'Ridley Scott', position: 'Corporate Traveler', des: 'As someone who travels frequently for business, I can confidently say that Hestia Hotel and Restaurant is one of the best hotels I\'ve stayed at in Greater Noida. The facilities are top-notch, the WiFi is fast and reliable, and the business amenities are excellent. The restaurant offers great food, and the overall service quality is outstanding. Five stars!' },
]

const Testimonial = () => {
  return (
    <>
      <div className="testimonial__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial__area-bg">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4500,
                  }}
                  loop={true}
                  modules={[Autoplay, Pagination]}
                >
                  {testimonialData?.map((data, id) => (
                    <SwiperSlide key={id}>
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img
                            className="img__full"
                            src={data.image}
                            alt="image"
                          />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>{data.name}</h4>
                          <span>{data.position}</span>
                          <p>{data.des}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

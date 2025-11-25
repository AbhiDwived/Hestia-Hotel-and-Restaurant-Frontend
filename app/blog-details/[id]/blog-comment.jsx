const Blogcomment = ({ blogsData }) => {
  return (
    <div className="col-xxl-9 col-xl-8 col-lg-8 lg-mb-30">
      <div className="blog__details-left">
        <img src={blogsData.img} alt="" />
        <div className="blog__details-left-meta">
          <ul>
            <li>
              <a href="#">
                <i className="fal fa-user"></i>By - Admin
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fal fa-calendar-alt"></i>07, March 2023
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fal fa-comments"></i>3 Comment
              </a>
            </li>
          </ul>
        </div>
        <h3 className="mb-20">{blogsData.title}</h3>
        <p className="mb-25">
          Nestled in the vibrant Knowledge Park III area of Greater Noida, Hestia Hotel and Restaurant stands as a beacon of luxury and comfort for travelers visiting this rapidly developing region. Our hotel is strategically located near Pari Chowk, offering convenient access to major business districts, educational institutions, and entertainment centers. With thoughtfully designed accommodations, exceptional dining experiences, and impeccable service, we provide a perfect retreat for both business executives and leisure travelers exploring Greater Noida and the National Capital Region.
        </p>
        <p>
          Our commitment to excellence is reflected in every aspect of your stay, from the moment you enter our welcoming lobby to the comfortable rooms designed for relaxation and productivity. The hotel's prime location makes it an ideal base for exploring the city's attractions, conducting business meetings, or simply unwinding after a long day of activities in Greater Noida.
        </p>
        <div className="blog__details-left-box">
          <div className="blog__details-left-box-icon">
            <img src="/img/icon/quote.png" alt="" />
          </div>
          <p>
            "My stay at Hestia Hotel and Restaurant in Greater Noida was absolutely delightful. The location is perfect for business travelers, the rooms are spacious and well-appointed, and the restaurant serves authentic local cuisine. The staff went above and beyond to ensure my comfort. I highly recommend this hotel to anyone visiting the area."
          </p>
          <h5>David Beckham</h5>
        </div>
        <p>
          Greater Noida is a thriving planned city that has emerged as a major business and educational hub in the National Capital Region. The area is home to numerous multinational corporations, prestigious educational institutions, and state-of-the-art infrastructure. Hestia Hotel and Restaurant takes pride in being part of this dynamic community, offering guests not just accommodation, but an experience that reflects the progressive spirit of Knowledge Park III. Our hotel serves as a gateway to exploring the rich cultural heritage of Uttar Pradesh while enjoying modern amenities and world-class hospitality.
        </p>
        <div className="row mt-40 mb-40">
          <div className="col-sm-6 sm-mb-30">
            <div className="blog__details-left-list">
              <img className="img__full" src="/img/blog/blog-11.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="blog__details-left-list blog__details-left-list-hover">
              <img className="img__full" src="/img/blog/blog-12.jpg" alt="" />
            </div>
          </div>
        </div>
        <p className="mb-30">
          When planning your visit to Greater Noida, choosing the right accommodation is crucial for a comfortable and productive stay. Hestia Hotel and Restaurant offers an ideal combination of strategic location, modern amenities, and personalized service. Our proximity to Knowledge Park III makes us perfect for corporate travelers attending meetings or conferences, while our comfortable rooms and dining facilities ensure a relaxing experience for leisure guests. We understand that every traveler has unique needs, and our team is dedicated to providing tailored services that exceed expectations, whether you're here for a quick business trip or an extended stay exploring the wonders of Greater Noida.
        </p>
        <div className="blog__details-left-comment mb-45">
          <h4 className="mb-40">Comment (2)</h4>
          <div className="blog__details-left-comment-item">
            <div className="blog__details-left-comment-item-comment">
              <div className="blog__details-left-comment-item-comment-image">
                <img src="/img/avatar/comment-1.jpg" alt="" /> /
              </div>
              <div className="blog__details-left-comment-item-comment-content">
                <h5>
                  Justin Bieber
                  <a href="#">
                    <i className="far fa-reply-all"></i>Reply
                  </a>
                </h5>
                <span>20 May, 2023 At 9:PM</span>
                <p>
                  Great hotel with excellent service! The staff was very welcoming and the rooms were clean and comfortable. Perfect location for business meetings in Knowledge Park III.
                </p>
              </div>
            </div>
          </div>
          <div className="blog__details-left-comment-item ml-65 sm-ml-0">
            <div className="blog__details-left-comment-item-comment">
              <div className="blog__details-left-comment-item-comment-image">
                <img src="/img/avatar/comment-2.jpg" alt="" />
              </div>
              <div className="blog__details-left-comment-item-comment-content">
                <h5>
                  Camila Cabello
                  <a href="#">
                    <i className="far fa-reply-all"></i>Reply
                  </a>
                </h5>
                <span>22 May, 2023 At 7:PM</span>
                <p>
                  Great hotel with excellent service! The staff was very welcoming and the rooms were clean and comfortable. Perfect location for business meetings in Knowledge Park III.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog__details-left-contact">
          <h4 className="mb-40">Add Comment</h4>
          <div className="blog__details-left-contact-form">
            <form action="#">
              <div className="row">
                <div className="col-sm-6 mb-30">
                  <div className="blog__details-left-contact-form-item">
                    <i className="fal fa-user"></i>
                    <input type="text" name="name" placeholder="Full Name" />
                  </div>
                </div>
                <div className="col-sm-6 sm-mb-30">
                  <div className="blog__details-left-contact-form-item">
                    <i className="fal fa-envelope"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-sm-12 mb-30">
                  <div className="blog__details-left-contact-form-item">
                    <i className="fal fa-globe"></i>
                    <input type="text" name="subject" placeholder="https://" />
                  </div>
                </div>
                <div className="col-sm-12 mb-30">
                  <div className="blog__details-left-contact-form-item">
                    <i className="fal fa-pen"></i>
                    <textarea
                      name="message"
                      placeholder="Type your comments...."
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog__details-left-contact-form-item">
                    <button className="theme-btn" type="submit">
                      post Comment<i className="fal fa-long-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcomment;

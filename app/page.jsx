"use client"
import SEO from "@/components/seo";
import Footer from "./footer/footer";
import Header from "./header/header";
import ScrollToTopButton from "./scroll-to-top/scrollToTop";

// Home components
import Banner from "./home/banner";
import Deluxe from "./home/deluxe";
import Callarea from "./home/call-area";
import Accommodations from "./home/accommodations";
import Services from "./home/services";
import Roomarea from "./home/room-area";
import Teamarea from "./home/team-area";
import Bookingarea from "./home/booking-area";
import Placearea from "./home/place-area";
import Bandarea from "./home/band-area";

// Home One components (merged)
import Feature from "./feature/feature";
import Testimonial from "./testimonial/testimonial";
import Videoarea from "./videoarea/videoarea";
import Blog from "./blog/blog";



export default function Home() {
  return (
    <>
      <SEO pageTitle="Hestia Hotel and Restaurant" />
        <Header />
        <Banner />
        <Deluxe />
        <Callarea />
        <Accommodations />
        <Services />
        <Videoarea />
        <Feature />
        <Roomarea />
        <Teamarea />
        <Testimonial />
        <Bookingarea />
        <Placearea />
        <Blog />
        <Bandarea />
        <Footer />
        <ScrollToTopButton />
    </>
  );
}

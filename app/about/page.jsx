"use client";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import Header from "../header/header";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import SEO from "@/components/seo";
import AboutContent from "./about-content";
import Offerarea from "./offer-area";
import Servicestwo from "./services-two";
import Gallery from "./gallery";
import Team from "./team";

const About = () => {
  return (
    <>
      <SEO pageTitle='About Us' />
        <Header />
        <BreadCrumb title="About Us" innerTitle="About Us" bgImage="/img/banner/page-banner-1.jpg"/>
        <AboutContent />
        <Offerarea />
        <Servicestwo />
        <Gallery />
        <Team />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default About;

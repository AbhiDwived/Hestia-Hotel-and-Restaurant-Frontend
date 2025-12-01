"use client";
import SEO from "@/components/seo";
import Footer from "@/app/footer/footer";
import Header from "@/app/header/header";
import ScrollToTopButton from "@/app/scroll-to-top/scrollToTop";
import KP3Banner from "./components/kp3-banner";
import KP3Services from "./components/kp3-services";
import KP3Rooms from "./components/kp3-rooms";
import KP3Gallery from "./components/kp3-gallery";

export default function HestiaHotelKnowledgePark3() {
    return (
        <>
            <SEO pageTitle="Hestia Hotel & Restaurant, Knowledge Park-3" />
            <Header />
            <KP3Banner />
            <KP3Services />
            <KP3Rooms />
            <KP3Gallery />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

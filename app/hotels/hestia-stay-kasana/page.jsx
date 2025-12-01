"use client";
import SEO from "@/components/seo";
import Footer from "../../footer/footer";
import Header from "../../header/header";
import ScrollToTopButton from "../../scroll-to-top/scrollToTop";
import KasanaBanner from "./components/kasana-banner";
import KasanaRooms from "./components/kasana-rooms";
import KasanaServices from "./components/kasana-services";
import KasanaGallery from "./components/kasana-gallery";

const HestiaStayKasana = () => {
    return (
        <>
            <SEO pageTitle='Hestia Stay, Kasana' />
            <Header />
            <KasanaBanner />
            <KasanaServices />
            <KasanaRooms />
            <KasanaGallery />
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default HestiaStayKasana;

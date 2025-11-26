import React, { useState } from "react";
import { Blog, Room, Hotels } from "./Menu";
import Social from "../socials/page";
import Link from "next/link";
import DropDown from "./Down";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="header__sticky">
        <div className="header__area two">
          <div className="container custom__container">
            <div className="header__area-menubar">
              <div className="header__area-menubar-left">
                <div className="header__area-menubar-left-logo">
                 <Link href="/">
  <img
    src="/logo.png"
    alt="Hestia Hotel and Restaurant"
    style={{ width: "220px", height: "auto", maxHeight: "60px", display: "block" }}
  />
</Link>

                  <div className="responsive-menu"></div>
                </div>

              </div>
              <div className="header__area-menubar-right">
                <div className="header__area-menubar-right-info">
                  <span>
                    <a href="#">
                      <i className="fal fa-map-marker-alt"></i>Plot No- 14/29 A, near Pari Chowk, Knowledge Park III, Greater Noida, Uttar Pradesh 201310
                    </a>
                  </span>
                </div>
                <div className="header__area-menubar-right-sidebar">
                  <div
                    className="header__area-menubar-right-sidebar-popup-icon"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <i className="fal fa-bars"></i>
                  </div>
                </div>
                {/* Menu Sidebar Area */}
                <div
                  className={`header__area-menubar-right-sidebar-popup two ${sidebarOpen ? "active" : ""
                    }`}
                >
                  <div
                    className="sidebar-close-btn"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <i className="fal fa-times"></i>
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-logo">
                    <Link href="/">
                      <img
                        src="/logo.png"
                        alt="Hestia Hotel and Restaurant"
                        style={{ width: "150px", height: "auto" }}
                      />
                    </Link>
                  </div>

                  <div className="header__area-menubar-right-sidebar-popup-menu">
                    <ul className="side__menu">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">OUR HOTELS</a>
                        <DropDown />
                        <ul className="sub-menu">
                          <Hotels />
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Room</a>
                        <DropDown />
                        <ul className="sub-menu">
                          <Room />
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <DropDown />
                        <ul className="sub-menu">
                          <Blog />
                        </ul>
                      </li>
                      <li>
                        <Link href="/">EVENTS</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/team">Team</Link>
                      </li>
                      <li>
                        <Link href="/services-details">Services Details</Link>
                      </li>
                      <li>
                        <Link href="/404-error">404 Page</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-bottom">
                    <p>
                      Copyright © 2024{" "}
                      <a href="#">
                        Hestia Hotel and Restaurant
                      </a>
                    </p>
                    <div className="header__area-menubar-right-sidebar-popup-social">
                      <Social />
                    </div>
                  </div>
                </div>
                <div
                  className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

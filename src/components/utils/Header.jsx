"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ArrowRight, X, ChevronDown, Home } from "lucide-react";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const headerRef = useRef(null);
  const mobileNavRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
    if (mobileNavOpen) {
      setActiveMobileSubMenu(null);
    }
  };

  const handleMobileNavClose = () => {
    setMobileNavOpen(false);
    setActiveMobileSubMenu(null);
  };

  const handleMobileSubMenuToggle = (menuItem, event) => {
    event.stopPropagation();
    setActiveMobileSubMenu(activeMobileSubMenu === menuItem ? null : menuItem);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.offsetTop;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > headerTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavOpen &&
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        !event.target.closest(".menu-start")
      ) {
        handleMobileNavClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileNavOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`z-99 main-bar-wraper navbar-expand-lg duration-500 ${
          isFixed ? "is-fixed sticky-header" : ""
        }`}
      >
        <div className="main-bar">
          <div className="container">
            <div className="bottom-bar">
              <div className="two-bar">
                <div className="flex items-center justify-between">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        alt="logo"
                        src="/assets/img/logo.svg"
                        width={250}
                        height={80}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <button
                onClick={handleMobileMenuToggle}
                className={`menu-start lg:hidden ${mobileNavOpen ? "open" : ""}`}
                aria-label="Mobil menü váltása"
              >
                {mobileNavOpen ? <X size={30} /> : <Menu size={30} />}
              </button>

              {/* Asztali navigáció */}
              <nav className="navbar lg:block hidden">
                <ul className="navbar-links">
                  <li className="navbar-dropdown">
                    <Link href="/about-us">Rólunk</Link>
                  </li>
                  <li className="navbar-dropdown menu-item-children group relative">
                    <Link href="/services" className="flex items-center">
                      Szolgáltatások
                      <ChevronDown
                        size={16}
                        className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                      />
                    </Link>
                    <ul className="sub-menu absolute hidden group-hover:block bg-white shadow-lg py-2 rounded-md">
                      <li>
                        <Link href="/services">Minden szolgáltatás</Link>
                      </li>
                      <li>
                        <Link href="/services/altalanos-fogaszat">Szolgáltatás részletei</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar-dropdown">
                    <Link href="/cases">Esetek</Link>
                  </li>
                  <li className="navbar-dropdown menu-item-children group relative">
                    <Link href="/blog" className="flex items-center">
                      Blog
                      <ChevronDown
                        size={16}
                        className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                      />
                    </Link>
                    <ul className="sub-menu absolute hidden group-hover:block bg-white shadow-lg py-2 rounded-md">
                      <li>
                        <Link href="/blog">Összes blog</Link>
                      </li>
                      <li>
                        <Link href="/blog/5-tipp-a-fogko-megelozesehez-otthon">Blog részletei</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar-dropdown">
                    <Link href="/contact-us">Kapcsolat</Link>
                  </li>
                </ul>
              </nav>

              <div className="header-menu-right">
                <Link href="/appointment" className="btn xl:block hidden">
                  <span className="flex items-center gap-2">
                    Időpontfoglalás
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobil navigáció */}
          <div ref={mobileNavRef} className={`mobile-nav ${mobileNavOpen ? "open" : ""}`}>
            <div className="res-log mb-30">
              <Link href="/" onClick={handleMobileNavClose}>
                <Image
                  alt="logo"
                  src="/assets/img/logo.svg"
                  className="w-auto"
                  width={150}
                  height={40}
                />
              </Link>
            </div>
            <ul>
              <li>
                <Link href="/about-us" onClick={handleMobileNavClose}>
                  Rólunk
                </Link>
              </li>
              <li
                className={`menu-item-has-children ${
                  activeMobileSubMenu === "research" ? "active" : ""
                }`}
                onClick={(e) => handleMobileSubMenuToggle("research", e)}
              >
                <Link href="/services">
                  Szolgáltatások{" "}
                  <ChevronDown
                    size={16}
                    className={`ml-auto transition-transform duration-200 ${
                      activeMobileSubMenu === "research" ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                <ul
                  className={`sub-menu ${
                    activeMobileSubMenu === "research" ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <Link href="/services">Minden szolgáltatás</Link>
                  </li>
                  <li>
                    <Link href="/services/altalanos-fogaszat">Szolgáltatás részletei</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/cases" onClick={handleMobileNavClose}>
                  Esetek
                </Link>
              </li>
              <li
                className={`menu-item-has-children ${
                  activeMobileSubMenu === "blog" ? "active" : ""
                }`}
                onClick={(e) => handleMobileSubMenuToggle("blog", e)}
              >
                <Link href="/blog">
                  Blog{" "}
                  <ChevronDown
                    size={16}
                    className={`ml-auto transition-transform duration-200 ${
                      activeMobileSubMenu === "blog" ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                <ul
                  className={`sub-menu ${
                    activeMobileSubMenu === "blog" ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <Link href="/blog">Összes blog</Link>
                  </li>
                  <li>
                    <Link href="/blog/5-tipp-a-fogko-megelozesehez-otthon">Blog részletei</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact-us" onClick={handleMobileNavClose}>
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

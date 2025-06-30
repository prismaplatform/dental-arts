'use client';

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { Menu, Search, ArrowRight, X, ChevronDown, Home } from "lucide-react"; // Import necessary Lucide icons

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null); // Renamed for clarity
  const [isFixed, setIsFixed] = useState(false);
  const headerRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
    // When opening/closing the main mobile menu, ensure no sub-menus are active
    if (mobileNavOpen) {
      setActiveMobileSubMenu(null);
    }
  };

  const handleMobileNavClose = () => {
    setMobileNavOpen(false);
    setActiveMobileSubMenu(null); // Close any open sub-menus
  };

  // Toggles the active sub-menu for mobile navigation
  const handleMobileSubMenuToggle = (menuItem, event) => {
    event.stopPropagation(); // Prevent the click from propagating to parent li
    setActiveMobileSubMenu(activeMobileSubMenu === menuItem ? null : menuItem);
  };

  // Effect for fixing the header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.offsetTop;
        const scrollTop = window.scrollY || document.documentElement.scrollTop; // Use window.scrollY for modern browsers

        if (scrollTop > headerTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`z-99 main-bar-wraper navbar-expand-lg duration-500 ${isFixed ? 'is-fixed sticky-header' : ''}`}
      >
        <div className="main-bar">
          <div className="container">
            <div className="bottom-bar">
              <div className="two-bar">
                <div className="flex items-center justify-between">
                  <div className="logo">
                    <Link href="/"> {/* Use Next.js Link */}
                      <Image alt="logo" src="/assets/img/logo.svg" width={250} height={80} /> {/* Use Next.js Image */}
                    </Link>
                  </div>
                </div>
              </div>
              <button
                onClick={handleMobileMenuToggle}
                className={`menu-start lg:hidden ${mobileNavOpen ? 'open' : ''}`} // Only show on smaller screens
                aria-label="Toggle mobile menu"
              >
                {mobileNavOpen ? <X size={30} /> : <Menu size={30} />} {/* Change icon based on state */}
              </button>

              {/* Desktop Navigation */}
              <nav className="navbar lg:block hidden">
                <ul className="navbar-links">
 
                  <li className="navbar-dropdown">
                    <Link href="/about-us">About</Link> {/* Use Link */}
                  </li>
                  <li className="navbar-dropdown menu-item-children group relative">
                    <Link href="/services" className="flex items-center">Services <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" /></Link>
                    <ul className="sub-menu absolute hidden group-hover:block bg-white shadow-lg py-2 rounded-md">
                      <li><Link href="/services">All Services</Link></li>
                      <li><Link href="services/medical-services">Services Details</Link></li>
                    </ul>
                  </li>
                    <li className="navbar-dropdown">
                    <Link href="/cases">Cases</Link> {/* Use Link */}
                  </li>
                  <li className="navbar-dropdown menu-item-children group relative">
                    <Link href="/blog" className="flex items-center">Blog <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" /></Link>
                    <ul className="sub-menu absolute hidden group-hover:block bg-white shadow-lg py-2 rounded-md">
                      <li><Link href="/blog">All Blog</Link></li>
                      <li><Link href="/blog/In-Depth-HealthInsights">Blog Details</Link></li>
                    </ul>
                  </li>
                  <li className="navbar-dropdown">
                    <Link href="/contact-us">Contact</Link>
                  </li>
                </ul>
              </nav>

              <div className="header-menu-right">
              
                <Link href="/appointment" className="btn xl:block hidden">
                  <span className="flex items-center gap-2">
                    Book Appointment
                    {/* <ArrowRight size={16} /> */}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
            <div className="res-log mb-30">
              <Link href="/" onClick={handleMobileNavClose}> {/* Close menu on logo click */}
                <Image alt="logo" src="/assets/img/logo.svg" className="w-auto" width={150} height={40} />
              </Link>
            </div>
            <ul>
             
              <li>
                <Link href="/about-us" onClick={handleMobileNavClose}>About</Link>
              </li>
              <li
                className={`menu-item-has-children ${activeMobileSubMenu === 'research' ? 'active' : ''}`}
                onClick={(e) => handleMobileSubMenuToggle('research', e)}
              >
                <Link href="/services">Services <ChevronDown size={16} className={`ml-auto transition-transform duration-200 ${activeMobileSubMenu === 'research' ? 'rotate-180' : ''}`} /></Link>
                <ul className={`sub-menu ${activeMobileSubMenu === 'research' ? 'block' : 'hidden'}`}>
                  <li><Link href="/services">All Services</Link></li>
                  <li><Link href="/services/medical-services">Services Details</Link></li>
                </ul>
              </li>
             <li>
                <Link href="/cases" onClick={handleMobileNavClose}>Cases</Link>
              </li>
             
              <li
                className={`menu-item-has-children ${activeMobileSubMenu === 'blog' ? 'active' : ''}`}
                onClick={(e) => handleMobileSubMenuToggle('blog', e)}
              >
                <Link href={"/blog"}>Blog <ChevronDown size={16} className={`ml-auto transition-transform duration-200 ${activeMobileSubMenu === 'blog' ? 'rotate-180' : ''}`} /></Link>
                <ul className={`sub-menu ${activeMobileSubMenu === 'blog' ? 'block' : 'hidden'}`}>
                  <li><Link href="/blog">All Blog</Link></li>
                  <li><Link href="/blog/In-Depth-HealthInsights">Blog Details</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/contact" onClick={handleMobileNavClose}>Contact</Link>
              </li>
            </ul>
            <button onClick={handleMobileNavClose} className="res-cross" aria-label="Close mobile menu">
              <X size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
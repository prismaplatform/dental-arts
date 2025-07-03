"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ArrowRight, X, ChevronDown, Home, Globe } from "lucide-react";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('hu');
  const headerRef = useRef(null);
  const mobileNavRef = useRef(null);
  const languageRef = useRef(null);

  const languages = [
    { code: 'hu', name: 'Magyar', flag: '/assets/img/flags/hu.png' },
    { code: 'en', name: 'English', flag: '/assets/img/flags/en.webp' },
    { code: 'ro', name: 'Română', flag: '/assets/img/flags/ro.png' },
    { code: 'de', name: 'Deutsch', flag: '/assets/img/flags/de.webp' },
    { code: 'at', name: 'Österreichisch', flag: '/assets/img/flags/at.png' }
  ];

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

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    setLanguageDropdownOpen(false);
    setMobileLangDropdownOpen(false);
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
      
      if (
        languageDropdownOpen &&
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileNavOpen, languageDropdownOpen]);

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
              <div className="lg:hidden flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 "
                    aria-label="Nyelv választása"
                  >
                    <Image
                      src={languages.find(lang => lang.code === currentLanguage)?.flag}
                      alt={languages.find(lang => lang.code === currentLanguage)?.name}
                      width={20}
                      height={15}
                      className="object-cover "
                    />
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 text-gray-600 ${
                        mobileLangDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileLangDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 shadow-2xl min-w-[180px] z-50 overflow-hidden backdrop-blur-lg">
                      <div className="py-2">
                        {languages.map((lang, index) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-all duration-200 flex items-center gap-3 text-sm group customlang ${
                              currentLanguage === lang.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                            } ${index !== languages.length - 1 ? 'border-b border-gray-100' : ''}`}
                          >
                            <Image
                              src={lang.flag}
                              alt={lang.name}
                              width={18}
                              height={14}
                              className="object-cover "
                            />
                            <span className="font-medium group-hover:text-blue-700 transition-colors">
                              {lang.name}
                            </span>
                            {currentLanguage === lang.code && (
                              <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleMobileMenuToggle}
                  className={`menu-start ${mobileNavOpen ? "open" : ""}`}
                  aria-label="Mobil menü váltása"
                >
                  {mobileNavOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
              </div>

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
              <div className="header-menu-right lg:flex hidden items-center gap-4">
                <div className="relative" ref={languageRef}>
                  <button
                    onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                    className="flex items-center gap-3 px-4 py-2.5 "
                    aria-label="Nyelv választása"
                  >
                    <Image
                      src={languages.find(lang => lang.code === currentLanguage)?.flag}
                      alt={languages.find(lang => lang.code === currentLanguage)?.name}
                      width={22}
                      height={16}
                      className="object-cover"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      {languages.find(lang => lang.code === currentLanguage)?.name}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 text-gray-500 ${
                        languageDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {languageDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 shadow-2xl min-w-[180px] z-50 overflow-hidden backdrop-blur-lg">
                      <div className="py-10">
                        {languages.map((lang, index) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-left px-5 py-3 hover:bg-blue-50 transition-all duration-200 flex items-center gap-3 text-sm group customlang ${
                              currentLanguage === lang.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                            } ${index !== languages.length - 1 ? 'border-b border-gray-100' : ''}`}
                          >
                            <Image
                              src={lang.flag}
                              alt={lang.name}
                              width={20}
                              height={15}
                              className="object-cover"
                            />
                            <span className="font-medium group-hover:text-blue-700 transition-colors">
                              {lang.name}
                            </span>
                            {currentLanguage === lang.code && (
                              <div className="ml-auto">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Link href="/appointment" className="btn">
                  <span className="flex items-center gap-2">
                    Időpontfoglalás
                  </span>
                </Link>
              </div>
            </div>
          </div>
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
                <Link href="/services" className="flex items-center justify-between">
                  Szolgáltatások
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
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
                    <Link href="/services" onClick={handleMobileNavClose}>Minden szolgáltatás</Link>
                  </li>
                  <li>
                    <Link href="/services/altalanos-fogaszat" onClick={handleMobileNavClose}>Szolgáltatás részletei</Link>
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
                <Link href="/blog" className="flex items-center justify-between">
                  Blog
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
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
                    <Link href="/blog" onClick={handleMobileNavClose}>Összes blog</Link>
                  </li>
                  <li>
                    <Link href="/blog/5-tipp-a-fogko-megelozesehez-otthon" onClick={handleMobileNavClose}>Blog részletei</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact-us" onClick={handleMobileNavClose}>
                  Kapcsolat
                </Link>
              </li>
            </ul>
            <div className="mt-8 pt-4 absolute bottom-30 w-[85%]">
              <Link 
                href="/appointment" 
                onClick={handleMobileNavClose}
                className="btn w-full block text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Időpontfoglalás
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
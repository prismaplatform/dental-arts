"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl"; // Hooks for locale and translations
import { Menu, Search, ArrowRight, X, ChevronDown, Home, Globe } from "lucide-react";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const headerRef = useRef(null);
  const mobileNavRef = useRef(null);
  const languageRef = useRef(null);

  const t = useTranslations("Header"); // Translations for the Header namespace
  const locale = useLocale(); // Current locale
  const router = useRouter(); // next-intl router for locale switching
  const pathname = usePathname(); // Current pathname without locale

  const languages = [
    { code: "hu", flag: "/assets/img/flags/hu.png" },
    { code: "en", flag: "/assets/img/flags/en.webp" },
    { code: "ro", flag: "/assets/img/flags/ro.png" },
    { code: "de", flag: "/assets/img/flags/de.webp" },
    { code: "at", flag: "/assets/img/flags/at.png" },
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
    // Switch locale by pushing the same pathname with the new locale
    router.push(pathname, { locale: langCode });
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
                      <Image alt="logo" src="/assets/img/logo.svg" width={250} height={80} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:hidden flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2"
                    aria-label={t("languageSelectAria")}
                  >
                    <Image
                      src={languages.find((lang) => lang.code === locale)?.flag}
                      alt={t(`language.${locale}`)}
                      width={20}
                      height={15}
                      className="object-cover"
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
                              locale === lang.code ? "bg-blue-50 text-blue-700" : "text-gray-700"
                            } ${index !== languages.length - 1 ? "border-b border-gray-100" : ""}`}
                          >
                            <Image
                              src={lang.flag}
                              alt={t(`language.${lang.code}`)}
                              width={18}
                              height={14}
                              className="object-cover"
                            />
                            <span className="font-medium group-hover:text-blue-700 transition-colors">
                              {t(`language.${lang.code}`)}
                            </span>
                            {locale === lang.code && (
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
                  aria-label={t("mobileMenuToggleAria")}
                >
                  {mobileNavOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
              </div>

              <nav className="navbar lg:block hidden">
                <ul className="navbar-links">
                  <li className="navbar-dropdown">
                    <Link href="/about-us">{t("aboutUs")}</Link>
                  </li>
                  <li className="navbar-dropdown menu-item-children group relative">
                    <Link href="/services" className="flex items-center">
                      {t("services")}
                      <ChevronDown
                        size={16}
                        className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                      />
                    </Link>
                    <ul className="sub-menu absolute hidden group-hover:block bg-white shadow-lg py-2 rounded-md">
                      <li>
                        <Link href="/services">{t("allServices")}</Link>
                      </li>
                      <li>
                        <Link href="/services/altalanos-fogaszat">{t("serviceDetails")}</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar-dropdown">
                    <Link href="/cases">{t("cases")}</Link>
                  </li>
                  <li className="navbar-dropdown menu-item-children group relative">
                    <Link href="/blog" className="flex items-center">
                      {t("blog")}
                      <ChevronDown
                        size={16}
                        className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                      />
                    </Link>
                    <ul className="sub-menu absolute hidden group-hover:block bg-white shadow-lg py-2 rounded-md">
                      <li>
                        <Link href="/blog">{t("allBlogs")}</Link>
                      </li>
                      <li>
                        <Link href="/blog/5-tipp-a-fogko-megelozesehez-otthon">
                          {t("blogDetails")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar-dropdown">
                    <Link href="/contact-us">{t("contact")}</Link>
                  </li>
                </ul>
              </nav>
              <div className="header-menu-right lg:flex hidden items-center gap-4">
                <div className="relative" ref={languageRef}>
                  <button
                    onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                    className="flex items-center gap-3 px-4 py-2.5"
                    aria-label={t("languageSelectAria")}
                  >
                    <Image
                      src={languages.find((lang) => lang.code === locale)?.flag}
                      alt={t(`language.${locale}`)}
                      width={22}
                      height={16}
                      className="object-cover"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      {t(`language.${locale}`)}
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
                              locale === lang.code ? "bg-blue-50 text-blue-700" : "text-gray-700"
                            } ${index !== languages.length - 1 ? "border-b border-gray-100" : ""}`}
                          >
                            <Image
                              src={lang.flag}
                              alt={t(`language.${lang.code}`)}
                              width={20}
                              height={15}
                              className="object-cover"
                            />
                            <span className="font-medium group-hover:text-blue-700 transition-colors">
                              {t(`language.${lang.code}`)}
                            </span>
                            {locale === lang.code && (
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
                  <span className="flex items-center gap-2">{t("appointment")}</span>
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
                  {t("aboutUs")}
                </Link>
              </li>
              <li
                className={`menu-item-has-children ${
                  activeMobileSubMenu === "research" ? "active" : ""
                }`}
                onClick={(e) => handleMobileSubMenuToggle("research", e)}
              >
                <Link href="/services" className="flex items-center justify-between">
                  {t("services")}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      activeMobileSubMenu === "research" ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                <ul
                  className={`sub-menu ${activeMobileSubMenu === "research" ? "block" : "hidden"}`}
                >
                  <li>
                    <Link href="/services" onClick={handleMobileNavClose}>
                      {t("allServices")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/altalanos-fogaszat" onClick={handleMobileNavClose}>
                      {t("serviceDetails")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/cases" onClick={handleMobileNavClose}>
                  {t("cases")}
                </Link>
              </li>
              <li
                className={`menu-item-has-children ${
                  activeMobileSubMenu === "blog" ? "active" : ""
                }`}
                onClick={(e) => handleMobileSubMenuToggle("blog", e)}
              >
                <Link href="/blog" className="flex items-center justify-between">
                  {t("blog")}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      activeMobileSubMenu === "blog" ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                <ul className={`sub-menu ${activeMobileSubMenu === "blog" ? "block" : "hidden"}`}>
                  <li>
                    <Link href="/blog" onClick={handleMobileNavClose}>
                      {t("allBlogs")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/5-tipp-a-fogko-megelozesehez-otthon"
                      onClick={handleMobileNavClose}
                    >
                      {t("blogDetails")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact-us">{t("contact")}</Link>
              </li>
            </ul>
            <div className="mt-8 pt-4 absolute bottom-30 w-[85%]">
              <Link
                href="/appointment"
                onClick={handleMobileNavClose}
                className="btn w-full block text-center"
              >
                <span className="flex items-center justify-center gap-2">{t("appointment")}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

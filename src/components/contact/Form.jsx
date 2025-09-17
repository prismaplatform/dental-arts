"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Map from "./Map";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const Form = () => {
  const t = useTranslations("contact");
  const locale = useLocale();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    gdprConsent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  // Lokalizált hibaüzenetek
  const getLocalizedError = (key, fallback) => {
    const messages = {
      hu: {
        nameRequired: "Név megadása kötelező",
        emailRequired: "Email cím megadása kötelező",
        emailInvalid: "Érvényes email címet adjon meg",
        phoneRequired: "Telefonszám megadása kötelező",
        messageRequired: "Írjon üzenetet",
        gdprRequired: "Elfogadása kötelező az adatvédelmi tájékoztatónak",
        submitSuccess: "Üzenet sikeresen elküldve!",
        submitError: "Hiba történt az üzenet küldése során. Kérjük, próbálja újra.",
        networkError: "Hálózati hiba történt. Kérjük, ellenőrizze internetkapcsolatát."
      },
      de: {
        nameRequired: "Name ist erforderlich",
        emailRequired: "E-Mail-Adresse ist erforderlich",
        emailInvalid: "Geben Sie eine gültige E-Mail-Adresse ein",
        phoneRequired: "Telefonnummer ist erforderlich",
        messageRequired: "Schreiben Sie eine Nachricht",
        gdprRequired: "Die Zustimmung zur Datenschutzerklärung ist erforderlich",
        submitSuccess: "Nachricht erfolgreich gesendet!",
        submitError: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.",
        networkError: "Netzwerkfehler aufgetreten. Bitte überprüfen Sie Ihre Internetverbindung."
      }
    };
    
    return messages[locale]?.[key] || fallback;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = getLocalizedError('nameRequired', 'Name is required');
    }

    if (!formData.email.trim()) {
      newErrors.email = getLocalizedError('emailRequired', 'Email is required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = getLocalizedError('emailInvalid', 'Please enter a valid email');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = getLocalizedError('phoneRequired', 'Phone number is required');
    }

    if (!formData.message.trim()) {
      newErrors.message = getLocalizedError('messageRequired', 'Please write a message');
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = getLocalizedError('gdprRequired', 'GDPR consent is required');
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
const response = await fetch('/api/contact', {
  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          gdprConsent: formData.gdprConsent
        }),
      });

      console.log('Contact response status:', response.status);
      const data = await response.json();
      console.log('Contact response data:', data);

      if (data.success && response.status !== 400) {
        setSubmitMessage(getLocalizedError('submitSuccess', 'Message sent successfully!'));
        setMessageType("success");
        
        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          gdprConsent: false,
        });
        setErrors({});
      } else {
        setSubmitMessage(data.message || getLocalizedError('submitError', 'An error occurred'));
        setMessageType("error");
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage(getLocalizedError('networkError', 'Network error occurred'));
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="lg:py-120 md:py-80 py-60">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-30">
          <div className="lg:col-span-6 col-span-12">
            <div className="w-[fit-content] pb-24">
              <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-5 block">
                {t("form.subtitle")}
              </span>
              <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">
                {t("form.title")}
              </h2>
              <p className="text-gray-600 mt-4 text-base leading-relaxed">
                {t("form.content")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white">
              {/* Success/Error Message */}
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg text-sm ${
                  messageType === "success" 
                    ? "bg-green-100 text-green-800 border border-green-300" 
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}>
                  {submitMessage}
                </div>
              )}

              <div className="grid grid-cols-12 sm:gap-x-30">
                <div className="lg:col-span-12 col-span-12">
                  <input
                    className={`w-full h-50 pl-20 border ${
                      errors.name ? "border-red-500" : "border-[#D8D8D8]"
                    } mb-4 rounded-[10px] outline-none focus:border-primary transition-colors`}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("form.fields.name")}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mb-20">{errors.name}</p>
                  )}
                  {!errors.name && <div className="mb-20"></div>}
                </div>

                <div className="lg:col-span-6 col-span-12">
                  <input
                    className={`w-full h-50 pl-20 border ${
                      errors.email ? "border-red-500" : "border-[#D8D8D8]"
                    } mb-4 rounded-[10px] outline-none focus:border-primary transition-colors`}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("form.fields.email")}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mb-20">{errors.email}</p>
                  )}
                  {!errors.email && <div className="mb-20"></div>}
                </div>

                <div className="lg:col-span-6 col-span-12">
                  <input
                    className={`w-full h-50 pl-20 border ${
                      errors.phone ? "border-red-500" : "border-[#D8D8D8]"
                    } mb-4 rounded-[10px] outline-none focus:border-primary transition-colors`}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t("form.fields.phone")}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mb-20">{errors.phone}</p>
                  )}
                  {!errors.phone && <div className="mb-20"></div>}
                </div>

                <div className="col-span-12">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("form.fields.message")}
                    className={`w-full h-180 p-20 border ${
                      errors.message ? "border-red-500" : "border-[#D8D8D8]"
                    } mb-4 rounded-[10px] outline-none focus:border-primary transition-colors resize-none`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mb-18">
                      {errors.message}
                    </p>
                  )}
                  {!errors.message && <div className="mb-18"></div>}
                </div>

                {/* GDPR Consent Section */}
                <div className="col-span-12">
                  <div className="mb-24">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="gdprConsent"
                        name="gdprConsent"
                        checked={formData.gdprConsent}
                        onChange={handleInputChange}
                        className="w-20 h-20 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                        disabled={isSubmitting}
                      />
                      <label
                        htmlFor="gdprConsent"
                        className="text-sm text-gray-700 leading-relaxed"
                      >
                        {t("form.gdpr.part1")}{" "}
                        <Link
                          href="/terms"
                          className="text-primary hover:underline"
                        >
                          {t("form.gdpr.link")}
                        </Link>{" "}
                        {t("form.gdpr.part2")}
                      </label>
                    </div>
                    {errors.gdprConsent && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.gdprConsent}
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-span-12">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn w-full flex items-center justify-center gap-2 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isSubmitting ? t("form.submitting") : t("form.submit")}
                      {!isSubmitting && <ArrowRight size={16} />}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="lg:col-span-6 col-span-12 max-lg:mt-40">
            <div className="w-full ml-auto xxl:p-50 xl:p-42 sm:p-40 p-30 bg-secondary">
              <h3 className="text-white xxl:text-2.3xl sm:text-2xxl text-xl font-semibold sm:pb-30 pb-25 font-sora">
                {t("info.subtitle")}
              </h3>
              <ul>
                <li className="border-b border-[#304F74] pb-20 mb-20">
                  <span className="text-white pb-5 block flex items-center gap-2">
                    <Mail size={16} />
                    {t("info.emailLabel")}
                  </span>
                  <Link
                    className="text-white block font-bold font-sora hover:text-primary duration-500"
                    href="mailto:info@dentalarts.hu"
                  >
                    info@dentalarts.hu
                  </Link>
                </li>
                <li className="border-b border-[#304F74] pb-20 mb-20">
                  <span className="text-white pb-5 block flex items-center gap-2">
                    <Phone size={16} />
                    {t("info.phoneLabel")}
                  </span>
                  <Link
                    className="text-white block font-bold font-sora hover:text-primary duration-500"
                    href="tel:3699531015"
                  >
                    (+36) 99 531 015
                  </Link>
                </li>
                <li className="border-b border-[#304F74] pb-20 mb-20">
                  <span className="text-white pb-5 block flex items-center gap-2">
                    <MapPin size={16} />
                    {t("info.addressLabel")}
                  </span>
                  <h6 className="text-white block font-bold font-sora">
                    Balf, Sopron, Fürdő sor 12, 9494 Hungary
                  </h6>
                </li>
              </ul>
              <ul className="flex items-center gap-10 xxl:pt-48 pt-42">
                <li>
                  <Link
                    href="https://www.facebook.com/digitalworkflowestheticaldentistry"
                    className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={18} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

const Cta = () => {
  const t = useTranslations("newsletter");
  const locale = useLocale(); // Aktuális nyelv lekérése
  const [email, setEmail] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  // Nyelv-specifikus üzenetek
  const getLocalizedMessage = (key, fallbackMessage) => {
    const messages = {
      hu: {
        emailRequired: "Email cím megadása kötelező",
        gdprRequired: "GDPR beleegyezés szükséges",
        subscribeSuccess: "Sikeresen feliratkozott a hírlevélre!",
        alreadySubscribed: "Ezzel az email címmel már feliratkozott",
        networkError: "Hálózati hiba történt. Kérjük, próbálja meg újra.",
        generalError: "Hiba történt. Kérjük, próbálja meg újra."
      },
      de: {
        emailRequired: "E-Mail-Adresse ist erforderlich",
        gdprRequired: "DSGVO-Zustimmung ist erforderlich",
        subscribeSuccess: "Erfolgreich für Newsletter angemeldet!",
        alreadySubscribed: "Mit dieser E-Mail-Adresse sind Sie bereits angemeldet",
        networkError: "Netzwerkfehler aufgetreten. Bitte versuchen Sie es erneut.",
        generalError: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
      }
    };

    return messages[locale]?.[key] || fallbackMessage;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage(getLocalizedMessage('emailRequired', "Email address is required"));
      setMessageType("error");
      return;
    }

    if (!gdprConsent) {
      setMessage(getLocalizedMessage('gdprRequired', "GDPR consent is required"));
      setMessageType("error");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          gdprConsent: gdprConsent
        }),
      });

      const data = await response.json();
      
      // Debug logok hozzáadása
      console.log('Response data:', data);
      console.log('data.success:', data.success);
      console.log('data.statusCode:', data.statusCode);
      console.log('data.message:', data.message);

      if (data.success) {
        setMessage(getLocalizedMessage('subscribeSuccess', "Successfully subscribed to newsletter!"));
        setMessageType("success");
        setEmail("");
        setGdprConsent(false);
      } else {
        // Ellenőrizzük a statusCode-ot és a specifikus üzeneteket
        if (data.statusCode === 409 || 
            data.message === "already_subscribed_error" ||
            (data.message && (
              data.message.includes("already subscribed") || 
              data.message.includes("már feliratkozott") ||
              data.message.includes("bereits angemeldet")
            ))) {
          setMessage(getLocalizedMessage('alreadySubscribed', "You are already subscribed"));
        } else {
          setMessage(data.message || getLocalizedMessage('generalError', "An error occurred"));
        }
        setMessageType("error");
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage(getLocalizedMessage('networkError', "Network error occurred. Please try again."));
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#B122E5] to-[#B122E5] max-lg:flex-wrap max-lg:gap-20 sm:p-50 p-20 flex items-center rounded-[20px] w-full lg:justify-between">
        <div className="lg:w-1/2 w-full">
          <h2 className="xxl:text-5xl xl:text-[42px] sm:text-4xl text-2xxl font-bold font-sora text-white sm:leading-44 leading-34 xl:leading-62 max-lg:text-center">
            {t("title")}
          </h2>
        </div>
        <div className="subscribe-form max-lg:mx-auto w-full sm:w-auto lg:w-1/2 xl:w-2/5">
          <form onSubmit={handleSubmit} className="relative w-full">
            {/* Message Display */}
            {message && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                messageType === "success" 
                  ? "bg-green-100 text-green-800 border border-green-300" 
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}>
                {message}
              </div>
            )}
            
            <div className="relative flex flex-wrap items-stretch w-full">
              <input
                className="bg-white w-full lg:h-80 sm:h-60 h-55 sm:pl-30 pl-15 sm:pr-167 pr-122 rounded-[12px] outline-none max-sm:text-sm"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !email.trim() || !gdprConsent}
                className={`btn secondary absolute lg:right-7 lg:top-11.5 right-3 top-3.5 rounded-[10px] ${
                  isLoading || !email.trim() || !gdprConsent
                    ? "opacity-50 cursor-not-allowed" 
                    : "hover:opacity-90"
                }`}
              >
                <span>{isLoading ? "..." : t("subscribe")}</span>
              </button>
            </div>

            {/* GDPR Checkbox */}
            <div className="flex items-start mt-4">
              <input
                type="checkbox"
                id="gdpr-consent"
                checked={gdprConsent}
                onChange={(e) => setGdprConsent(e.target.checked)}
                required
                className="mr-2 mt-1 min-w-[16px] min-h-[16px]"
                disabled={isLoading}
              />
              <label htmlFor="gdpr-consent" className="text-white text-sm cursor-pointer">
                {t("privacy")}{" "}
                <Link 
                  href="/terms" 
                  className="underline hover:no-underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t("link")}
                </Link>.
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cta; 
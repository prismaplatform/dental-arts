'use client';

import React, { useState } from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Stethoscope } from 'lucide-react';
import Map from './Map';
import Link from 'next/link';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    gdprConsent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Név megadása kötelező';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email cím megadása kötelező';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Érvényes email címet adjon meg';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonszám megadása kötelező';
    }


    if (!formData.message.trim()) {
      newErrors.message = 'Írjon üzenetet';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'Elfogadása kötelező az adatvédelmi tájékoztatónak';
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

    try {
      console.log('Beküldött adatok:', formData);

      await new Promise(resolve => setTimeout(resolve, 1000));

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        gdprConsent: false
      });

      alert('Időpontfoglalás sikeres!');
    } catch (error) {
      console.error('Hiba a beküldés során:', error);
      alert('Hiba történt az időpontfoglalás során. Kérjük, próbálja újra.');
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
                # Időpontfoglalás
              </span>
              <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">
                Foglaljon időpontot vagy tegye fel kérdését!
              </h2>
              <p className="text-gray-600 mt-4 text-base leading-relaxed">
                Ha időpontot szeretne foglalni vizsgálatra vagy kezelésre, vagy bármilyen kérdése van szolgáltatásainkkal kapcsolatban, kérjük töltse ki az alábbi űrlapot. Munkatársaink hamarosan felvesszük Önnel a kapcsolatot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white">
              <div className="grid grid-cols-12 sm:gap-x-30">
                <div className="lg:col-span-12 col-span-12">
                  <input
                    className={`w-full h-50 pl-20 border ${errors.name ? 'border-red-500' : 'border-[#D8D8D8]'} mb-4 rounded-[10px] outline-none focus:border-primary transition-colors`}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Neved"
                  />
                  {errors.name && <p className="text-red-500 text-sm mb-20">{errors.name}</p>}
                  {!errors.name && <div className="mb-20"></div>}
                </div>

                <div className="lg:col-span-6 col-span-12">
                  <input
                    className={`w-full h-50 pl-20 border ${errors.email ? 'border-red-500' : 'border-[#D8D8D8]'} mb-4 rounded-[10px] outline-none focus:border-primary transition-colors`}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email címed"
                  />
                  {errors.email && <p className="text-red-500 text-sm mb-20">{errors.email}</p>}
                  {!errors.email && <div className="mb-20"></div>}
                </div>

                <div className="lg:col-span-6 col-span-12">
                  <input
                    className={`w-full h-50 pl-20 border ${errors.phone ? 'border-red-500' : 'border-[#D8D8D8]'} mb-4 rounded-[10px] outline-none focus:border-primary transition-colors`}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefonszámod"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mb-20">{errors.phone}</p>}
                  {!errors.phone && <div className="mb-20"></div>}
                </div>

                

                <div className="col-span-12">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Írj üzenetet..."
                    className={`w-full h-180 p-20 border ${errors.message ? 'border-red-500' : 'border-[#D8D8D8]'} mb-4 rounded-[10px] outline-none focus:border-primary transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mb-18">{errors.message}</p>}
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
                      />
                      <label htmlFor="gdprConsent" className="text-sm text-gray-700 leading-relaxed">
                        Elfogadom a személyes adataim kezelését az{' '}
                        <Link href="/terms" className="text-primary hover:underline">
                          Adatvédelmi Szabályzat
                        </Link>{' '}
                        szerint, és hozzájárulok, hogy felvegyék velem a kapcsolatot időpontfoglalás ügyében.
                      </label>
                    </div>
                    {errors.gdprConsent && <p className="text-red-500 text-sm mt-2">{errors.gdprConsent}</p>}
                  </div>
                </div>

                <div className="col-span-12">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn w-full flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <span className="flex items-center gap-2">
                      {isSubmitting ? 'Foglalás folyamatban...' : 'Időpont foglalása'}
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="lg:col-span-6 col-span-12 max-lg:mt-40">
            <div className="w-full ml-auto xxl:p-50 xl:p-42 sm:p-40 p-30 bg-secondary">
              <h3 className="text-white xxl:text-2.3xl sm:text-2xxl text-xl font-semibold sm:pb-30 pb-25 font-sora">
                Dental Arts Kapcsolat:
              </h3>
              <ul>
                <li className="border-b border-[#304F74] pb-20 mb-20">
                  <span className="text-white pb-5 block flex items-center gap-2">
                    <Mail size={16} />
                    Email cím
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
                    Telefonszám
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
                    Cím
                  </span>
                  <h6 className="text-white block font-bold font-sora">
                    Balf, Sopron, Fürdő sor 12, 9494 Hungary
                  </h6>
                </li>
                {/* <li>
                  <span className="text-white pb-5 block flex items-center gap-2">
                    <Stethoscope size={16} />
                    Téma
                  </span>
                  <h6 className="text-white block font-bold font-sora">
                    Orvosi és Fogászati szolgáltatások
                  </h6>
                </li> */}
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
                {/* <li>
                  <Link
                    href="https://x.com/" 
                    className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/" 
                    className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/" 
                    className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube size={18} />
                  </Link>
                </li> */}
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

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    message: ''
  })
  
  const [gdprAccepted, setGdprAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!gdprAccepted) {
      alert('Please accept the privacy policy to continue.')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Form submission logic here
      console.log('Form submitted:', { ...formData, gdprAccepted })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        doctor: '',
        message: ''
      })
      setGdprAccepted(false)
      
      alert('Appointment request submitted successfully!')
      
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="appiontment-section bg-no-repeat bg-right lg:py-120 md:py-80 py-60">
        <div className="container mx-auto px-4"> 
          <div className="flex flex-wrap items-end">
            <div className="lg:w-1/2 w-full">
              <div className="lg:pb-50 pb-30 w-fit">
                <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-6 block">
                  # Get In Touch
                </span>
                <h2 className="xxl:text-5xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold font-sora text-secondary leading-[1.2]">
                  Make An Appointment
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="xxl:p-40 p-30 border border-[#D8D8D8] rounded-[20px] bg-white">
                <div className="grid grid-cols-12 sm:gap-x-30">
                  <div className="lg:col-span-6 col-span-12">
                    <input 
                      className="w-full h-50 pl-20 border border-[#D8D8D8] mb-24 rounded-[10px] outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <input 
                      className="w-full h-50 pl-20 border border-[#D8D8D8] mb-24 rounded-[10px] outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <input 
                      className="w-full h-50 pl-20 border border-[#D8D8D8] mb-24 rounded-[10px] outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="lg:col-span-6 col-span-12 select-box">
                    <select 
                      className="w-full h-50 pl-20 border border-[#D8D8D8] mb-24 rounded-[10px] outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Doctor</option>
                      <option value="dr-john">Dr. Include John</option>
                      <option value="dr-david">Dr. David</option>
                      <option value="dr-robert">Dr. Robert</option>
                    </select>
                  </div>
                  <div className="col-span-12">
                    <textarea 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                      placeholder="Write A Message..." 
                      className="w-full h-180 p-20 border border-[#D8D8D8] mb-24 rounded-[10px] outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    />
                  </div>
                  
                  {/* GDPR Checkbox */}
                  <div className="col-span-12">
                    <div className="flex items-start gap-3 mb-24">
                      <input
                        type="checkbox"
                        id="gdpr-consent"
                        checked={gdprAccepted}
                        onChange={(e) => setGdprAccepted(e.target.checked)}
                        className="w-20 h-20 text-blue-600 bg-gray-100 border-gray-300 rounded-sm "
                        required
                      />
                      <label htmlFor="gdpr-consent" className="text-sm text-gary font-sora leading-relaxed">
                        I agree to the{' '}
                        <Link href="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>{' '}
                        and consent to the processing of my personal data for appointment scheduling and communication purposes. 
                        <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-span-12">
                    <button 
                      type="submit" 
                      disabled={isSubmitting || !gdprAccepted}
                      className="btn w-full bg-primary hover:bg-secondary text-white py-15 px-30 rounded-[10px] font-semibold font-sora duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                       <span className='flex gap-10'>
                      Read More <ArrowRight size={20} />
                    </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="lg:w-1/2 w-full self-end">
              <div className="relative before:absolute before:size-full before:bg-primary before:[clip-path:polygon(22%_14%,100%_45%,100%_100%,_0%_100%)] before:left-0">
                <Image 
                  alt="Appointment consultation" 
                  src="/assets/img/appiontment.png" 
                  width={600}
                  height={700}
                  className="relative z-[11] w-full h-auto"
                />
                
                <div className="bg-white md:p-24 p-14 absolute z-[11] bottom-40 md:right-[5%] right-[11%] flex items-center rounded-[20px] before:absolute before:[clip-path:polygon(50%_100%,0_0,100%_0)] before:w-30 before:h-20 before:bg-white before:-bottom-20 before:left-[46%]">
                  <div className="bg-primary md:size-60 size-50 rounded-full items-center justify-center flex mr-11">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9002 0.923608C11.9002 0.680093 11.997 0.446552 12.1691 0.274361C12.3413 0.10217 12.5749 0.00543358 12.8184 0.00543358C15.2527 0.00810694 17.5865 0.976325 19.3078 2.69766C21.0291 4.41899 21.9973 6.75285 22 9.18718C22 9.4307 21.9033 9.66424 21.7311 9.83643C21.5589 10.0086 21.3253 10.1054 21.0818 10.1054C20.8383 10.1054 20.6048 10.0086 20.4326 9.83643C20.2604 9.66424 20.1637 9.4307 20.1637 9.18718C20.1615 7.23973 19.3869 5.37267 18.0099 3.99562C16.6328 2.61856 14.7658 1.84397 12.8184 1.84178C12.5749 1.84178 12.3413 1.74505 12.1691 1.57286C11.997 1.40066 11.9002 1.16712 11.9002 0.923608ZM12.8184 5.51448C13.7924 5.51448 14.7266 5.90143 15.4153 6.59019C16.1041 7.27896 16.491 8.21312 16.491 9.18718C16.491 9.4307 16.5878 9.66424 16.76 9.83643C16.9321 10.0086 17.1657 10.1054 17.4092 10.1054C17.6527 10.1054 17.8862 10.0086 18.0584 9.83643C18.2306 9.66424 18.3274 9.4307 18.3274 9.18718C18.3259 7.72654 17.745 6.32614 16.7122 5.29331C15.6794 4.26048 14.279 3.67959 12.8184 3.67813C12.5749 3.67813 12.3413 3.77487 12.1691 3.94706C11.997 4.11925 11.9002 4.35279 11.9002 4.59631C11.9002 4.83982 11.997 5.07336 12.1691 5.24556C12.3413 5.41775 12.5749 5.51448 12.8184 5.51448ZM21.1672 15.3748C21.6993 15.9083 21.9981 16.6311 21.9981 17.3846C21.9981 18.1382 21.6993 18.861 21.1672 19.3945L20.3317 20.3577C12.812 27.5571 -5.487 9.26247 1.6012 1.71875L2.65709 0.800573C3.19125 0.283344 3.90756 -0.00278493 4.65106 0.00408831C5.39457 0.0109615 6.10547 0.310285 6.62997 0.8373C6.65844 0.865763 8.35979 3.07581 8.35979 3.07581C8.86462 3.60617 9.14565 4.31069 9.14445 5.04291C9.14326 5.77513 8.85993 6.47872 8.35336 7.00743L7.29013 8.3443C7.87853 9.774 8.74364 11.0733 9.83574 12.1677C10.9278 13.262 12.2254 14.1297 13.6539 14.721L14.999 13.6513C15.5278 13.1452 16.2312 12.8622 16.9632 12.8611C17.6952 12.8601 18.3995 13.1411 18.9297 13.6458C18.9297 13.6458 21.1388 15.3463 21.1672 15.3748ZM19.9038 16.7098C19.9038 16.7098 17.7067 15.0194 17.6782 14.991C17.4891 14.8034 17.2335 14.6982 16.9671 14.6982C16.7007 14.6982 16.4451 14.8034 16.256 14.991C16.2312 15.0167 14.3793 16.4922 14.3793 16.4922C14.2545 16.5915 14.1059 16.6566 13.9483 16.6811C13.7907 16.7056 13.6294 16.6886 13.4804 16.6317C11.6298 15.9427 9.94889 14.864 8.55154 13.4687C7.15418 12.0734 6.07302 10.3941 5.38127 8.54446C5.31994 8.39338 5.29994 8.22869 5.32334 8.06732C5.34674 7.90595 5.41269 7.75372 5.51441 7.62629C5.51441 7.62629 6.98989 5.77341 7.01468 5.74954C7.20224 5.56038 7.30747 5.30479 7.30747 5.03841C7.30747 4.77203 7.20224 4.51644 7.01468 4.32728C6.98622 4.29974 5.29589 2.10071 5.29589 2.10071C5.1039 1.92856 4.85333 1.83636 4.59556 1.84302C4.33778 1.84968 4.09231 1.95468 3.90946 2.13652L2.85358 3.05469C-2.32669 9.28359 13.5309 24.2618 18.9893 19.1035L19.8258 18.1394C20.0218 17.9578 20.1395 17.7072 20.1541 17.4404C20.1687 17.1736 20.0789 16.9116 19.9038 16.7098Z" fill="white"/>
                    </svg>
                  </div>
                  <div> 
                    <span className="block text-gary pb-3">Emergency Call</span>
                    <Link className="font-bold text-secondary hover:text-primary duration-300" href="tel:013354213-92132">
                      013 354 213 - 92132
                    </Link>
                  </div>
                </div>

                <ul className="shaps">
                  
                </ul>
              </div>
            </div>
          </div> 
        </div>
      </section>
    </>
  )
}

export default Appointment
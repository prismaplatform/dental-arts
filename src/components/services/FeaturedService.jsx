"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Monitor, Smile, Star } from "lucide-react";
import Image from "next/image";

const FeaturedService = ({ 
  featuredService = {
    id: 1,
    title: "Fogszabályozás",
    subtitle: "Gyönyörű mosoly mindenkinek",
    description: "Modern fogszabályozási technikákkal segítünk abban, hogy tökéletes mosolyt érj el. Tapasztalt szakembereink egyedi kezelési tervet állítanak össze számodra, figyelembe véve egyéni igényeidet és életstílusodat.",
  
    price: "450",
    duration: "12-24 hónap",
    bgGradient: ""
  }
}) => {
  return (
   <section className="lg:pt-120 md:pt-100 sm:pt-80 pt-60 services-grid-section">
		<div className="container">
			<div className="grid grid-cols-12 xxl:gap-50 gap-25">
				<div className="lg:col-span-6 col-span-12">
					<div className="relative">
						<img src="/assets/img/digital-service.png" alt="img" className="relative sm:rounded-tr-[20px] rounded-tr-[10px] sm:rounded-bl-[20px] rounded-bl-[10px] w-full"/>
					</div>
				</div>
				<div className="lg:col-span-6 col-span-12">
					<div>
						<span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-6 block"># Kiemelt szolgáltatás</span>
						<h2 className="xxl:text-5xl lg:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold text-secondary leading-[1.2] font-sora"> Digitális fogászat</h2>
						<p className="text-base text-gary font-normal xxl:leading-30 xl:leading-28 leading-26 mt-25 xl:pb-50 pb-40 w-[fit-content]"> A legmodernebb digitális technológiákkal biztosítjuk a pontos
                diagnózist és a gyors, kényelmes kezeléseket. Digitális
                lenyomatvétel, 3D tervezés és esztétikus megoldások – mindent
                azért, hogy mosolyod a legszebb formáját mutassa.</p>
					</div>
					<div className="about-text-two gap-20 duration-500 max-sm:flex-wrap flex justify-between relative sm:after:absolute sm:after:h-full sm:after:w-px sm:after:bg-[#D8D8D8] sm:after:left-1/2">
						<div className="flex sm:w-[45%] w-full items-center">
							<Monitor className="h-52 w-52 text-primary"/>
							<h3 className="font-bold xl:pl-22 pl-20 xxl:text-2xl xl:text-xl lg:text-base text-xl font-sora text-secondary">  Digitális diagnosztikas</h3>
						</div>
						<div className="flex sm:w-[45%] w-full items-center">
							<Smile className="h-52 w-52 text-[#12ebf2]"/>
							<h3 className="font-bold xl:pl-22 pl-20 xxl:text-2xl xl:text-xl lg:text-base text-xl font-sora text-secondary">Esztétikus mosoly</h3>
						</div>
					</div>
					{/* <div className="xxl:pt-53 xl:pt-40 pt-30">
						<div className="skill-focus flex items-center justify-between pb-10">
						  <span className="text-2xl font-bold text-black">Community Focus</span>
						  <span className="text-2xl font-bold text-black">80%</span>
						</div>
						<div className="h-8 w-full flex overflow-hidden bg-[#e9ecef]">
							<div className="progress-bar  flex flex-col justify-center overflow-hidden text-white items-center whitespace-nowrap bg-secondary w-[80%]" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{maxWidth:"80%"}}></div>
						</div>
					</div> */}
					{/* <div className="max-sm:flex-wrap flex items-center xl:gap-50 sm:gap-30 gap-20 xxl:pt-60 xl:pt-46 pt-30 about-service">
						<a href="about.html" className="btn max-xxl:px-30"><span>More About Us<i className="fa-solid fa-arrow-right"></i></span></a>
						<div className="flex items-center gap-23">
							<i className="">
								<svg className="max-xl:w-36" width="46" height="46" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								  <path d="M8.65471 0.66883C8.65471 0.491728 8.72506 0.32188 8.85029 0.19665C8.97552 0.0714199 9.14536 0.0010664 9.32246 0.0010664C11.0929 0.00301066 12.7902 0.70717 14.042 1.95905C15.2939 3.21093 15.9981 4.90828 16 6.6787C16 6.8558 15.9296 7.02565 15.8044 7.15088C15.6792 7.27611 15.5093 7.34647 15.3322 7.34647C15.1551 7.34647 14.9853 7.27611 14.8601 7.15088C14.7348 7.02565 14.6645 6.8558 14.6645 6.6787C14.6629 5.26238 14.0996 3.90451 13.0981 2.90302C12.0966 1.90152 10.7388 1.33818 9.32246 1.33659C9.14536 1.33659 8.97552 1.26624 8.85029 1.14101C8.72506 1.01578 8.65471 0.845932 8.65471 0.66883ZM9.32246 4.00765C10.0309 4.00765 10.7102 4.28906 11.2112 4.78998C11.7121 5.2909 11.9935 5.97029 11.9935 6.6787C11.9935 6.8558 12.0638 7.02565 12.1891 7.15088C12.3143 7.27611 12.4841 7.34647 12.6612 7.34647C12.8383 7.34647 13.0082 7.27611 13.1334 7.15088C13.2586 7.02565 13.329 6.8558 13.329 6.6787C13.3279 5.61642 12.9055 4.59794 12.1543 3.84679C11.4032 3.09564 10.3847 2.67318 9.32246 2.67212C9.14536 2.67212 8.97552 2.74247 8.85029 2.8677C8.72506 2.99293 8.65471 3.16278 8.65471 3.33988C8.65471 3.51699 8.72506 3.68683 8.85029 3.81206C8.97552 3.93729 9.14536 4.00765 9.32246 4.00765ZM15.3943 11.1788C15.7813 11.5668 15.9986 12.0925 15.9986 12.6405C15.9986 13.1885 15.7813 13.7142 15.3943 14.1022L14.7867 14.8027C9.31779 20.0386 -3.99055 6.73346 1.16451 1.24711L1.93243 0.57935C2.32091 0.203183 2.84186 -0.0049107 3.38259 8.80176e-05C3.92332 0.00508674 4.44034 0.222776 4.8218 0.60606C4.8425 0.626761 6.07985 2.23407 6.07985 2.23407C6.447 2.61979 6.65138 3.13216 6.65051 3.66469C6.64964 4.19721 6.44358 4.70892 6.07517 5.09343L5.30192 6.0657C5.72984 7.10548 6.35901 8.05045 7.15327 8.84633C7.94753 9.6422 8.89122 10.2733 9.93012 10.7033L10.9084 9.92537C11.2929 9.55724 11.8045 9.35142 12.3369 9.35068C12.8693 9.34993 13.3814 9.55431 13.767 9.92136C13.767 9.92136 15.3736 11.1581 15.3943 11.1788ZM14.4755 12.1497C14.4755 12.1497 12.8776 10.9203 12.8569 10.8996C12.7193 10.7632 12.5334 10.6867 12.3397 10.6867C12.146 10.6867 11.9601 10.7632 11.8225 10.8996C11.8045 10.9183 10.4576 11.9914 10.4576 11.9914C10.3669 12.0637 10.2589 12.111 10.1442 12.1288C10.0296 12.1466 9.91231 12.1343 9.80391 12.0929C8.45803 11.5918 7.23555 10.8073 6.2193 9.79254C5.20304 8.77776 4.41674 7.55643 3.91365 6.21127C3.86905 6.10139 3.8545 5.98162 3.87152 5.86426C3.88854 5.7469 3.9365 5.63619 4.01048 5.5435C4.01048 5.5435 5.08356 4.19596 5.10159 4.1786C5.23799 4.04103 5.31452 3.85514 5.31452 3.66141C5.31452 3.46768 5.23799 3.2818 5.10159 3.14423C5.08089 3.1242 3.85155 1.5249 3.85155 1.5249C3.71193 1.3997 3.5297 1.33265 3.34222 1.33749C3.15475 1.34234 2.97622 1.4187 2.84325 1.55095L2.07533 2.21871C-1.69214 6.74882 9.84064 17.642 13.8104 13.8905L14.4188 13.1894C14.5613 13.0574 14.6469 12.8751 14.6575 12.681C14.6681 12.487 14.6028 12.2965 14.4755 12.1497Z" fill="#021935"></path>
								</svg> 
							</i> 
							<div>
								<span className="block">Call Service</span>
								<a href="callto:0133592132" className="font-bold text-secondary font-sora">013 354 213 - 92132</a>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	</section>
  );
};

export default FeaturedService;
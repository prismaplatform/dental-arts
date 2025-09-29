"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Monitor, Smile, Star } from "lucide-react";
import Image from "next/image";

const FeaturedService = ({ 
	title, 
	text1, 
	text2, 
	featuredService, // ← Javított prop név
}) => {
  return (
   <section className="lg:pt-120 md:pt-100 sm:pt-80 pt-60 services-grid-section">
		<div className="container">
			<div className="grid grid-cols-12 xxl:gap-50 gap-25">
				<div className="lg:col-span-6 col-span-12">
					<div className="relative">
						<img src={`http://adminpanel.dentalarts.hu/uploads/services/${featuredService.main_image_url}`} alt="img" className="relative sm:rounded-tr-[20px] rounded-tr-[10px] sm:rounded-bl-[20px] rounded-bl-[10px] w-full"/>
					</div>
				</div>
				<div className="lg:col-span-6 col-span-12">
					<div>
						<span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-6 block">{title}</span>
						<h2 className="xxl:text-5xl lg:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-semibold text-secondary leading-[1.2] font-sora">{featuredService?.title}</h2>
						<p className="text-base text-gary font-normal xxl:leading-30 xl:leading-28 leading-26 mt-25 xl:pb-50 pb-40 w-[fit-content]">{featuredService?.short_description}</p>
					</div>
					<div className="about-text-two gap-20 duration-500 max-sm:flex-wrap flex justify-between relative sm:after:absolute sm:after:h-full sm:after:w-px sm:after:bg-[#D8D8D8] sm:after:left-1/2">
						<div className="flex sm:w-[45%] w-full items-center">
							<Monitor className="h-52 w-52 text-primary"/>
							<h3 className="font-bold xl:pl-22 pl-20 xxl:text-2xl xl:text-xl lg:text-base text-xl font-sora text-secondary">{text1}</h3>
						</div>
						<div className="flex sm:w-[45%] w-full items-center">
							<Smile className="h-52 w-52 text-[#12ebf2]"/>
							<h3 className="font-bold xl:pl-22 pl-20 xxl:text-2xl xl:text-xl lg:text-base text-xl font-sora text-secondary">{text2}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
};

export default FeaturedService;
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SingleBlog = () => {
  return (
    <>
      <section className="xxl:py-120 lg:py-100 md:py-80 py-60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <h2 className="xxl:text-5.2xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-bold py-20 font-sora text-secondary leading-[1.2] text-center">
                In-Depth Health Insights
              </h2>
              
              <figure className="mb-30 overflow-hidden rounded-lg">
                <Image
                  src="/assets/img/blog-details-1.jpg"
                  alt="Health insights blog image"
                  width={800}
                  height={500}
                  className="w-full h-auto group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500"
                />
              </figure>
              
              <div className="pb-20 flex justify-center gap-8">
                <span className="text-gary inline-flex items-center gap-2 font-sora">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.43724 7.49957C8.43724 8.0171 8.01722 8.43713 7.4997 8.43713C6.98218 8.43713 6.56216 8.0171 6.56216 7.49957C6.56216 6.98205 6.98218 6.56202 7.4997 6.56202C8.01722 6.56202 8.43724 6.98205 8.43724 7.49957ZM10.6248 6.56202C10.1073 6.56202 9.68729 6.98205 9.68729 7.49957C9.68729 8.0171 10.1073 8.43713 10.6248 8.43713C11.1423 8.43713 11.5624 8.0171 11.5624 7.49957C11.5624 6.98205 11.1423 6.56202 10.6248 6.56202ZM4.37457 6.56202C3.85705 6.56202 3.43704 6.98205 3.43704 7.49957C3.43704 8.0171 3.85705 8.43713 4.37457 8.43713C4.89209 8.43713 5.31211 8.0171 5.31211 7.49957C5.31211 6.98205 4.89209 6.56202 4.37457 6.56202ZM15 7.71209V11.8748C15 13.598 13.5981 15 11.8749 15H8.1766C3.8008 15 0.293159 12.0048 0.0181476 8.03335C-0.132483 5.86073 0.660048 3.73436 2.19261 2.1999C3.72517 0.665438 5.85151 -0.129607 8.02222 0.0172758C11.9349 0.282916 15 3.66248 15 7.71209ZM13.75 7.71209C13.75 4.31752 11.1973 1.48548 7.93784 1.26422C7.79471 1.25422 7.65158 1.24985 7.50907 1.24985C5.84901 1.24985 4.25332 1.90488 3.07702 3.08307C1.79947 4.3619 1.13882 6.13512 1.26507 7.9471C1.49821 11.3098 4.4052 13.7506 8.17723 13.7506H11.8755C12.9093 13.7506 13.7506 12.9093 13.7506 11.8754V7.71271L13.75 7.71209Z" fill="#646464" />
                  </svg>
                  By Admin
                </span>
                
                <span className="text-gary inline-flex items-center gap-2 font-sora">
                  <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 7.5C6.2252 7.5 6.93411 7.28007 7.53709 6.86801C8.14007 6.45596 8.61004 5.87029 8.88756 5.18507C9.16508 4.49984 9.23769 3.74584 9.09621 3.01841C8.95473 2.29099 8.60552 1.6228 8.09273 1.09835C7.57993 0.573905 6.9266 0.216752 6.21533 0.0720569C5.50407 -0.0726377 4.76682 0.00162483 4.09683 0.285454C3.42683 0.569282 2.85418 1.04993 2.45128 1.66661C2.04838 2.2833 1.83333 3.00832 1.83333 3.75C1.8343 4.74426 2.22092 5.69751 2.90835 6.40056C3.59577 7.1036 4.52784 7.49901 5.5 7.5ZM5.5 1.25C5.98347 1.25 6.45607 1.39662 6.85806 1.67133C7.26005 1.94603 7.57336 2.33648 7.75837 2.79329C7.94339 3.25011 7.9918 3.75278 7.89748 4.23773C7.80316 4.72268 7.57035 5.16814 7.22848 5.51777C6.88662 5.8674 6.45106 6.1055 5.97689 6.20197C5.50271 6.29843 5.01122 6.24892 4.56455 6.0597C4.11789 5.87048 3.73612 5.55005 3.46752 5.13893C3.19892 4.72781 3.05556 4.24446 3.05556 3.75C3.05556 3.08696 3.31309 2.45108 3.77152 1.98224C4.22994 1.51339 4.85169 1.25 5.5 1.25Z" fill="#646464" />
                    <path d="M5.5 8.75C4.04181 8.75165 2.6438 9.34482 1.6127 10.3993C0.5816 11.4539 0.00161752 12.8837 0 14.375C0 14.5408 0.0643847 14.6997 0.17899 14.8169C0.293596 14.9342 0.449034 15 0.611111 15C0.773188 15 0.928626 14.9342 1.04323 14.8169C1.15784 14.6997 1.22222 14.5408 1.22222 14.375C1.22222 13.2147 1.67292 12.1019 2.47515 11.2814C3.27739 10.4609 4.36546 10 5.5 10C6.63454 10 7.72261 10.4609 8.52485 11.2814C9.32708 12.1019 9.77778 13.2147 9.77778 14.375C9.77778 14.5408 9.84216 14.6997 9.95677 14.8169C10.0714 14.9342 10.2268 15 10.3889 15C10.551 15 10.7064 14.9342 10.821 14.8169C10.9356 14.6997 11 14.5408 11 14.375C10.9984 12.8837 10.4184 11.4539 9.3873 10.3993C8.3562 9.34482 6.95819 8.75165 5.5 8.75Z" fill="#646464" />
                  </svg>
                  02 Comments
                </span>
              </div>

              <div className="prose max-w-none">
                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal text-justify">
                  We believe that informed patients make healthier choices. Our In-Depth Health Insights section is designed to provide you with comprehensive, evidence-based information on a wide range of health topics, empowering you to take control of your well-being.
                </p>
                
                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal text-justify mt-4">
                  What You'll Find: Detailed Articles on Medical Conditions - Gain a deeper understanding of various health conditions, including their causes, symptoms, diagnosis, and treatment options. Our expert-written articles break down complex medical information into easy-to-understand language.
                </p>

                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal text-justify mt-4">
                  Preventive Healthcare Strategies - Learn how to reduce your risk of developing chronic diseases through lifestyle changes, early detection, and regular screenings. Latest Research and Innovations - Stay updated with the latest advancements in medical technology, treatments, and procedures that can enhance your quality of life.
                </p>
              </div>
            </div>

            <div className="bg-[#DCE9F4] p-30 border-l-5 border-primary mt-50 rounded-lg">
              <div className="flex items-center gap-20 pb-20">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                  "
                </div>
                <h5 className="lg:text-2xl text-xl font-bold font-sora text-secondary">
                  Health Expert Opinion
                </h5>
              </div>
              <p className="font-bold text-secondary text-base xxl:leading-30 xl:leading-28 leading-26">
                Have you tried any of the recommendations or treatments mentioned? Let us know how they worked for you. Your experience might inspire others!
              </p>
            </div>

            <div className="md:py-50 py-30 text-center">
              <h3 className="xxl:text-5.2xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-bold py-20 font-sora text-secondary leading-[1.2]">
                Share Your Experience
              </h3>
              <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal max-w-3xl mx-auto">
                Your story has the power to make a difference. Whether you've overcome a health challenge, benefited from one of our services, or have valuable insights to share, we'd love to hear from you. Your journey can motivate others facing similar challenges to take positive steps toward their health.
              </p>
            </div>

            <div className="flex items-center justify-center py-30 border-b border-t border-[#D8D8D8] flex-wrap gap-10">
              <h4 className="text-xl font-bold font-sora text-secondary">
                Tags:
              </h4>
              <div className="flex gap-3">
                <span className="bg-[#f8f8f8] py-2 px-4 rounded-full text-secondary font-sora hover:text-white hover:bg-primary duration-500 cursor-pointer">
                  Wellness
                </span>
                <span className="bg-[#f8f8f8] py-2 px-4 rounded-full text-secondary font-sora hover:text-white hover:bg-primary duration-500 cursor-pointer">
                  Mental Health
                </span>
                <span className="bg-[#f8f8f8] py-2 px-4 rounded-full text-secondary font-sora hover:text-white hover:bg-primary duration-500 cursor-pointer">
                  Exercise
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-60 bg-[#DCE9F4] p-20 rounded-lg">
              <Link
                href="/blog/previous"
                className="font-bold flex items-center gap-4 text-secondary hover:text-primary duration-500"
              >
                <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary duration-500">
                  <svg width="16" height="8" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.731215 3.66545L3.95657 0.257795C4.03405 0.176108 4.12623 0.111272 4.22779 0.0670259C4.32935 0.0227798 4.43828 0 4.5483 0C4.65832 0 4.76726 0.0227798 4.86882 0.0670259C4.97038 0.111272 5.06256 0.176108 5.14003 0.257795C5.29526 0.421085 5.38239 0.641974 5.38239 0.872218C5.38239 1.10246 5.29526 1.32335 5.14003 1.48664L2.17304 4.61541H19.1666C19.3876 4.61541 19.5996 4.70723 19.7559 4.87067C19.9122 5.03411 20 5.25578 20 5.48693C20 5.71807 19.9122 5.93974 19.7559 6.10319C19.5996 6.26663 19.3876 6.35845 19.1666 6.35845H2.12303L5.14003 9.50464C5.21815 9.58566 5.28015 9.68205 5.32246 9.78826C5.36477 9.89446 5.38656 10.0084 5.38656 10.1234C5.38656 10.2385 5.36477 10.3524 5.32246 10.4586C5.28015 10.5648 5.21815 10.6612 5.14003 10.7422C5.06256 10.8239 4.97038 10.8887 4.86882 10.933C4.76726 10.9772 4.65832 11 4.5483 11C4.43828 11 4.32935 10.9772 4.22779 10.933C4.12623 10.8887 4.03405 10.8239 3.95657 10.7422L0.731215 7.3607C0.262995 6.87047 0 6.20594 0 5.51307C0 4.82021 0.262995 4.15568 0.731215 3.66545Z" fill="white"/>
                  </svg>
                </div>
                Previous Article
              </Link>
              
              <Link
                href="/blog/next"
                className="font-bold flex items-center gap-4 text-secondary hover:text-primary duration-500"
              >
                Next Article
                <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary duration-500">
                  <svg width="16" height="8" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2688 3.66545L16.0434 0.257795C15.966 0.176108 15.8738 0.111272 15.7722 0.0670259C15.6707 0.0227798 15.5617 0 15.4517 0C15.3417 0 15.2327 0.0227798 15.1312 0.0670259C15.0296 0.111272 14.9374 0.176108 14.86 0.257795C14.7047 0.421085 14.6176 0.641974 14.6176 0.872218C14.6176 1.10246 14.7047 1.32335 14.86 1.48664L17.827 4.61541H0.833425C0.612387 4.61541 0.400402 4.70723 0.244105 4.87067C0.087807 5.03411 0 5.25578 0 5.48693C0 5.71807 0.087807 5.93974 0.244105 6.10319C0.400402 6.26663 0.612387 6.35845 0.833425 6.35845H17.877L14.86 9.50464C14.7819 9.58566 14.7198 9.68205 14.6775 9.78826C14.6352 9.89446 14.6134 10.0084 14.6134 10.1234C14.6134 10.2385 14.6352 10.3524 14.6775 10.4586C14.7198 10.5648 14.7819 10.6612 14.86 10.7422C14.9374 10.8239 15.0296 10.8887 15.1312 10.933C15.2327 10.9772 15.3417 11 15.4517 11C15.5617 11 15.6707 10.9772 15.7722 10.933C15.8738 10.8887 15.966 10.8239 16.0434 10.7422L19.2688 7.3607C19.737 6.87047 20 6.20594 20 5.51307C20 4.82021 19.737 4.15568 19.2688 3.66545Z" fill="white"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleBlog
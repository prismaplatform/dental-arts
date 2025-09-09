import React from 'react'
import Link from 'next/link'

const Breadcrumb = ({ title, middletitle, subtitle, breadcrumbs }) => {
  return (
    <section
      className="pt-90 relative max-lg:bg-[right_center] bg-[#F2EFEF] about-banner overflow-hidden"

    >
      <div className="container">
        <div className="flex items-center lg:flex-row flex-col">
          <div className="lg:w-2/5 w-full">
            <div className="relative max-md:text-center">
              <h2 className="xxl:text-5.5xl xl:text-5.5xl md:text-5.2xl sm:text-4.75xl text-4.6xl font-bold capitalize font-sora text-secondary leading-[1.2]">
                {title}
              </h2>
             
            </div>
           
            {/* Dinamikus vagy statikus breadcrumb */}
            <ol className="mb-16 flex items-center max-md:justify-center max-md:mb-40 pt-10">
              {breadcrumbs ? (
                // Dinamikus breadcrumb több szinttel
                breadcrumbs.map((crumb, index) => (
                  <li
                    key={index}
                    className={`xxl:text-xxl md:text-xl text-sm font-sora capitalize ${
                      crumb.current
                        ? 'text-purple'
                        : 'text-purple hover:text-primary transition-colors'
                    } ${
                      index > 0 ? "before:content-['-'] before:float-left before:text-purple before:px-10" : ''
                    }`}
                    {...(crumb.current && { 'aria-current': 'page' })}
                  >
                    {crumb.current ? (
                      crumb.label
                    ) : (
                      <Link href={crumb.href}>
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))
              ) : (
                // Régi statikus breadcrumb (backward compatibility)
                <>
                  <li className="xxl:text-xxl md:text-xl text-sm text-purple font-sora capitalize hover:text-primary transition-colors">
                    <Link href="/"> {subtitle}</Link>
                  </li>
                  {middletitle && (
                    <li className="xxl:text-xxl md:text-xl text-sm text-purple font-sora capitalize hover:text-primary transition-colors before:content-['-'] before:float-left before:text-gary before:px-10">
                      <Link href="/blog">{middletitle}</Link>
                    </li>
                  )}
                  <li
                    className="xxl:text-xxl md:text-xl text-sm text-purple capitalize before:content-['-'] before:float-left before:text-gary before:px-10"
                    aria-current="page"
                  >
                    {title}
                  </li>
                </>
              )}
            </ol>
          </div>
         
          <div className="lg:w-3/5 w-full flex justify-end lg:justify-center">
            <div className="w-full max-w-none lg:pl-8">
              <img
                src="/assets/img/bannernew6.png"
                alt="img"
                className="w-full max-w-none xxl:scale-110 xl:scale-105 lg:scale-100 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
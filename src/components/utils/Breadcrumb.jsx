import React from 'react'
import Link from 'next/link'

const Breadcrumb = ({ title, middletitle, subtitle, breadcrumbs }) => {
  return (
    <section
      className="pt-90 relative max-lg:bg-[right_center] bg-[#f4f4f4] about-banner overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/img/bannr-bg-img.png)'
      }}
    >
      <div className="container">
        <div className="row items-center">
          <div className="lg:w-1/2 w-full">
            <div className="relative max-md:text-center">
              <h2 className="xxl:text-7.7xl xl:text-6.3xl md:text-5.2xl sm:text-4.75xl text-4.6xl font-bold capitalize font-sora text-secondary leading-[1.2]">
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
                        ? 'text-gary' 
                        : 'text-secondary hover:text-primary transition-colors'
                    } ${
                      index > 0 ? "before:content-['-'] before:float-left before:text-gary before:px-10" : ''
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
                  <li className="xxl:text-xxl md:text-xl text-sm text-secondary font-sora capitalize hover:text-primary transition-colors">
                    <Link href="/"> Home </Link>
                  </li>
                  {middletitle && (
                    <li className="xxl:text-xxl md:text-xl text-sm text-secondary font-sora capitalize hover:text-primary transition-colors before:content-['-'] before:float-left before:text-gary before:px-10">
                      <Link href="/blog">{middletitle}</Link>
                    </li>
                  )}
                  <li 
                    className="xxl:text-xxl md:text-xl text-sm text-gary capitalize before:content-['-'] before:float-left before:text-gary before:px-10" 
                    aria-current="page"
                  >
                    {subtitle}
                  </li>
                </>
              )}
            </ol>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div>
              <img 
                src="/assets/img/bannr-img-3.png" 
                alt="img" 
                className="w-[120%] xxl:max-w-[unset]"
              />
              <ul className="shaps">
                <li className="absolute">
                  <img 
                    src="/assets/img/shaps-1.png" 
                    alt="img" 
                    className="xxl:w-80 w-60 animate-topshap max-md:hidden"
                  />
                </li>
                
               
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
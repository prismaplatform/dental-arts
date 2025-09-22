'use client'

import React from 'react'
import Image from 'next/image'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

const SingleBlog = () => {
  return (
    <>
      <section className="xxl:py-120 lg:py-100 md:py-80 py-60">
        <div className="container ">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <h2 className="xxl:text-5.2xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-bold py-20 font-sora text-secondary leading-[1.2] text-center">
                Teljes körű útmutató a fogászati egészség megőrzéséhez
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
              
             

              <div className="prose max-w-none">
                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal text-justify">
                  A fogászati egészség megőrzése nem csak esztétikai kérdés, hanem alapvető fontosságú az általános egészség és jólét szempontjából. A megfelelő szájhigiénia segít megelőzni a fogszuvasodást, az ínybetegségeket és egyéb súlyos egészségügyi problémákat.
                </p>
                
                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal text-justify mt-4">
                  Ebben a cikkben végigvezetjük, hogyan gondoskodj fogazatodról helyesen, milyen gyakran kell fogorvoshoz járni, és milyen korszerű kezelési lehetőségek állnak rendelkezésre a mai modern fogászatban.
                </p>

                <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal text-justify mt-4">
                  Naponta legalább kétszer moss fogat legalább két percig, használj fluoridos fogkrémet és puha sörtéjű fogkefét. A fogmosás során ügyelj arra, hogy minden fogfelszínt alaposan megtisztíts.
                </p>
              </div>
            </div>

            <div className="bg-[#DCE9F4] p-30 border-l-5 border-primary mt-50 rounded-lg">
              <div className="flex items-center gap-20 pb-20">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                  "
                </div>
                <h5 className="lg:text-2xl text-xl font-bold font-sora text-secondary">
                  Fogászati szakértő véleménye
                </h5>
              </div>
              <p className="font-bold text-secondary text-base xxl:leading-30 xl:leading-28 leading-26">
                Próbáltad már alkalmazni a fenti tanácsokat vagy kezeléseket? Oszd meg velünk tapasztalataidat, hogy másokat is inspirálhass!
              </p>
            </div>

            <div className="md:py-50 py-30 text-center">
              <h3 className="xxl:text-5.2xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-bold py-20 font-sora text-secondary leading-[1.2]">
                 Oszd meg a tapasztalataidat
              </h3>
              <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal max-w-3xl mx-auto">
                 A te történeted is sokat jelenthet mások számára. Ha átestél már valamilyen fogászati kezelésen, vagy hasznos tippjeid vannak, ne habozz megosztani velünk és a közösséggel!
              </p>
            </div>

            <div className="flex items-center justify-center py-30 border-b border-t border-[#D8D8D8] flex-wrap gap-10">
              <h4 className="text-xl font-bold font-sora text-secondary">
                Címkék:
              </h4>
              <div className="flex gap-3">
                <span className="bg-[#f8f8f8] py-2 px-4 rounded-full text-secondary font-sora hover:text-white hover:bg-primary duration-500 cursor-pointer">
                  Fogászat
                </span>
                <span className="bg-[#f8f8f8] py-2 px-4 rounded-full text-secondary font-sora hover:text-white hover:bg-primary duration-500 cursor-pointer">
                  Egészség
                </span>
                <span className="bg-[#f8f8f8] py-2 px-4 rounded-full text-secondary font-sora hover:text-white hover:bg-primary duration-500 cursor-pointer">
                  Szájhigiénia
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-60 bg-[#DCE9F4] p-20 rounded-lg">
              <Link
                href="/blog/previous"
                className="font-bold flex items-center gap-4 text-secondary hover:text-primary duration-500"
              >
                <div className="flex items-center justify-center rounded-full hover:bg-secondary duration-500">
                  <ArrowLeft size={20}/>
                </div>
               Eloző Blog
              </Link>
              
              <Link
                href="/blog/next"
                className="font-bold flex items-center gap-4 text-secondary hover:text-primary duration-500"
              >
                Következő Blog
                <div className="flex items-center justify-center rounded-full hover:bg-secondary duration-500">
                 <ArrowRight size={20}/>
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
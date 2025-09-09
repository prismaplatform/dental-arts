"use client";
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Dental Arts Praxis – Ahol a szakértelem családi hagyomány',
    role: 'Co-founder & CEO',
    image: '/assets/img/gallery/25.webp',
    bio: 'A Dental Arts Praxis nem csupán egy fogászati rendelő. Generációkon átívelően őrzik a szakmai precizitást, a minőséget és az emberközpontú hozzáállást. Nálunk a fogászat nemcsak hivatás, hanem örökség: a családi értékeken alapuló gondoskodás és bizalom minden egyes kezelést áthat. Hiszünk benne, hogy a legmagasabb színvonalú ellátás a törődésből, az alaposságból és a hagyomány iránti elkötelezettségből fakad és ezt minden mosolyban visszatükröződni látjuk.',
    quote: '"Alone we can do so little; together we can do so much."',
    socials: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://x.com/',
      instagram: 'https://www.instagram.com/',
      youtube: 'https://www.youtube.com/',
    },
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Dr. Istvan Robert Horváth',
    role: 'Dentist',
    image: '/assets/img/gallery/2.webp',
    socials: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://x.com/',
      instagram: 'https://www.instagram.com/',
      youtube: 'https://www.youtube.com/',
    },
    isFeatured: false,
  },
  {
    id: 3,
    name: 'Dr. Beatrice Horváth',
    role: 'Dentist',
    image: '/assets/img/gallery/4.webp',
    socials: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://x.com/',
      instagram: 'https://www.instagram.com/',
      youtube: 'https://www.youtube.com/',
    },
    isFeatured: false,
  },
  {
    id: 4,
    name: 'Dr. Noah Horváth Gergő',
    role: 'Dentist ',
    image: '/assets/img/DrNoahHorvathGergo.png',
    socials: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://x.com/',
      instagram: 'https://www.instagram.com/',
      youtube: 'https://www.youtube.com/',
    },
    isFeatured: false,
  }
];

const Team = ({subtitle, title,sectiontitle,sectioncontent}) => {
  const featuredMember = teamMembers.find((member) => member.isFeatured);
  const otherMembers = teamMembers.filter((member) => !member.isFeatured);
  return (
    <section className='lg:pt-120 md:pt-80 pt-60 relative section-about-two'>
      <div className="container">
        <div className="text-center mb-10">
          <span className="capitalize font-semibold xxl:text-xxl xl:text-xl sm:text-lg text-base text-primary font-sora pb-6 block">
            {subtitle}
          </span>
          <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-2.5xl font-semibold text-secondary font-sora leading-[1.2]">
           {title}
          </h2>
        </div>

        {/* Featured Team Member Section */}
        {featuredMember && (
          <div className="flex flex-col lg:flex-row items-center gap-40 py-20 border-b border-gray-300 mb-20">
            <div className="lg:w-1/2 w-full">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={featuredMember.image}
                  alt={featuredMember.name}
                  width={600}
                  height={600}
                  className="group-hover:scale-105 transition-transform duration-500 w-full"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h4 className="font-bold xl:text-2.3xl text-2xl pb-7 text-secondary leading-[1.2] font-sora">
                {sectiontitle}
              </h4>
              {/* <p className="text-xl font-semibold text-primary mb-6">
                {featuredMember.role}
              </p> */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
               {sectioncontent}
              </p>
              {/* <blockquote className="italic border-l-4 border-primary pl-4 text-gray-600 mb-8">
                "{featuredMember.quote}"
              </blockquote> */}
             
            </div>
          </div>
        )}
        {/* End of Featured Team Member Section */}

        <div className="grid grid-cols-12 gap-25">
          {otherMembers.map((member) => (
            <div key={member.id} className="xl:col-span-4 md:col-span-6 col-span-12">
              <div className="group">
                <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
                  <figure className="overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                     fill
                     style={{ objectFit: 'cover' }}
                      className="group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500 w-full"
                    />
                  </figure>
                  {/* <ul className="absolute bottom-20 left-0 gap-5 opacity-0 flex group-hover:bottom-20 max-lg:bottom-20 max-lg:left-20 max-lg:opacity-100 group-hover:left-20 group-hover:opacity-100 duration-500">
                    <li>
                      <a
                        href={member.socials.facebook}
                        aria-label="Facebook"
                        className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      >
                        <Facebook size={20} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.socials.twitter}
                        aria-label="Twitter"
                        className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      >
                        <Twitter size={20} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.socials.instagram}
                        aria-label="Instagram"
                        className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      >
                        <Instagram size={20} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.socials.youtube}
                        aria-label="Youtube"
                        className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm rounded-full hover:bg-primary duration-500 hover:text-white bg-white text-black"
                      >
                        <Youtube size={20} />
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="pt-20 flex items-center justify-between">
                  <div className='w-full'>
                    <span className="font-bold xxl:pb-10 pb-4 max-xxl:text-sm block text-secondary">
                      {member.role}
                    </span>
                    <h4 className="font-bold pb-10 block text-secondary xxl:text-2xl text-xl font-sora group-hover:text-primary duration-500">
                      <a href="javascript:void(0);">{member.name}</a>
                    </h4>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
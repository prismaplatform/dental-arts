// data/services.js
export const servicesData = [
  {
    id: 1,
    slug: 'medical-services',
    title: 'Medical Services',
    description: 'Our comprehensive preventive care services are designed to identify potential health issues before they become serious problems.',
    icon: `<svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7414 46V40.1304H13.5011C11.8953 40.1304 10.3552 39.512 9.2197 38.4113C8.08421 37.3105 7.4463 35.8176 7.4463 34.2609V28.3913H2.01718C1.85567 28.3906 1.6966 28.353 1.55285 28.2816C1.4091 28.2102 1.28469 28.1071 1.18969 27.9804C1.09764 27.858 1.03684 27.7161 1.01228 27.5665C0.987725 27.4168 1.00011 27.2637 1.04841 27.1196C5.22621 14.5587 8.1325 1.00001 24.319 1.00001C28.4694 0.99527 32.5149 2.26412 35.8759 4.62478C39.2368 6.98545 41.7408 10.3168 43.0291 14.1415C44.3173 17.9663 44.3238 22.0882 43.0474 25.9167C41.7711 29.7452 39.2776 33.0838 35.924 35.4544V46M19.3742 19.3124C18.8539 19.4842 18.3092 19.5766 17.7596 19.5863C17.097 19.5606 16.4461 19.4086 15.8441 19.1391C15.2421 18.8695 14.7007 18.4877 14.2509 18.0153C13.8011 17.5429 13.4517 16.9893 13.2226 16.386C12.9935 15.7828 12.8893 15.1417 12.9158 14.4993C12.9423 13.857 13.099 13.226 13.3771 12.6424C13.6552 12.0588 14.0491 11.534 14.5363 11.098C15.0236 10.6619 15.5947 10.3232 16.217 10.1011C16.8393 9.87907 17.5007 9.77799 18.1633 9.80368C18.5425 8.973 19.1538 8.26165 19.928 7.74996C20.7023 7.23827 21.6087 6.94663 22.5449 6.90797C23.4811 6.8693 24.4098 7.08516 25.2262 7.53116C26.0425 7.97716 26.714 8.63554 27.1647 9.43194C27.9872 9.03822 28.8913 8.83083 29.8086 8.82542C31.2993 8.81556 32.7412 9.33909 33.8584 10.2958C34.9757 11.2524 35.6895 12.575 35.8634 14.0102C36.8362 14.7125 37.6233 15.6284 38.1601 16.6827C38.6969 17.737 38.968 18.8998 38.9514 20.0754C39.0167 21.956 38.3096 23.7849 36.9852 25.1606C35.6607 26.5362 33.8273 27.3461 31.8874 27.4124C30.3858 27.3741 28.935 26.8767 27.7425 25.9912C26.55 25.1057 25.6766 23.8774 25.2474 22.4819C24.0522 22.5941 22.8502 22.351 21.8011 21.7848C20.7519 21.2186 19.9055 20.3562 19.3742 19.3124ZM19.3742 19.3124L19.9596 17.6303C20.4182 16.2986 21.3666 15.1773 22.6237 14.4803L23.8145 13.7172M35.0764 11.7608C30.8178 12.7978 30.1922 14.8326 29.8692 15.6739M34.9956 26.6702C34.5989 24.6339 33.5376 22.7751 31.9682 21.368" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>`,
    fullDescription: 'Our Medical Services encompass a wide range of healthcare solutions designed to meet your comprehensive health needs. From routine check-ups to specialized treatments, our experienced medical professionals are committed to providing exceptional care. We utilize state-of-the-art equipment and follow the latest medical protocols to ensure the highest quality of service.',
    features: [
      'Comprehensive health assessments',
      'Diagnostic services',
      'Treatment planning',
      'Follow-up care',
      'Emergency consultations'
    ],
    category: 'general'
  },
  {
    id: 2,
    slug: 'preventive-care',
    title: 'Preventive Care',
    description: 'Our comprehensive preventive care services are designed to identify potential health issues before they become serious problems.',
    icon: `<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.75 12.5H26.875M6.75 21.125H21.125M6.75 29.75H13.9375M19.1267 38.375H3.87499C3.11251 38.375 2.38124 38.0722 1.84206 37.533C1.3029 36.9938 1 36.2624 1 35.5V3.87501C1 3.1125 1.3029 2.38123 1.84206 1.84208C2.38124 1.3029 3.11251 1 3.87499 1H24.2473C25.0092 1.00016 25.74 1.3028 26.2789 1.84142L31.7836 7.34609C32.3222 7.88504 32.6248 8.61579 32.625 9.37776V19.2346M37.5501 24.16H30.2821V30.3329H24.1095V37.6009H30.2821V43.7733H37.5501V37.6009H43.7227V30.3329H37.5501V24.16Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>`,
    fullDescription: 'Prevention is better than cure. Our preventive care services focus on maintaining your health and preventing diseases before they occur. We offer comprehensive screenings, regular check-ups, and personalized health plans to keep you in optimal health.',
    features: [
      'Regular health screenings',
      'Vaccination programs',
      'Health education',
      'Lifestyle counseling',
      'Early detection programs'
    ],
    category: 'preventive'
  },
  {
    id: 3,
    slug: 'surgical-care',
    title: 'Surgical Care',
    description: 'Our comprehensive preventive care services are designed to identify potential health issues before they become serious problems.',
    icon: `<svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3078 36.9221L17.6155 46M28.6922 36.9221L32.3844 46M13.923 45.9999H36.0767M46.8029 1H2.84615C1.82655 1 1 1.89349 1 2.99568V34.9263C1 36.0285 1.82655 36.9222 2.84615 36.9222H47.1538C48.1735 36.9222 49 36.0285 49 34.9263V3.16069C49 1.96738 48.0164 1 46.8029 1ZM29.177 7.87495H20.8225V14.8529H13.7267V23.069H20.8225V30.0472H29.177V23.069H36.2723V14.8529H29.177V7.87495Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>`,
    fullDescription: 'Our surgical care services provide advanced surgical solutions with a focus on minimally invasive techniques when possible. Our skilled surgeons use the latest technology and techniques to ensure the best outcomes for our patients.',
    features: [
      'Minimally invasive procedures',
      'Advanced surgical techniques',
      'Pre and post-operative care',
      'Pain management',
      'Recovery support'
    ],
    category: 'surgical'
  },
  {
    id: 4,
    slug: 'custom-mouth-guards',
    title: 'Custom Mouth Guards',
    description: 'Our comprehensive preventive care services are designed to identify potential dental injuries during sports activities.',
    icon: `<svg width="56" height="47" viewBox="0 0 56 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2097 22.1778H19.8858L24.4913 16.0457L30.6322 26.7768L35.2378 20.6447H43.7888M28.0169 46L5.10098 25.2725C-7.35339 12.8361 10.9545 -11.0419 28.0169 8.27605C45.0795 -11.0419 63.3043 12.919 50.9329 25.2725L28.0169 46Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>`,
    fullDescription: 'Protect your teeth and jaw during sports and physical activities with our custom-fitted mouth guards. Made from high-quality materials and designed specifically for your mouth, they provide superior protection and comfort.',
    features: [
      'Custom fitting process',
      'High-quality materials',
      'Sports-specific designs',
      'Comfortable wear',
      'Maximum protection'
    ],
    category: 'dental'
  },
  {
    id: 5,
    slug: 'emergency-dental',
    title: 'Emergency Dental',
    description: 'Our comprehensive emergency dental services are available 24/7 to handle urgent dental situations.',
    icon: `<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.2585 14.7953H16.7101C15.6772 14.7953 14.6866 15.2148 13.9563 15.9613C13.2259 16.7079 12.8156 17.7205 12.8156 18.7763V26.7879M33.2614 26.0734C35.3328 26.0734 37.3193 26.9145 38.784 28.4118C40.2487 29.909 41.0716 31.9397 41.0716 34.0572C41.0716 36.1746 40.2487 38.2053 38.784 39.7026C37.3193 41.1998 35.3328 42.041 33.2614 42.041C31.1899 42.041 29.2034 41.1998 27.7387 39.7026C26.274 38.2053 25.4511 36.1746 25.4511 34.0572C25.4511 31.9397 26.274 29.909 27.7387 28.4118C29.2034 26.9145 31.1899 26.0734 33.2614 26.0734ZM33.2614 26.0734L33.2613 42.025M23.8232 26.4097H14.2916C13.4506 26.6883 12.7068 27.2105 12.1506 27.913C11.5944 28.6154 11.2498 29.4679 11.1586 30.3668L9.82668 37.2936M6.0939 41.4557L2.94721 41.4676C2.43078 41.4676 1.9355 41.2579 1.57032 40.8846C1.20515 40.5114 1 40.0051 1 39.4772C1 38.9493 1.20515 38.443 1.57032 38.0697C1.9355 37.6964 2.43078 37.4867 2.94721 37.4867L8.20468 37.4668H9.03224M24.2867 26.4098H12.8156V21.7302H31.8399M35.711 22.2457L36.5093 8.84387C37.2376 3.61688 42.1445 4.93458 44.0839 4.93458C44.5921 4.93458 45.0795 4.72822 45.4388 4.36091C45.7981 3.9936 46 3.49541 46 2.97595C46 2.45649 45.7981 1.95831 45.4388 1.591C45.0795 1.22368 44.5921 1.01733 44.0839 1.01733C40.3103 1.01733 38.8265 0.877994 37.7107 1.38955C36.2858 1.93139 35.0472 2.88767 34.1476 4.14046C33.2479 5.39326 32.7267 6.8878 32.648 8.4398L31.8341 22.0029M26.5045 30.0603L40.0182 38.0362M40.0182 30.0603L26.5045 38.0362M21.5781 34.0572C21.5781 35.6255 21.8803 37.1785 22.4674 38.6275C23.0546 40.0765 23.9151 41.393 25 42.502C26.0849 43.611 27.3729 44.4907 28.7904 45.0909C30.2078 45.6911 31.7271 46 33.2613 46C34.7956 46 36.3149 45.6911 37.7323 45.0909C39.1498 44.4907 40.4378 43.611 41.5227 42.502C42.6076 41.393 43.4681 40.0765 44.0553 38.6275C44.6424 37.1785 44.9446 35.6255 44.9446 34.0572C44.9446 30.8897 43.7137 27.852 41.5227 25.6123C39.3316 23.3726 36.3599 22.1143 33.2613 22.1143C30.1628 22.1143 27.1911 23.3726 25 25.6123C22.809 27.852 21.5781 30.8897 21.5781 34.0572ZM6.09388 41.4239C6.09388 41.9662 6.19839 42.5033 6.40144 43.0044C6.60449 43.5055 6.90211 43.9608 7.2773 44.3444C7.65249 44.7279 8.09791 45.0321 8.58812 45.2397C9.07833 45.4473 9.60374 45.5541 10.1343 45.5541C10.6649 45.5541 11.1903 45.4473 11.6806 45.2397C12.1708 45.0321 12.6162 44.7279 12.9914 44.3444C13.3666 43.9608 13.6642 43.5055 13.8672 43.0044C14.0703 42.5033 14.1748 41.9662 14.1748 41.4239C14.1748 40.3284 13.7491 39.2779 12.9914 38.5033C12.2336 37.7288 11.2059 37.2936 10.1343 37.2936C9.06274 37.2936 8.03503 37.7288 7.2773 38.5033C6.51957 39.2779 6.09388 40.3284 6.09388 41.4239Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>`,
    fullDescription: 'Dental emergencies can happen at any time. Our emergency dental services provide immediate care for urgent dental situations including severe tooth pain, broken teeth, and other dental trauma.',
    features: [
      '24/7 emergency availability',
      'Immediate pain relief',
      'Emergency procedures',
      'Trauma treatment',
      'After-hours support'
    ],
    category: 'dental'
  },
  {
    id: 6,
    slug: 'oral-surgery',
    title: 'Oral Surgery',
    description: 'Our comprehensive oral surgery services cover a wide range of procedures from simple tooth extractions to complex jaw surgeries.',
    icon: `<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.6523 34.7796C31.2155 29.593 37.0173 31.6639 36.7704 26.2501M23.5 46C35.9265 46 46 35.9265 46 23.5C46 11.0736 35.9265 1 23.5 1C11.0736 1 1 11.0736 1 23.5C1 35.9265 11.0736 46 23.5 46ZM11.9881 31.3838C13.9129 31.3838 15.4733 29.8234 15.4733 27.8985C15.4733 25.9738 13.9129 24.4134 11.9881 24.4134C10.0633 24.4134 8.50294 25.9738 8.50294 27.8985C8.50294 29.8234 10.0633 31.3838 11.9881 31.3838ZM35.463 15.3504C35.463 18.8151 32.6543 21.6238 29.1897 21.6238C26.6113 21.6238 24.3962 20.0682 23.4317 17.8444C22.9718 18.0027 22.4781 18.0887 21.9643 18.0887C19.4758 18.0887 17.4585 16.0714 17.4585 13.5829C17.4585 11.0944 19.4758 9.07714 21.9643 9.07714C23.2512 9.07714 24.4121 9.61667 25.2332 10.4819C26.3126 9.60361 27.6897 9.07711 29.1897 9.07711C32.6543 9.07711 35.463 11.8858 35.463 15.3504ZM23.5005 29.7113C23.1628 29.7113 22.8891 29.4377 22.8891 29.1002C22.8891 28.7625 23.1628 28.4888 23.5005 28.4888C23.838 28.4888 24.1117 28.7625 24.1117 29.1002C24.1117 29.4377 23.838 29.7113 23.5005 29.7113ZM10.641 13.938C10.3035 13.938 10.0298 13.6643 10.0298 13.3268C10.0298 12.9892 10.3035 12.7155 10.641 12.7155C10.9786 12.7155 11.2523 12.9892 11.2523 13.3268C11.2523 13.6643 10.9786 13.938 10.641 13.938ZM25.8491 39.1553C25.5116 39.1553 25.238 38.8817 25.238 38.544C25.238 38.2065 25.5116 37.9329 25.8491 37.9329C26.1866 37.9329 26.4604 38.2065 26.4604 38.544C26.4604 38.8817 26.1866 39.1553 25.8491 39.1553Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>`,
    fullDescription: 'Our oral surgery services include a comprehensive range of surgical procedures performed by experienced oral surgeons. From wisdom tooth extractions to complex reconstructive procedures, we provide expert surgical care.',
    features: [
      'Wisdom tooth extraction',
      'Dental implant placement',
      'Jaw surgery',
      'Reconstructive procedures',
      'Sedation options'
    ],
    category: 'dental'
  },
  {
    id: 7,
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Our comprehensive pediatric dental services are designed specifically for children to ensure a positive dental experience.',
    icon: `<svg width="43" height="47" viewBox="0 0 43 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.1429 22.5217C34.5894 22.5217 33.0997 21.9033 32.0012 20.8025C30.9028 19.7018 30.2857 18.2088 30.2857 16.6521C30.2857 15.0954 30.9028 13.6025 32.0012 12.5017C33.0997 11.4009 34.5894 10.7825 36.1429 10.7825C37.6963 10.7825 39.1861 11.4009 40.2845 12.5017C41.3829 13.6025 42 15.0954 42 16.6521C42 18.2088 41.3829 19.7018 40.2845 20.8025C39.1861 21.9033 37.6963 22.5217 36.1429 22.5217ZM36.1429 22.5217L36.1429 38.1739C36.1429 39.2117 35.7315 40.207 34.9992 40.9408C34.2669 41.6747 33.2737 42.0869 32.2381 42.0869C31.2025 42.0869 30.2093 41.6747 29.477 40.9408C28.7447 40.207 28.3333 39.2117 28.3333 38.1739V30.8017C28.3333 29.5045 27.8191 28.2603 26.9037 27.343C25.9884 26.4257 24.7469 25.9104 23.4524 25.9104C22.1579 25.9104 20.9164 26.4257 20.001 27.343C19.0857 28.2603 18.5714 29.5045 18.5714 30.8017V42.0869C18.5714 43.1248 18.16 44.1201 17.4278 44.8539C16.6955 45.5877 15.7023 46 14.6667 46C13.6311 46 12.6379 45.5877 11.9056 44.8539C11.1733 44.1201 10.7619 43.1248 10.7619 42.0869L10.7619 26.4348M6.85714 2.95648C5.30373 2.95648 3.81394 3.57488 2.71552 4.67564C1.61709 5.7764 1 7.26935 1 8.82606V16.6522C1 19.2467 2.02848 21.7349 3.8592 23.5695C5.68991 25.4041 8.17289 26.4348 10.7619 26.4348M10.7619 26.4348C13.3509 26.4348 15.8339 25.4041 17.6646 23.5695C19.4953 21.7349 20.5238 19.2467 20.5238 16.6522V8.82606C20.5238 7.26935 19.9067 5.7764 18.8083 4.67564C17.7099 3.57488 16.2201 2.95648 14.6667 2.95648M6.85714 1V5.89131M14.6667 1V5.89131" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>`,
    fullDescription: 'Creating positive dental experiences for children is our specialty. Our pediatric dentistry services focus on prevention, early intervention, and making dental visits fun and comfortable for young patients.',
    features: [
      'Child-friendly environment',
      'Gentle approach',
      'Preventive treatments',
      'Behavior management',
      'Parent education'
    ],
    category: 'dental'
  },
  {
    id: 8,
    slug: 'periodontal-care',
    title: 'Periodontal Care',
    description: 'Our comprehensive periodontal care services focus on the health of your gums and supporting structures.',
    icon: `<svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.1882 4.152L20.534 3.79086L20.534 3.79084L20.1882 4.152ZM4.29217 4.152L3.94639 3.79084L3.94639 3.79084L4.29217 4.152ZM4.29217 19.3713L4.63796 19.0101L4.63795 19.0101L4.29217 19.3713ZM28.8136 42.8487L28.4678 43.2099L28.4679 43.2099L28.8136 42.8487ZM36.7614 46L36.7615 46.5L36.7614 46ZM44.7086 42.8478L45.0544 43.2089L45.0544 43.2089L44.7086 42.8478ZM48 35.2383L48.5 35.2383L48 35.2383ZM44.7076 27.6295L44.3618 27.9906L44.3618 27.9907L44.7076 27.6295Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>`,
    fullDescription: 'Healthy gums are the foundation of oral health. Our periodontal care services include diagnosis, treatment, and management of gum disease and other conditions affecting the supporting structures of teeth.',
    features: [
      'Gum disease treatment',
      'Deep cleaning procedures',
      'Maintenance therapy',
      'Surgical interventions',
      'Preventive programs'
    ],
    category: 'dental'
  },
  {
    id: 9,
    slug: 'dental-implants',
    title: 'Dental Implants',
    description: 'Our comprehensive dental implant services provide permanent solutions for missing teeth with natural-looking results.',
    icon: `<svg width="51" height="47" viewBox="0 0 51 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 46H1M32.9564 24.5714L28.638 26.1292C27.8753 26.385 27.2447 26.935 26.8851 27.6584C26.5256 28.3817 26.4664 29.2192 26.7206 29.9864C26.9749 30.7536 27.5218 31.3878 28.2409 31.7495C28.9601 32.1112 29.7926 32.1707 30.5554 31.915L34.9782 30.3228C36.2507 29.896 37.3574 29.0774 38.1416 27.9829C38.9258 26.8883 39.3478 25.5734 39.3477 24.2242V22.4285C39.3477 20.7236 38.6744 19.0884 37.4758 17.8828C36.2772 16.6773 34.6515 16 32.9564 16H25.4999C24.177 16 22.8722 16.3098 21.6889 16.9049C20.5056 17.5 19.4763 18.364 18.6825 19.4285L18.0434 20.2857M11.6522 35.2857H4.19565C3.34811 35.2857 2.53529 35.6243 1.93598 36.2271C1.33668 36.8299 1 37.6475 1 38.5C1 39.3524 1.33668 40.17 1.93598 40.7728C2.53529 41.3756 3.34811 41.7142 4.19565 41.7142H22.3043M22.3043 41.7142L32.9565 41.7143C33.8041 41.7143 34.6169 41.3756 35.2162 40.7728C35.8155 40.17 36.1522 39.3525 36.1522 38.5C36.1522 37.6475 35.8155 36.8299 35.2162 36.2271C34.6169 35.6243 33.8041 35.2857 32.9565 35.2857H24.2793L21.6034 29.9028C20.8129 28.2965 19.5902 26.9453 18.0744 26.0029C16.5586 25.0605 14.8104 24.5645 13.0284 24.5714H4.19565C3.34811 24.5714 2.53529 24.9101 1.93598 25.5129C1.33668 26.1156 1 26.9332 1 27.7857C1 28.6382 1.33668 29.4557 1.93598 30.0585C2.53529 30.6613 3.34811 31 4.19565 31H13.0263C13.6203 30.9976 14.2031 31.1627 14.7085 31.4768C15.2139 31.7908 15.6216 32.241 15.8853 32.7764L19.4453 39.9378C19.7108 40.4718 20.1189 40.9208 20.6239 41.2346C21.1289 41.5483 21.7108 41.7144 22.3043 41.7142Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>`,
    fullDescription: 'Dental implants are the gold standard for replacing missing teeth. Our implant services include comprehensive evaluation, precise placement, and restoration to give you a natural-looking and functioning smile.',
    features: [
      'Single tooth replacement',
      'Multiple teeth solutions',
      'Full mouth reconstruction',
      'Immediate loading options',
      'Long-term maintenance'
    ],
    category: 'dental'
  }
];

export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};

export const getServicesByCategory = (category) => {
  return servicesData.filter(service => service.category === category);
};

export const SERVICES_PER_PAGE = 6;
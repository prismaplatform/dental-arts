import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';


export default function SocialWidget() {
  return (
    <div className="cs_social_links_wrap">
      <h2>Follow Us</h2>
      <div className="cs_social_links">
        <Link href="/">
          <Icon icon="fa-brands:facebook-f" />
        </Link>
        <Link href="/">
          <Icon icon="fa-brands:youtube" />
        </Link>
        <Link href="/">
          <Icon icon="fa-brands:linkedin-in" />
        </Link>
        <Link href="/">
          <Icon icon="fa-brands:twitter" />
        </Link>
        <Link href="/">
          <Icon icon="fa-brands:instagram" />
        </Link>
      </div>
    </div>
  );
}

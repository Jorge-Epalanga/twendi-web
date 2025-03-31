import { Link } from 'react-router';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  YoutubeIcon,
  InstagramIcon,
  Facebook01Icon,
  Linkedin01Icon,
  TiktokIcon,
} from '@hugeicons/core-free-icons';
import { navItems } from '@/constants';

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: typeof Facebook01Icon;
}) => (
  <a href={href} target="_blank" className="flex">
    <HugeiconsIcon icon={icon} size={26} color="#fff" strokeWidth={2} />
  </a>
);

const Footer = () => {
  const year = new Date().getFullYear(); 

  return (
    <footer className="w-full bg-black flex flex-col gap-16 px-20 py-24 text-white relative bottom-0">
      <Link to="/" className="w-full flex items-center justify-center md:items-start md:justify-start font-extrabold text-primary-10 text-3xl">
        Twendi
      </Link>
      <div className="w-full flex gap-8 md:gap-16 items-center justify-center md:items-start md:justify-start">
        <SocialLink href="https://www.facebook.com" icon={Facebook01Icon} />
        <SocialLink href="https://www.youtube.com" icon={YoutubeIcon} />
        <SocialLink href="https://www.instagram.com" icon={InstagramIcon} />
        <SocialLink href="https://www.linkedin.com" icon={Linkedin01Icon} />
        <SocialLink href="https://www.tiktok.com" icon={TiktokIcon} />
      </div>

      <nav className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-1">
        {
          navItems.map((item, index) => (
            <div className="flex flex-col items-center gap-4" key={index}>
          <h1 className="font-bold text-lg text-white">{item.title}</h1>
          {
            item.navLinks.map((navItem) => (
              <div className="flex flex-col items-center gap-3" key={navItem.id}>
            <Link to={navItem.to} className="font-medium text-sm hover:text-gray-100">{navItem.text}</Link>
          </div>
            ))
          }
        </div>
          ))
        }
      </nav>

        <p className="font-semibold text-sm text-white text-center mt-10">© {year} Epalanga Technologies S.A.</p>
    </footer>
  );
};

export default Footer;

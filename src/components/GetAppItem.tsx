import { ArrowRight } from 'lucide-react';

export const GetAppItem = ({
  href,
  src,
  alt,
  title,
}: {
  href: string;
  src: string;
  alt: string;
  title: string;
}) => (
  <a
    href={href}
    target="_blank"
    className="w-full flex gap-6 bg-primary-10 p-5 lg:p-6 items-center justify-between"
  >
    <img
      src={src}
      alt={alt}
      className="w-16 md:w-24 lg:w-28 h-auto rounded-xl"
    />
    <div className="flex items-start justify-center">
      <h2 className="font-bold text-xl">{title}</h2>
    </div>
    <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
  </a>
);
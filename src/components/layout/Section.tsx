import { Link } from 'react-router';

interface SectionProps {
  title: string;
  text: string;
  to: string;
  style: string;
  btnText: string;
  src: string;
  alt: string;
}

export const Section = ({ title, text, to, style, btnText, src, alt }: SectionProps) => (
  <section
    className={`w-full flex ${style} items-center justify-center px-6 py-10 md:px-12 md:py-9 lg:px-28 lg:py-14`}
  >
    <div className="w-full md:w-1/2 flex flex-col gap-2 lg:gap-4 items-center md:items-start justify-center lg:pr-8">
      <h2 className="font-bold text-xl lg:text-4xl text-wrap">{title}</h2>
      <p className="font-medium text-sm md:text-base lg:text-xl text-wrap text-gray-970">
        {text}
      </p>

      <Link
        to={to}
        className="w-full lg:w-1/2 border-2 border-primary-990 cursor-pointer hover:bg-primary-990 mt-2 rounded-lg p-2 font-bold text-primary-990 hover:text-primary-10 text-base text-center transition duration-300"
      >
        {btnText}
      </Link>
    </div>

    <div className="w-full md:w-auto items-center md:items-end justify-center">
      <img
        src={src}
        alt={alt}
        className="w-full h-full md:w-96 lg:w-md rounded-xl"
      />
    </div>
  </section>
);

import { useEffect } from 'react';
import { useLocation } from 'react-router';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { GetAppItem } from '@/components/GetAppItem';
import phoneWithBoxes from '@/assets/smartphone_and_delivery_boxes.jpg';
import canter from '@/assets/canter.jpg';
import busies from '@/assets/autocarros.jpg';
import twendi from '@/assets/icon.png';

interface SectionProps {
  title: string;
  text: string;
  to: string;
  style: string;
  btnText: string;
  src: string;
  alt: string;
}

const Section = ({
  title,
  text,
  to,
  style,
  btnText,
  src,
  alt,
}: SectionProps) => (
  <section
    className={`w-full flex ${style} items-center justify-center px-6 py-10 md:px-12 md:py-9 lg:px-28 lg:py-14`}
  >
    <div className="w-full md:w-1/2 flex flex-col gap-2 lg:gap-4 items-center md:items-start justify-center lg:pr-8">
      <h2 className="font-bold text-xl lg:text-4xl text-wrap">{title}</h2>
      <p className="font-medium text-sm md:text-base lg:text-xl text-wrap text-gray-970">
        {text}
      </p>

      <a
        href={to}
        target="_blank"
        className="w-full lg:w-1/2 border-2 border-primary-990 cursor-pointer hover:bg-primary-990 mt-2 rounded-lg p-2 font-bold text-primary-990 hover:text-primary-10 text-base text-center transition duration-300"
      >
        {btnText}
      </a>
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

const Passengers = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');

    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <div className="w-screen h-screen flex flex-col flex-1 overflow-x-hidden">
      <Header />
      <main className="w-full flex flex-col flex-1">
        <Section
          style="bg-primary-40 flex-col-reverse md:flex-row gap-5 md:gap-14 lg:gap-16"
          title="Precisa enviar ou receber uma encomenda?"
          text="Para enviar ou receber uma entrega com a Twendi é super fácil, 
            basta informar o local de recolha, o destino, escolher o veículo mais adequado para entrega e já!"
          to="https://play.google.com"
          btnText="Baixar a app"
          src={phoneWithBoxes}
          alt="Imagem de smartphone com caixas de entregas"
        />
        <Section
          style="bg-white flex-col gap-5 md:flex-row-reverse md:gap-16 lg:gap-28"
          title="Vai mudar de casa e precisa transportar os imóveis?"
          text="Entre na app, encontre motorisatas e veículos com qualidade e tamanho apropriado
            para transportar os seus imóveis, ou produtos e itens do seu negócio."
          to="https://app.apple.com"
          btnText="Obter o app"
          src={canter}
          alt="Imagem de uma carrinha com cargas"
        />
        <Section
          style="bg-primary-40 flex-col-reverse md:flex-row gap-5 md:gap-14 lg:gap-16"
          title="Tem uma atividade ou vai fazer uma escursão?"
          text="A Twendi o conecta às principais agências de viagens do país para que 
            você possa alugar autocarros para qualquer evento que estiver a realizar."
          to="https://play.google.com"
          btnText="Baixar a app"
          src={busies}
          alt="Imagem de autocarros"
        />
        <Section
          style="bg-white flex-col gap-5 md:flex-row-reverse md:gap-16 lg:gap-28"
          title="Fazer entregas nacionais sem complicações!"
          text="Precisa fazer entregas, enviar um pacote, um presente, um documento ou 
            mandar alguém buscar algo que esqueceu? A gente te ajuda. Envie com a Twendi,
            seja na sua cidade ou para todo país."
          to="https://app.apple.com"
          btnText="Baixar a app"
          src={canter}
          alt="Imagem de um autocarro levando cargas com as portas abertas"
        />
        <section className="w-full flex flex-col gap-10 bg-primary-40 px-4 py-8 md:p-14 lg:p-16">
          <h1
            id="passengerId"
            className="font-extrabold text-xl md:text-2xl lg:text-3xl"
          >
            Baixe a app para Passageiros
          </h1>
          <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            <GetAppItem
              href="https://play.google.com"
              src={twendi}
              alt="Logo da Twendi"
              title="Baixe o app na Play Store"
            />
            <GetAppItem
              href="https://app.apple.com"
              src={twendi}
              alt="Logo da Twendi"
              title="Baixe o app na App Store"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Passengers;

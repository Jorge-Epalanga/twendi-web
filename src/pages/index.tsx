import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

import Header from '@/components/layout/Header';
import HeroSection from '@/components/HeroSection';
import { Section } from '@/components/layout/Section';
import Footer from '@/components/layout/Footer';

import twendiCar from '@/assets/twendi_car.jpg';
import driver from '@/assets/driver.jpeg';
import ticket from '@/assets/bilhete.jpg';
import twendiMoto from '@/assets/twendi_moto.jpg';
import twendi from '@/assets/icon.png';
import twendiDriver from '@/assets/twendi_driver.jpg';

const GetAppItem = ({
  to,
  src,
  alt,
  title,
  text,
}: {
  to: string;
  src: string;
  alt: string;
  title: string;
  text: string;
}) => (
  <Link
    to={to}
    className="w-full flex gap-6 bg-primary-10 p-5 lg:p-6 items-center justify-between"
  >
    <img
      src={src}
      alt={alt}
      className="w-16 md:w-24 lg:w-36 h-auto rounded-xl"
    />
    <div className="flex flex-col gap-1 items-start justify-center">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="hidden md:flex font-medium text-lg lg:text-base text-primary-970">
        {text}
      </p>
    </div>
    <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
  </Link>
);

const Welcome = () => {
  return (
    <div className="w-screen h-screen flex flex-col flex-1 overflow-x-hidden">
      <Header />
      <main className="w-full flex flex-1 flex-col">
        <HeroSection />
        <Section
          style="bg-primary-40 flex-col-reverse md:flex-row gap-5 md:gap-14 lg:gap-16"
          title="Vá aonde quiser com a Twendi"
          text="Baixe o app, crie uma conta e Vá a qualquer lugar com a Twendi, contando 
            sempre com a melhor qualidade, comodidade e preço, além de ter acesso à todos
            serviços Twendi."
          to="/passengers"
          btnText="Saiba mais"
          src={twendiCar}
          alt="Imagem de um Carro preto da Twendi"
        />
        <Section
          style="bg-white flex-col gap-5 md:flex-row-reverse md:gap-16 lg:gap-28"
          title="Dirija com a Twendi quando quiser, e do seu jeito"
          text="Torne-se um motorista parceiro e Ganhe dinheiro dirigindo com a Twendi fazendo entregas ou viagens,
            ou ambos. Você pode dirigir perto de casa ou aonde quiser."
          to="/drivers"
          btnText="Saiba mais"
          src={driver}
          alt="Imagem de um motorista ao volante dirigindo"
        />
        <Section
          style="bg-primary-40 flex-col-reverse md:flex-row gap-5 md:gap-14 lg:gap-16"
          title="Quer viajar e precisa comprar um bilhete de passagem?"
          text="Crie uma conta, encontre agências de viagens aéreas ou rodoviárias,
            compre seus bilhetes de passagem ou obtenha acesso a todos os serviços prestados pelas 
            agências de viagens."
          to="/passengers"
          btnText="Saiba mais"
          src={ticket}
          alt="Imagem de smartphone com um bilhete de passagem"
        />
        <Section
          style="bg-white flex-col gap-5 md:flex-row-reverse md:gap-16 lg:gap-28"
          title="Prefere viajar de Moto?"
          text="A Twendi tem a solução para você, entre no app e chame um motoboy, 
            quer seja para uma viagem ou para fazer uma entrega de encomenda."
          to="/passengers"
          btnText="Saiba mais"
          src={twendiMoto}
          alt="Imagem de uma moto preta"
        />        
        <section className="w-full flex flex-col gap-10 bg-primary-40 px-4 py-8 md:p-14 lg:p-16">
          <h1 className="font-extrabold text-xl md:text-2xl lg:text-3xl">
            Baixe a app para obter todos os serviços Twendi
          </h1>
          <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">            
            <GetAppItem 
              to="/passengers#passengerId"
              src={twendi}
              alt="Logo da Twendi"
              title="Baixe o aplicativo Twendi"
              text="Para Passageiros"
            />
            <GetAppItem 
              to="/drivers#driverId"
              src={twendiDriver}
              alt="Logo da Twendi Driver"
              title="Baixe o app de Motorista"
              text="E Entregadores"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Welcome;

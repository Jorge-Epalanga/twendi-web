import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import twendi from '@/assets/icon.png';
import { useEffect, type ReactNode } from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLocation } from 'react-router';

const AboutItem = ({ title, text }: { title: string; text: string }) => (
  <div className="flex flex-col gap-2 items-start">
    <h1 className="font-bold text-2xl">{title}</h1>
    <div className="w-full md:w-80 h-1 bg-primary-990"></div>
    <div className="w-full md:w-lg flex mt-3">
      <p className="text-primary-950 font-medium text-base text-wrap">{text}</p>
    </div>
  </div>
);

const ContactItem = ({
  href,
  target = '_blank',
  icon,
  text,
}: {
  href: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  icon: ReactNode;
  text: string;
}) => (
  <a
    href={href}
    target={target}
    className="flex gap-3 items-center font-semibold text-primary-990 text-base"
  >
    {icon}
    {text}
  </a>
);

const About = () => {
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
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 items-start justify-center px-4 md:px-12 py-14 lg:px-14 lg:py-16 bg-primary-30">
          <img
            src={twendi}
            alt="Logo da Twendi"
            className="w-full md:w-36 lg:w-48 h-auto top-0"
          />
          <div className="flex flex-col gap-10 items-center">
            <AboutItem
              title="Quem Somos"
              text="Twendi é uma plataforma digital da Twendi Technologies, criada
                  para modernizar e facilitar a forma como os clientes interagem
                  com os serviços de transportes e logística, e a forma com as
                  pessoas interagem com as agências de viagens."
            />
            <AboutItem
              title="Nossa Missão"
              text="Nossa missão é fortalecer a conexão e o acesso das pessoas aos serviços de transportes e logística, 
                  agências de viagens em Angola, fornecendo uma plataforma digital completa e eficiente que facilite a 
                  conexão dos clientes com os principais agentes do mercado."
            />
            <AboutItem
              title="Nosso Compromisso"
              text="A Twendi está comprometida em ser a parceira ideal do seu dia - à - dia.
                   Trabalhamos continuamente para aprimorar nossa plataforma e oferecer soluções inovadoras que acompanhem as 
                   tendências do mercado e as apresentem soluções inovadoras."
            />
            <AboutItem
              title="Nossa Plataforma"
              text="A Twendi é a solução completa para o sucesso no mundo das viagens, fretes, e entregas. Nossa plataforma digital foi 
                  cuidadosamente projetada para atender às necessidades específicas dos clientes, oferecendo: 
                  Viagens, Logística, Entregas, Compras de bilhetes de passagem e muito mais."
            />
            <div className="w-full flex flex-col gap-2 items-start">
              <h1 id="contactId" className="font-bold text-2xl">
                Contactos
              </h1>
              <div className="w-full md:w-80 h-1 bg-primary-990"></div>
              <div className="w-full md:w-lg flex flex-col gap-3 mt-4">
                <ContactItem
                  href="tel:+244927635606"
                  target="_blank"
                  icon={<Phone />}
                  text="(+244) 927635606"
                />
                <ContactItem
                  href="mailto:twendi.tech@gmail.com?subject=Feedback&body=Olá, gostaria de dar um feedback a Twendi..."
                  target="_blank"
                  icon={<Mail />}
                  text="twendi.tech@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

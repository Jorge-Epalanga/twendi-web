import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router';
import { ChevronDown } from 'lucide-react';
import { GetAppItem } from '@/components/GetAppItem';

import Header from '@/components/layout/Header';
import { Section } from '@/components/layout/Section';
import driver from '@/assets/driver.jpeg';
import Footer from '@/components/layout/Footer';
import van from '@/assets/van_and_delivery_boxes.jpg';
import twendiDriver from '@/assets/twendi_driver.jpg';

const StepItem = ({ number, text }: { number: string; text: string }) => (
  <div className="w-full flex gap-6 items-center bg-primary-10 p-4">
    <div className="w-8 h-10 md:w-10 md:h-12 flex p-4 bg-primary-990 rounded-lg font-bold text-primary-10 items-center justify-center">
      {number}
    </div>
    <span className="font-semibold text-base md:text-lg">{text}</span>
  </div>
);

const BeDriverBtn = ({
  href,
  style,
  text,
}: {
  href: string;
  style?: string;
  text: string;
}) => (
  <a
    href={href}
    target="_blank"
    className={`w-full lg:w-1/3 ${style} border-2 border-primary-990 cursor-pointer hover:bg-primary-990 rounded-lg p-3 font-bold text-primary-990 hover:text-primary-10 text-base text-center transition duration-300`}
  >
    {text}
  </a>
);

const RequisiteOfCategory = ({
  categoryName,
  children,
}: {
  categoryName: string;
  children: ReactNode;
}) => (
  <div className="w-full h-auto flex flex-col gap-12 p-2 rounded-xl border border-primary-920 items-center">
    <h2 className="font-extrabold text-xl">{categoryName}</h2>
    <button className="group relative w-full flex items-center justify-center font-bold text-sm">
      <span>Ver Requisitos</span>
      <ChevronDown />
      <div className="absolute top-8 scale-y-0 z-20 group-focus:scale-y-100 origin-top duration-200 w-full bg-primary-10 p-2 rounded-b-xl border border-primary-50 shadow-md">
        {children}
      </div>
    </button>
  </div>
);

const Drivers = () => {
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
          title="Como se tornar um motorista de aplicativo parceiro Twendi"
          text="Pra quem a vida é corrida, ter um parceiro faz toda a diferença. Por isso,
         conta com a Twendi, e ganhe dinheiro fazendo viagens ou entregas!"
          to="https://play.google.com"
          btnText="Quero ser motorista"
          src={driver}
          alt="Pessoa ao volante dirigindo"
        />
        <Section
          style="bg-primary-30 flex-col-reverse md:flex-row-reverse gap-5 md:gap-14 lg:gap-16"
          title="Tem um veículo maior?, seja parceiro Twendi!"
          text="Torne-se parceiro Twendi e ganhe dinheiro fazendo entregas ou 
          levando imóveis e mercadorias de pessoas, negócios ou empresas."
          to="https:play.google.com"
          btnText="Quero ser motorista"
          src={van}
          alt="Pessoa ao volante dirigindo"
        />
        <div className="w-full flex flex-col gap-3 items-center justify-center px-8 py-10 md:px-20 md:py-12">
          <h1 className="font-bold text-3xl md:text-4xl text-center text-wrap">
            Quer se tornar um motorista de aplicativo?
          </h1>
          <p className="font-medium text-xl text-center text-primary-920 text-wrap">
            Confira o passo a passo:
          </p>
        </div>
        <div className="w-full flex flex-col gap-3 items-center px-3 py-10 md:px-20 md:py-16 bg-primary-40">
          <StepItem
            number="1"
            text="Baixe o app Twendi Driver na Play Store ou na App Store."
          />
          <StepItem
            number="2"
            text="Insira os seus dados como: nome, telefone, email, data de nasimento, etc."
          />
          <StepItem
            number="3"
            text="Escolha o tipo de veículo, como: Carro, Moto, Bicicleta, Van, Canter, etc."
          />
          <StepItem
            number="4"
            text="Escolha a sua categoria, como: Twendi Basic, Twendi Plus, Twendi Moto, etc."
          />
          <StepItem
            number="5"
            text="Escaneie com a câmera e Envie a sua carta ou licença de condução, e os documentos do veículo."
          />
          <StepItem
            number="6"
            text="Documentos aprovados, faça a sua primeira corrida ou entrega!"
          />
          <div className="w-full flex flex-col md:flex-row gap-4 mt-8 items-center justify-center">
            <BeDriverBtn
              href="https://play.google.com"
              text="Baixar na Play Store"
            />
            <BeDriverBtn
              href="https://app.apple.com"
              text="Baixar na App Store"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 items-center justify-center px-8 py-10 md:px-20 md:py-12">
          <h1 className="font-bold text-3xl md:text-4xl text-center text-wrap">
            Categorias para Motorista parceiro Twendi
          </h1>
          <p className="font-medium text-xl text-center text-primary-920 text-wrap">
            Aqui na Twendi, temos categorias para cada momento do seu dia.
            Passageiros(as) tem uma variedade de categorias que vão de entrega a
            custo-benefício que facilitam sua rotina.
          </p>
        </div>
        <div className="w-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center px-3 py-10 md:px-14 md:py-16 bg-primary-10">
          <RequisiteOfCategory
            categoryName="Twendi Moto"
            children={
              <p className="font-semibold">
                Pelo menos 2 Capassetes, e no máximo 2 passageiros.
              </p>
            }
          />
          <RequisiteOfCategory
            categoryName="Twendi Small"
            children={
              <p className="font-semibold">
                Viaturas ligeiras com níveis básico de conforto e estado técnico
              </p>
            }
          />
          <RequisiteOfCategory
            categoryName="Twendi Comfort"
            children={
              <p className="font-semibold">
                Viaturas de tipo jeep com tração e níveis médio de conforto e
                estado técnico
              </p>
            }
          />
          <RequisiteOfCategory
            categoryName="Twendi X"
            children={
              <p className="font-semibold">
                Viaturas de tipo jeep com tração 4×4, altos níveis de
                estabilidade, conforto e bom estado técnico
              </p>
            }
          />
        </div>
        <section className="w-full flex flex-col gap-10 bg-primary-40 px-4 py-8 md:p-14 lg:p-16">
          <h1
            id="driverId"
            className="font-extrabold text-xl md:text-2xl lg:text-3xl"
          >
            Baixe a app para Motoristas
          </h1>
          <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            <GetAppItem
              href="https://play.google.com"
              src={twendiDriver}
              alt="Logo da Twendi Driver"
              title="Baixe o app na Play Store"
            />
            <GetAppItem
              href="https://app.apple.com"
              src={twendiDriver}
              alt="Logo da Twendi Driver"
              title="Baixe o app na App Store"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Drivers;

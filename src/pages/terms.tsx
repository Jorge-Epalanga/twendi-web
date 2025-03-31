import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { privacyPoliceContent, termsContent } from '@/constants';

interface TermsProps {
  title: string;
  description?: string; // Adicionamos a descrição como opcional
  content: {
    heading: string;
    items: string[];
  }[];
  id: string;
}

const TermsItem: React.FC<TermsProps> = ({
  title,
  description,
  content,
  id,
}) => {
  return (
    <div className="max-w-3xl mx-auto p-8 md:p-6 md:bg-primary-10 md:shadow-lg md:rounded-lg">
      <h1 id={id} className="text-2xl font-bold text-primary-990 mb-4">
        {title}
      </h1>
      {description && <p className="font-medium text-primary-920 md:text-primary-900 mb-4">{description}</p>}
      {content.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold text-primary-940 md:text-primary-920 mb-2">
            {section.heading}
          </h2>
          <ul className="list-disc list-inside font-medium text-primary-920 md:text-primary-900">
            {section.items.map((item, idx) => (
              <li key={idx} className="mb-2 text-wrap">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Terms = () => {

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');

    if (hash) {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="w-screen h-screen flex flex-col flex-1 overflow-x-hidden">
      <Header />
      <main className="w-full flex flex-1 flex-col gap-8 md:gap-12 bg-primary-40 py-8 md:py-20">
      <TermsItem
          id="termsId"
          title="Termos de Uso da Twendi"
          description="Bem-vindo à Twendi, uma plataforma digital inovadora criada pela Twendi Technologies para conectar pessoas, serviços de transportes e logística. Ao utilizar nossa plataforma, você concorda com os seguintes termos de uso:"
          content={termsContent}
        />

        <TermsItem
          id="privacyId"
          title="Política de Privacidade da Twendi"
          description="A Twendi, plataforma digital inovadora criada pela Twendi Technologies, tem o compromisso de proteger a privacidade das informações de seus usuários e parceiros. Esta Política de Privacidade descreve como coletamos, usamos e protegemos os dados dos usuários e parceiros que utilizam nossa plataforma."
          content={privacyPoliceContent}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

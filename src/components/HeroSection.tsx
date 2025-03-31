import heroImage from '@/assets/pessoa_com_smartphone.png';
import { NavItem } from '@/components/NavItem';

const HeroSection = () => {
  return (
    <section className="w-full flex top-0">
      <div className="w-full md:w-1/2 md:h-[25rem] lg:h-[36rem] flex flex-col space-y-8 bg-black p-10 md:p-20 items-center justify-center font-bold text-primary-10">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-3xl lg:text-5xl text-wrap">
            Twendi, Tudo que Precisa em um Único App
          </h1>
        </div>
        <div className="w-72 md:w-80 flex flex-col gap-4 bg-white p-3 rounded-xl">
          <h2 className="font-bold text-md text-black text-wrap">
            Baixe o app e Crie a sua conta Twendi
          </h2>
          <div className="w-full flex flex-col gap-3">
            <button className="group bg-primary-990 hover:bg-primary-980 px-3 py-2 relative rounded-md font-semibold text-white hover:transition hover:duration-300">
              Baixar o app
              <div className="absolute w-full flex flex-col top-11 right-0 scale-y-0 p-3 rounded-xl bg-white border border-primary-30 shadow-2xl shadow-primary-990 group-hover:scale-y-100 origin-top duration-200 font-semibold text-black">
                <NavItem
                  to="/register"
                  title="Para Motoristas e Entregadores"
                  style="px-3 py-2 rounded-lg hover:bg-primary-30"
                />
                <NavItem
                  to="/register"
                  title="Para Passageiros"
                  style="px-3 py-2 rounded-lg hover:bg-primary-30"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-1/2  md:h-[25rem] lg:h-[36rem]">
        <img
          src={heroImage}
          alt="Imagem de sala de aula"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;

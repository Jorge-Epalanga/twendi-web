import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { X, Menu } from 'lucide-react';
import { NavItem } from '@/components/NavItem';

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full flex bg-white py-3 lg:px-16 lg:py-3 z-50 sticky top-0 border-b border-primary-30 shadow">
      <nav className="container px-4 mx-auto relative lg:text-sm items-center">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex shrink-0">
            <h1 className="font-bold text-2xl">Twendi</h1>
          </Link>
          <ul className="hidden lg:flex ml-16 space-x-4 items-center font-extrabold text-base">
            <NavItem
              to="/drivers"
              title="Motorista"
              style={`${isActive('/drivers') ? 'bg-primary-30' : 'bg-transparent' } p-2 rounded-lg hover:bg-primary-30`}
            />
            <NavItem
              to="/passengers"
              title="Passageiro"
              style={`${isActive('/passengers') ? 'bg-primary-30' : 'bg-transparent' } p-2 rounded-lg hover:bg-primary-30`}
            />
            <NavItem
              to="/about"
              title="Sobre nós"
              style={`${isActive('/about') ? 'bg-primary-30' : 'bg-transparent' } p-2 rounded-lg hover:bg-primary-30`}
            />
            <NavItem
              to="/about#contactId"
              title="Contactos"
              style={'p-2 rounded-lg hover:bg-primary-30'}
            />
          </ul>
          <div className="hidden lg:flex items-center gap-6 font-extrabold text-base">
            <button className="group bg-primary-990 hover:bg-primary-960 px-5 py-2 relative rounded-md font-semibold text-white hover:transition hover:duration-300">
              Baixar o app
              <div className="absolute w-80 flex flex-col top-11 right-0 scale-y-0 p-3 rounded-xl bg-white border border-primary-30 shadow-xl group-hover:scale-y-100 origin-top duration-200 font-semibold text-black">
                <NavItem
                  to="/drivers#driverId"
                  title="Para Motoristas e Entregadores"
                  style="px-3 py-2 rounded-lg hover:bg-primary-30"
                />
                <NavItem
                  to="/passengers#passengerId"
                  title="Para Passageiros"
                  style="px-3 py-2 rounded-lg hover:bg-primary-30"
                />
              </div>
            </button>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end items-center">
            <button onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div
            className={
              'items-center space-y-8 font-extrabold text-base fixed w-full right-0 z-20 top-10 bg-white p-12 flex flex-col justify-center lg:hidden'
            }
          >
            <ul className="flex flex-col space-y-5">
              <NavItem
                to="/drivers"
                title="Motorista"
                style={`${isActive('/drivers') ? 'bg-primary-30' : 'bg-transparent' } p-2 rounded-lg hover:bg-primary-30 text-center`}
              />
              <NavItem
                to="/passengers"
                title="Passageiro"
                style={`${isActive('/passengers') ? 'bg-primary-30' : 'bg-transparent' } p-2 rounded-lg hover:bg-primary-30 text-center`}
              />
              <NavItem
                to="/about"
                title="Sobre nós"
                style={`${isActive('/about') ? 'bg-primary-30' : 'bg-transparent' } p-2 rounded-lg hover:bg-primary-30 text-center`}
              />
              <NavItem
                to="/about#contactId"
                title="Contactos"
                style={'p-2 rounded-lg hover:bg-primary-30 text-center'}
              />
            </ul>
            <div className="w-full flex items-center justify-center gap-7 font-extrabold text-base">
              <button className="group w-full bg-primary-990 hover:bg-primary-960 px-3 py-2 relative rounded-md font-semibold text-white text-center hover:transition hover:duration-300">
                Baixar o app
                <div className="absolute w-full flex flex-col top-11 right-0 scale-y-0 p-3 rounded-xl bg-white border border-primary-30 shadow-xl group-hover:scale-y-100 origin-top duration-200 font-semibold text-black">
                  <NavItem
                    to="/drivers#driverId"
                    title="Para Motoristas e Entregadores"
                    style="px-3 py-2 rounded-lg hover:bg-primary-30"
                  />
                  <NavItem
                    to="/passengers#passengerId"
                    title="Para Passageiros"
                    style="px-3 py-2 rounded-lg hover:bg-primary-30"
                  />
                </div>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

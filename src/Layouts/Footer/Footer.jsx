import React from 'react';
import { ItemTitles } from '../../components/ItemTitles/ItemTitles';

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-800 text-white py-6 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="border-t border-white w-full mb-4 opacity-20"></div>
        <ItemTitles content="Hecho con ❤️ por Santiago Aguirre" styles="text-white font-semibold text-sm tracking-wide" />
        <p className="text-xs text-white/70">© {new Date().getFullYear()} Tienda Online. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

import { ItemTitles } from '../../components/ItemTitles/ItemTitles';

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 bg-blue-800 px-6 py-4 shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ItemTitles
          content="🛒 Consumo de API's"
          styles="text-xl sm:text-3xl text-white font-bold tracking-wide"
        />
        
      </div>
    </header>
  );
};

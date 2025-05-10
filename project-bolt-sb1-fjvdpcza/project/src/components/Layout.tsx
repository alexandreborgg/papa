import React from 'react';
import { Move as Dove } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="py-6 px-4 md:px-8 flex justify-center items-center border-b border-blue-100">
        <div className="flex items-center">
          <Dove className="h-8 w-8 text-blue-500 mr-3" />
          <h1 className="text-2xl font-serif text-blue-800 font-semibold">Jornada Espiritual</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        {children}
      </main>
      <footer className="py-6 border-t border-blue-100 text-center text-sm text-blue-700">
        <p>Inspirado nos ensinamentos do Papa Francisco &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;
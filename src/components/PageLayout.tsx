
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-dpmc-blue mb-8 border-b pb-4">{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;

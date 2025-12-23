import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LeadMagnet from './components/LeadMagnet';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 antialiased bg-gray-50">
      <Header />
      <main>
        <Hero />
        <LeadMagnet />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
      
      {/* Floating Call Button for Mobile */}
      <a 
        href="tel:0936340576"
        className="fixed bottom-6 right-6 md:hidden z-50 bg-gold-600 text-white p-4 rounded-full shadow-lg hover:bg-gold-700 transition-all animate-bounce"
        aria-label="Gọi ngay"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </div>
  );
};

export default App;
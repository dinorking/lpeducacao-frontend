import { useState, useEffect, type MouseEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToNearestLeadForm } from '../lib/leadFormScroll';

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o CTA após rolar 300px
      // Esconde quando chegar próximo ao formulário final
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const showThreshold = 300;
      const hideThreshold = documentHeight - windowHeight - 800;

      setIsVisible(scrollPosition > showThreshold && scrollPosition < hideThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToForm = (event: MouseEvent<HTMLButtonElement>) => {
    scrollToNearestLeadForm(event.currentTarget);
  };

  return (
    <>
      {isVisible && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-gray-200 shadow-2xl p-4 animate-in slide-in-from-bottom">
          <button
            onClick={scrollToForm}
            className="w-full h-14 bg-[#FF6B35] hover:bg-[#E55A28] text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
          >
            <span>Começar minha inscrição</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}

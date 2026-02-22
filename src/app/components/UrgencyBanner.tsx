import { useState, useEffect } from 'react';
import { Clock, X } from 'lucide-react';

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Mostra o banner após 10 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="hidden md:block fixed top-20 left-4 z-40 max-w-sm w-[calc(100%-2rem)] pointer-events-none">
      <div className="bg-amber-50 border-2 border-amber-400 rounded-lg shadow-xl p-4 relative animate-in slide-in-from-top duration-500 pointer-events-auto">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 hover:bg-amber-200 rounded transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4 text-amber-700" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          <div className="flex-shrink-0 w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-amber-900 mb-1">
              Período de inscrições em andamento
            </h3>
            <p className="text-sm text-amber-800">
              Garanta condições especiais preenchendo o formulário hoje. Vagas limitadas por polo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

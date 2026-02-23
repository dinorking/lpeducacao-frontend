import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl animate-in slide-in-from-bottom">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-[#0055A5] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Cookies e Privacidade
              </h3>
              <p className="text-sm text-gray-700">
                Utilizamos cookies para melhorar sua experiência e proteger seus dados conforme a LGPD.{' '}
                <a href="#" className="text-[#0055A5] hover:underline">
                  Política de Privacidade
                </a>
              </p>
            </div>
          </div>
          
          <div className="w-full sm:w-auto flex gap-2">
            <button
              onClick={handleReject}
              className="w-full sm:w-auto bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Recusar
            </button>

            <button
              onClick={handleAccept}
              className="w-full sm:w-auto bg-[#0055A5] hover:bg-[#003366] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

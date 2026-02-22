import { X } from 'lucide-react';
import { useState } from 'react';

export function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#FF6B35] text-white py-2 px-4 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
        <span className="font-semibold">🎓 Inscrições abertas!</span>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">Garanta sua vaga para 2026</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
        aria-label="Fechar"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

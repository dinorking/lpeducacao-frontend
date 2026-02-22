import { Monitor, MapPin, Clock3, Laptop } from 'lucide-react';

export function Flexibility() {
  const modalities = [
    {
      icon: Monitor,
      title: '100% EAD',
      description: 'Estude totalmente online, com aulas gravadas e ao vivo disponíveis 24h.'
    },
    {
      icon: MapPin,
      title: 'Presencial',
      description: 'Aulas nos polos com estrutura completa e professores especializados.'
    },
    {
      icon: Laptop,
      title: 'Semipresencial',
      description: 'Combine o melhor dos dois mundos: flexibilidade online + vivência presencial.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Estude do seu jeito
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Escolha a modalidade que melhor se adapta à sua rotina. Todas com a mesma qualidade e reconhecimento.
            </p>

            <div className="space-y-6">
              {modalities.map((modality, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                      <modality.icon className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">
                      {modality.title}
                    </h3>
                    <p className="text-gray-600">
                      {modality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <Clock3 className="w-6 h-6 text-[#0055A5] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#003366] mb-1">
                    Estude no seu ritmo
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Plataforma digital intuitiva com materiais sempre disponíveis. Acesse de qualquer dispositivo, quando quiser.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1758611974775-39e307bc3da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHVsdCUyMHN0dWRlbnQlMjBzdHVkeWluZyUyMGxhcHRvcCUyMGhvbWV8ZW58MXx8fHwxNzY5ODg4MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Pessoa estudando online"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
